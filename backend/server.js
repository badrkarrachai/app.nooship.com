const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParsser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
const nodemailer = require('nodemailer');
const fs = require('fs');
const bcrypt = require('bcrypt');
const crypto = require('crypto')
const sharp = require('sharp');
var coinbase = require('coinbase-commerce-node');
const { S3Client,PutObjectCommand,GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
require('dotenv').config();


var Client = coinbase.Client;
var resources = coinbase.resources;
var Webhook = coinbase.Webhook;

Client.init(process.env.AWS_CLIENT);


const app = express();
app.use(express.json());
app.use(cors({
    origin:[process.env.CORS_HOST],
    methods:["GET","POST"],
    credentials:true
}));
app.use(cookieParsser());
app.use(bodyParser.json({ limit: '10mb' })); // JSON requests
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
const storage = multer.memoryStorage(); // Store the uploaded file in memory as a buffer
const upload = multer({ storage: storage });

const s3 = new S3Client({
    
    credentials:{
        accessKeyId: process.env.AWS_ACCESSKEYID,
        secretAccessKey: process.env.AWS_SECRETACCESSKEY
    },
    region: process.env.AWS_REGION,
})

app.use(session({
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:600*600*240,
    },
}));

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})



//delete new image 
app.get('/delete_User_image', async (req, res) => {
    try{
        if(req.session.user){ 
            
            const getObjectParams = {
                Bucket: 'nooship',
                Key: req.session.user.ImageName,
            }
            
            const command = new DeleteObjectCommand(getObjectParams);
            await s3.send(command)
    
            const sql = "UPDATE `users` SET `Image`= '' WHERE `Id` = ?";
    
            db.query(sql, [req.session.user.Id], (err, data) => {
                if (err) return res.json("Something went wrong please try again later.");
                req.session.user.Image = '';
                return res.json({status:"Done",userImage:''});
            });
        }
    }catch(err){
        return res.json("Something went wrong!");
    }
})


//new upload picture

const randomImageName = (bytes= 32) => crypto.randomBytes(bytes).toString('hex')
app.post('/upload_profile_image_new', upload.single('newimage'), async (req, res) => {
    if(req.session.user){     
    try {
        //Delete the picture first from the bucket if prevouse picture exists
        
        if(req.session.user.ImageName !== ''){ 
            const getObjectParams = {
                Bucket: 'nooship',
                Key: req.session.user.ImageName,
            }
            
            const command = new DeleteObjectCommand(getObjectParams);
            await s3.send(command)
        }
        const buffer = await sharp(req.file.buffer).resize({height:200,width:200,fit: "cover"}).toBuffer()
        const ImageName = randomImageName();
        const params ={
            Bucket: 'nooship',
            Key: ImageName,
            Body: buffer,
            ContentType: req.file.mimetype,
        }

        const command = new PutObjectCommand(params)

        await s3.send(command)
        req.session.user.ImageName = ImageName;
        //get image 
        const getObjectParams = {
            Bucket: 'nooship',
            Key: ImageName,
        }
        const command1 = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3, command1, { expiresIn: 86400 });

        // her here here 
        const sql = "UPDATE `users` SET `Image`= ? WHERE `Id` = ?";

        db.query(sql, [ImageName, req.session.user.Id], (err, data) => {
            if (err) return res.json("Something went wrong please try again later.");
            req.session.user.Image = ImageName;
            return res.json({status:"Done",userImage:url});
        });

    } catch (error) {
        console.log(error);
        return res.json("Something went wrong!");
    }}
  });



//Checout
app.post("/checout_balance",async(req,res)=>{
    const amount = req.body.Price;
    if(req.session.user){
    try{
        const charge = await resources.Charge.create({
            name: "Nooship Payment",
            description: "This payment will be added to your wallet in Nooship website.",
            local_price:{
                amount: amount,
                currency: "USD",
            },
            pricing_type: "fixed_price",
            metadata:{
                user_id: req.session.user.Id,
            },
        });
        res.send({charged:true,message: charge})
    } catch (err) {
        res.send({charged:false})
    }
    }
}) 

//Is Logged
app.post("/webhooks", async (req,res)=>{
    try{
        const event = Webhook.verifyEventBody(
            req.rawBody,
            req.headers["x-cc-webhook-signature"],
            "875c4ddb-7b79-400c-96b6-af15b8354728"
        )
        if(event.type === "charge:confirmed"){
            let amount = event.data.pricing.local.amount;
            let userId = event.data.metadata.user_id;
            let notification = {title: "Payment successfully received",
                                notification: `The payment you made with ${amount} USD has been successfully added to your wallet.`
                                }
            const sql = "UPDATE users SET Balance = Balance + ? WHERE Id = ? ; INSERT INTO `notifications`(`IdUser`, `TitleNotification`, `Notification`) VALUES (?,?,?) ; INSERT INTO `payments`(`idUser`, `Type`, `paymentPrice`) VALUES (?,?,?)"
            db.query(sql,[amount,userId, userId,notification.title,notification.notification, userId,"Wallet",amount],(err,data)=>{
                if(err) res.status(500).json({error: err})
            });
            res.sendStatus(200);
        }

        if(event.type === "charge:failed"){
            let amount = event.data.pricing.local.amount;
            let userId = event.data.metadata.user_id;
            let notification = {title: "Payment failed",
                                notification: `The payment you made with ${amount} USD has been failed, please try again or call support for any issues.`
                                }
            const sql = "INSERT INTO `notifications`(`IdUser`, `TitleNotification`, `Notification`) VALUES (?,?,?)"
            db.query(sql,[userId,notification.title,notification.notification],(err,data)=>{
                if(err) res.status(500).json({error: err})
            });
            res.sendStatus(200);
        }
    }catch(err){
        res.status(500).json({
            error: err
        })
    }
})

//Is Logged
app.get("/isLogged", async (req,res)=>{
    if(req.session.user){
        res.send({logged:true})
    }else{
        res.send({logged:false})
    }
})

//Is Logged
app.get("/", async (req,res)=>{
    res.send("Hello World")
})
//LogOut
app.get("/logout", (req, res) => {
    // Destroy the session to log the user out
    req.session.destroy((err) => {
      if (err) {
        return res.sendStatus(500);
      }
      res.clearCookie("userId"); // Clear the session cookie
      res.send({ logged: false });
    });
  });


//Login
app.post("/login", async (req, res) => {
    const sql = "SELECT `Id`, `First_Name`, `Last_Name`, `Company_Name`, `Email`, `Password`, `Phone_Number`, IFNULL(Image, '') AS Image, `Role`, `AddressLine1`, `AddressLine2`, `City`, `PostCode`, `Country`, `Balance`, `State`, `Banned_Sites`, `Notes`, `Away_Status`, `Away_Start`, `Away_End` FROM `users` WHERE Email = ?";
  
    try{
        db.query(sql, [req.body.ReadyEmail], async (err, data) => {
            if (err) return res.json("Loging Failed");
            if (data.length > 0) {
              const match = await bcrypt.compare(req.body.password, data[0].Password);
              if (match) {
                    delete data[0].Password;
                    let ImageName = data[0].Image;
                if(data[0].Image !== ''){
                    //get image 
                    const getObjectParams = {
                        Bucket: 'nooship',
                        Key: data[0].Image,
                    }
                    const command1 = new GetObjectCommand(getObjectParams);
                    const url = await getSignedUrl(s3, command1, { expiresIn: 86400 });
                    data[0].Image = url;
                }
                req.session.user = {...data[0],ImageName: ImageName};
                
                return res.json({ logged: true, user: req.session.user });
              } else {
                return res.json({ logged: false, error: "Password is Wrong!" });
              }
            } else {
              return res.json({ logged: false, error: "Email is Wrong!" });
            }
          });
    }catch(err){
        return res.json("Something went wrong!");
    }
  });

//check if email is exsite
app.post("/email_is_excite", async (req,res)=>{
    const sql = "SELECT `Id`, `First_Name`, `Last_Name`, `Company_Name`, `Email`, `Password`, `Phone_Number`, IFNULL(Image, '') AS Image, `Role`, `AddressLine1`, `AddressLine2`, `City`, `PostCode`, `Country`, `Balance`, `State`, `Banned_Sites`, `Notes`, `Away_Status`, `Away_Start`, `Away_End` FROM `users` WHERE Email = ?";

    db.query(sql,[req.body.email2],(err,data)=>{
        if(err) return res.json("Loging Failed");
        if(data.length > 0){
            return res.json({Exist: true,firstName: data[0].First_Name})
        }else{
            return res.json({Exist:false})
        }
    });
})


//Create account
app.post("/CreateAccountMership239", async (req,res)=>{
    const sql = "INSERT INTO `users`(`First_Name`, `Last_Name`, `Email`, `Password`) VALUES (?,?,?,?)";

    bcrypt.hash(req.body.Password, 10, function(err, hash){
        if (err) {
            
          } else {
            db.query(sql,[req.body.FirstName,req.body.LastName,req.body.Email,hash],(err,data)=>{
                if(err) return res.json({Inserted:false})
                return res.json({Inserted:true})
            });
          }
    });
})

//Update Pasword
app.post("/UpdatepasswordMership2355423", async (req,res)=>{
    const sql = "UPDATE `users` SET `Password`= ? WHERE `Email` = ?";

    bcrypt.hash(req.body.password, 10, function(err, hash){
        if (err) {
            
          } else {
            db.query(sql,[hash,req.body.Email],(err,data)=>{
                if(err) return res.json({updated:false})
                return res.json({updated:true})
            });
          }
    });
})





app.post("/sendVerCodeAndGetCode", async (req,res)=>{
    //send Ver Code
    function generateVerificationCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'contact.vexiyart@gmail.com', // Your Gmail email address
        pass: 'xsup kpbc wqvp daru', // Your Gmail password or app-specific password
        },
    });
    // Read the HTML file
    let htmlContent = fs.readFileSync('html_templates/emailTemplate.html', 'utf-8');

    // Generate a random 6-digit verification code
    const verificationCode = generateVerificationCode();

    // Replace the placeholder with the generated verification code
    htmlContent = htmlContent.replace('{Your Verification Code}', verificationCode);
    htmlContent = htmlContent.replace('{UserName}', req.body.firstName1);
    // Email content with HTML
    const mailOptions = {
    from: 'contact.vexiyart@gmail.com',
    to: req.body.email, // Recipient's email address
    subject: 'Nooship verification code.',
    html: htmlContent, // Include HTML content with the replaced code
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json({Sent:false,errors:error})
        } else {
            return res.json({Sent:true,verCode:verificationCode})
        }
    });
})


//GET ALL THE UNCLIMED ADDRESSES
app.get("/get_unclimedaddress", async (req,res)=>{
        
    const sql = "SELECT `Id`, `First_Name`, `Last_Name`, `Company_Name`, `Phone_Number`, Image , `Role`, `AddressLine1`, `AddressLine2`, `City`, `PostCode`, `Country`, `State`, `Banned_Sites`, `Notes`, `Away_Status`, `Away_Start`, `Away_End` FROM `users` WHERE `Role` = 'R' and Id not in (SELECT `Id_Cliemd` from climedaddress WHERE `iduser` = ? ) and Id != ? ORDER by Country";
    if(req.session.user){ 
    db.query(sql,[req.session.user.Id,req.session.user.Id],async (err,data)=>{
        if(err) return res.json({addresses:[]});
        if(data.length > 0){
            for(var i=0;i<data.length;i++){
                if(data[i].Image !== ''){
                    //get image 
                    const getObjectParams = {
                        Bucket: 'nooship',
                        Key: data[i].Image,
                    }
                    const command1 = new GetObjectCommand(getObjectParams);
                    const url = await getSignedUrl(s3, command1, { expiresIn: 86400 });
                    data[i].Image = url;
                }
            }
            return res.json({addresses:data});
        }else{
            return res.json({addresses:[]});
        }
    });
}
});

//GET ALL THE CLIMED ADDRESSES
app.get("/get_climedaddress", async (req,res)=>{
        
    const sql = "SELECT `Id`, `First_Name`, `Last_Name`, `Company_Name`, `Phone_Number`, IFNULL(Image, '') AS Image,  `AddressLine1`, `AddressLine2`, `City`, `PostCode`, `Country`, `State`, `Banned_Sites`, `Notes`, `Away_Status`, `Away_Start`, `Away_End` FROM `users` WHERE `Role` = 'R' and Id in (SELECT `Id_Cliemd` from climedaddress WHERE `iduser` = ? ) and Id != ? ORDER by Country";
    if(req.session.user){ 
    db.query(sql,[req.session.user.Id,req.session.user.Id],async (err,data)=>{
        if(err) return res.json({addresses:[]});
        if(data.length > 0){
            for(var i=0;i<data.length;i++){
                if(data[i].Image !== ''){
                    //get image 
                    const getObjectParams = {
                        Bucket: 'nooship',
                        Key: data[i].Image,
                    }
                    const command1 = new GetObjectCommand(getObjectParams);
                    const url = await getSignedUrl(s3, command1, { expiresIn: 86400 });
                    data[i].Image = url;
                }
            }
            return res.json({addresses:data});
        }else{
            return res.json({addresses:[]});
        }
    });
}
});

//GET ALL THE CLIMED ADDRESSES For Expected delivery
app.get("/get_climedaddress_For_Expected_delivery", async (req,res)=>{
        
    const sql = "SELECT `Id`, `First_Name`, `Last_Name` ,`Country` FROM `users` WHERE `Role` = 'R' and Id in (SELECT `Id_Cliemd` from climedaddress WHERE `iduser` = ? ) and Id != ? ORDER by Country";
    if(req.session.user){ 
    db.query(sql,[req.session.user.Id,req.session.user.Id],(err,data)=>{
        if(err) return res.json({addresses:[]});
        if(data.length > 0){
            return res.json({addresses:data});
        }else{
            return res.json({addresses:[]});
        }
    });
}
});

//Add Adress To cliemd
app.post("/ClaimeAddressMership", async (req,res)=>{
        
    const sql = "INSERT INTO `climedaddress`(`iduser`, `Id_Cliemd`) VALUES (?,?)";
    if(req.session.user){ 
    db.query(sql,[req.session.user.Id,req.body.IdRishipper],(err,data)=>{
        if(err) return res.json("Something went wrong please try again later!");
        return res.json("claimed");
       
    });
}
});

//Delete spesific Climed address
app.post("/RemoveSpesificAddressFromCliemed", async (req,res)=>{
        
    const sql = "DELETE FROM `climedaddress` WHERE `iduser` = ? and `Id_Cliemd` = ?";
    if(req.session.user){ 
    db.query(sql,[req.session.user.Id,req.body.IdRishipper],(err,data)=>{
        if(err) return res.json("Something went wrong please try again later!");
        return res.json("Unclaimed");
       
    });
}
});

//Get Reshipper Details
app.post("/get_Spesific_Reshipper", async (req,res)=>{
        
    const sql = "SELECT `First_Name`, `Last_Name`, `Company_Name`, `Phone_Number`, IFNULL(Image, '') AS Image , `AddressLine1`, `AddressLine2`, `City`, `PostCode`, `Country`, `Balance`, `State`, `Banned_Sites`, `Notes`, `Away_Status`, `Away_Start`, `Away_End` FROM `users` WHERE `Id` = ? AND Role = 'R'";
    if(req.session.user){ 
    db.query(sql,[req.body.ReshipperIdv],async(err,data)=>{
        if(err) return res.json({address:[]});
        if(data.length > 0){
            for(var i=0;i<data.length;i++){
                if(data[i].Image !== ''){
                    //get image 
                    const getObjectParams = {
                        Bucket: 'nooship',
                        Key: data[i].Image,
                    }
                    const command1 = new GetObjectCommand(getObjectParams);
                    const url = await getSignedUrl(s3, command1, { expiresIn: 86400 });
                    data[i].Image = url;
                }
            }
            return res.json({address:data});
        }else{
            return res.json({address:[]});
        }
    });
}
});

//Add Expected parcel
app.post("/AddExpectedParcelMership", async (req,res)=>{
        
    const sql = "INSERT INTO `orders`(`idUser`, `Id_Reshipper`, `Notes`, `Date_Expected`, `Name_on_Parcel`, `Quantity`, `Tracking_Number`, `Courier`, `Price`) VALUES (?,?,?,?,?,?,?,?,?)";
    if(req.session.user){ 
    db.query(sql,[req.session.user.Id, req.body.IdRishipper, req.body.note, req.body.dateStatus, req.body.nameOnParcel1, req.body.quantity, req.body.trackingNumber1, req.body.courier1,req.body.price],(err,data)=>{
        if(err) return res.json("Something went wrong please try again later.");
        return res.json("Added");
       
    });
}
});

//ApplyPromoCode
app.post("/ApplypromocodeMership2023", async (req,res)=>{
    function compareDates(givenDateStr) {
        // Parse the given date string
        const givenDate = new Date(givenDateStr);
      
        // Get the current date and time
        const currentDate = new Date();
      
        // Compare the two Date objects
        if (givenDate > currentDate) {
          return true;
        } else {
          return false;
        }
    }
      
    const sql = "SELECT `IdPromo`, `PromoCode`, `Date_Expire`, `Number_Use`, `Discounted_Price` FROM `promos` WHERE `PromoCode` = ?";
    const sql2 = "UPDATE `promos` SET `Number_Use`= ? WHERE IdPromo = ? "
    if(req.session.user){ 
        let newNumberOfuse = 0;
        let idOfPromo  = 0;
    db.query(sql,[req.body.promoCode],(err,data)=>{
        if(err) return res.json({valid: false,message:"Something went wrong please try again later."});
        if(data.length > 0){
            const result = compareDates(data[0].Date_Expire);
            if(result){
                    if(data[0].Number_Use > 0){
                        newNumberOfuse = data[0].Number_Use - 1;
                        idOfPromo = data[0].IdPromo;
                        const Discounted_Price = data[0].Discounted_Price;
                        db.query(sql2,[newNumberOfuse,idOfPromo],(err,data)=>{
                            if(err) return res.json({valid: false,message:"Something went wrong please try again later."});
                            return res.json({valid: true,message: Discounted_Price});
                        });
                    }
                    else{
                        return res.json({valid: false,message:"This promo code has max number of use."});
                    }
            }else{
                return res.json({valid: false,message:"This promo code is expired."});
            }
        }else{
            return res.json({valid: false,message:"Invalid promo code."});
        }
       
    });
    
 }
});

//GET ALL THE Expected Parcels
app.post("/get_allExpectedParcels", async (req,res)=>{
        
    const sql = "SELECT orders.*,(SELECT CONCAT(users.First_Name,' ' ,users.Last_Name)  FROM users WHERE Id = idUser )AS Sender_Name,CONCAT(users.First_Name,' ',users.Last_Name) as ReciverName ,users.AddressLine1 as ReshipperAddress FROM `orders` JOIN users ON orders.Id_Reshipper = users.Id WHERE (idUser = ? or `Id_Reshipper` = ?) AND `Accept_Status` != 'True'";
    const sqlReciverName = "SELECT orders.*,(SELECT CONCAT(users.First_Name,' ' ,users.Last_Name)  FROM users WHERE Id = idUser )AS Sender_Name,CONCAT(users.First_Name,' ',users.Last_Name) as ReciverName ,users.AddressLine1 as ReshipperAddress FROM `orders` JOIN users ON orders.Id_Reshipper = users.Id WHERE (idUser = ? or `Id_Reshipper` = ?)AND `Accept_Status` != 'True' ORDER BY ReciverName" ;
    const sqlAdress = "SELECT orders.*,(SELECT CONCAT(users.First_Name,' ' ,users.Last_Name)  FROM users WHERE Id = idUser )AS Sender_Name,CONCAT(users.First_Name,' ',users.Last_Name) as ReciverName ,users.AddressLine1 as ReshipperAddress FROM `orders` JOIN users ON orders.Id_Reshipper = users.Id WHERE (idUser = ? or `Id_Reshipper` = ?) AND `Accept_Status` != 'True' ORDER BY ReshipperAddress";
    const sqlPrice = "SELECT orders.*,(SELECT CONCAT(users.First_Name,' ' ,users.Last_Name)  FROM users WHERE Id = idUser )AS Sender_Name,CONCAT(users.First_Name,' ',users.Last_Name) as ReciverName ,users.AddressLine1 as ReshipperAddress FROM `orders` JOIN users ON orders.Id_Reshipper = users.Id WHERE (idUser = ? or `Id_Reshipper` = ?) AND `Accept_Status` != 'True' ORDER BY Price DESC";
    if(req.session.user){ 
    if(req.body.filter == "ReciverName" ){
        db.query(sqlReciverName,[req.session.user.Id,req.session.user.Id],(err,data)=>{
            if(err) return res.json({parcels:[]});
            if(data.length > 0){
                return res.json({parcels:data});
            }else{
                return res.json({parcels:[]});
            }
        });
    }else if(req.body.filter == "Address"){
        db.query(sqlAdress,[req.session.user.Id,req.session.user.Id],(err,data)=>{
            if(err) return res.json({parcels:[]});
            if(data.length > 0){
                return res.json({parcels:data});
            }else{
                return res.json({parcels:[]});
            }
        });
    }
    else if(req.body.filter == "Price"){
        db.query(sqlPrice,[req.session.user.Id,req.session.user.Id],(err,data)=>{
            if(err) return res.json({parcels:[]});
            if(data.length > 0){
                return res.json({parcels:data});
            }else{
                return res.json({parcels:[]});
            }
        });
    }
    else{
        db.query(sql,[req.session.user.Id,req.session.user.Id],(err,data)=>{
            if(err) return res.json({parcels:[]});
            if(data.length > 0){
                return res.json({parcels:data});
            }else{
                return res.json({parcels:[]});
            }
        });
    }
}
});

//delete Expected Parcel
app.post("/DeleteExpectedParcelMership123", async (req,res)=>{
        
    const sql = "DELETE FROM `orders` WHERE `idOrder` = ? ";
    if(req.session.user){ 

    db.query(sql,[req.body.idParcel],(err,data)=>{
        if(err) return res.json("Something went wrong please try again later.");
        return res.json("Deleted");
       
    });
}
});

//Uodate Expected Parcel
app.post("/UpdateExpectParcelMership123", async (req,res)=>{
        
    const sql = "UPDATE `orders` SET `Id_Reshipper`= ? ,`Notes`= ?,`Date_Expected`= ?,`Name_on_Parcel`= ?,`Quantity`= ?,`Tracking_Number`= ?,`Courier`= ?,`Price`= ? WHERE `idUser` = ? AND `idOrder` = ?";
    if(req.session.user){ 
    db.query(sql,[ req.body.IdRishipper, req.body.note, req.body.dateStatus, req.body.nameOnParcel1, req.body.quantity, req.body.trackingNumber1, req.body.courier1,req.body.price,req.session.user.Id,req.body.IdOrder],(err,data)=>{
        if(err) return res.json("Something went wrong please try again later.");
        return res.json("Added");
       
    });
}
});


//Upadate User Data
app.post("/update_user_data_mership2023", async (req,res)=>{

    const sql = "UPDATE users SET `First_Name` = ?, `Last_Name` = ?, `Company_Name` = ?, `Phone_Number` = ?, `AddressLine1` = ?, `AddressLine2` = ?, `City` = ?, `PostCode` = ?, `Country` = ? ,`State`= ?,`Banned_Sites`= ?,`Notes`= ? ,`Away_Status`= ? ,`Away_Start`= ? ,`Away_End`= ? WHERE Id = ? ;"
    if(req.session.user){
        db.query(sql,[req.body.firstName1,req.body.lastName1,req.body.companyName1,req.body.phoneNumber,req.body.addressLine11,req.body.addressLine21,req.body.city1,req.body.postCode,req.body.country,req.body.state1,req.body.bannedSites,req.body.notes1,req.body.awayStatus,req.body.awayStartRester,req.body.awayEndRester,req.session.user.Id],(err,data)=>{
            if(err) return res.json("Something went wrong!");
            req.session.user.First_Name = req.body.firstName1,
            req.session.user.Last_Name = req.body.lastName1,
            req.session.user.Company_Name = req.body.companyName1,
            req.session.user.Phone_Number = req.body.phoneNumber,
            req.session.user.AddressLine1 = req.body.addressLine11,
            req.session.user.AddressLine2 = req.body.addressLine21,
            req.session.user.City = req.body.city1,
            req.session.user.PostCode = req.body.postCode,
            req.session.user.Country = req.body.country,
            req.session.user.State = req.body.state1,
            req.session.user.Banned_Sites = req.body.bannedSites,
            req.session.user.Notes = req.body.notes1
            req.session.user.Away_Status = req.body.awayStatus
            req.session.user.Away_Start = req.body.awayStartRester
            req.session.user.Away_End = req.body.awayEndRester


            return res.json("Done")
        });
    }
    
})

//Update user password

app.post("/update_user_password", async (req,res)=>{

    const sql = "UPDATE users SET `Password` = ? WHERE Id =? ;"
    if(req.session.user){
        bcrypt.hash(req.body.password, 10, function(err, hash){
            if (err) {
                return res.json("Something went wrong!")
            } else {
                db.query(sql,[hash,req.session.user.Id],(err,data)=>{
                    if(err) return res.json("Something went wrong!");
                    return res.json("Done")
                });
            }
    });
    }
    
})


//Get user data

app.get("/get_user_data_Mership", async (req,res)=>{

    try{
        const sql = "SELECT * FROM users WHERE Id =? ;"
    if(req.session.user){
        db.query(sql,[req.session.user.Id], async(err,data)=>{
            if(err) return res.json({status: false ,message: "Something went wrong!"});
            if(data.length>0){
                delete data[0].Password;
            let ImageUrl = data[0].Image;
            if(data[0].Image !== ''){
                const getObjectParams = {
                    Bucket: 'nooship',
                    Key: data[0].Image,
                }
                const command1 = new GetObjectCommand(getObjectParams);
                const url = await getSignedUrl(s3, command1, { expiresIn: 86400 });
                data[0].Image = url;
            }
            req.session.user = {...data[0],ImageName: ImageUrl};
            
            return res.json({status: true ,message: data[0]})
            }else{
                return res.json("Something went wrong!")
            }
        });
    }
    }catch(err){
        return res.json("Something went wrong!")
    }
    
})


function get_balance(idUser) {
    return new Promise((resolve, reject) => {
      const sqlBalnce = "SELECT Balance FROM `users` WHERE Id = ? ";
  
      db.query(sqlBalnce, [idUser], (err, data) => {
        if (err) {
            reject("Something went wrong!");
        } else {
          if (data.length > 0) {
            resolve(data[0].Balance);
          } else {
            reject("Something went wrong!");
          }
        }
      });
    });
  }

  function cut_balance(cutBalance,idUser) {
    return new Promise((resolve, reject) => {
      const sqlBalnce = "UPDATE `users` SET `Balance`= ? WHERE Id = ? ";
  
      db.query(sqlBalnce, [cutBalance,idUser], (err, data) => {
        if (err) {
            reject("Something went wrong!");
        } else {
            resolve("Done");
        }
      });
    });
  }
  function addPaymentRecord(idUser,idReshipper,idOrder,paymentPrice){
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO `payments`( `idUser`, `idReshipper`, `idOrder`, `paymentPrice`) VALUES (?,?,?,?)" 
        db.query(sql, [idUser,idReshipper,idOrder,paymentPrice], (err, data) => {
            if (err) {
                reject("Something went wrong!");
            } else {
                resolve("Done");
            }
        });
    });
  }

//Accept Parcel Reshipper

app.post("/accept_parcel_mership2023", async (req,res)=>{

    const sql = "UPDATE `orders` SET `Accept_Status`= ? , `Date_Accept` = ? WHERE `idOrder` = ? AND  Id_Reshipper = ?;"
    
    
    if(req.session.user){
        const idUser = req.body.idUser;
        const packageFee = req.body.packageFee;
        get_balance(idUser)
        .then(balanceCustomer => {
            if(balanceCustomer>= packageFee){
                cut_balance(balanceCustomer-packageFee,idUser).then(respo => {
                    if(respo ==="Done"){
                        get_balance(req.session.user.Id).then(balanceReshipper => {
                            cut_balance(balanceReshipper+packageFee,req.session.user.Id).then(respo => {
                                addPaymentRecord(idUser,req.session.user.Id,req.body.idParcel,packageFee).then(finalres =>{
                                    if(finalres ==="Done"){
                                        db.query(sql,["True",req.body.currentDate,req.body.idParcel,req.session.user.Id],(err,data)=>{
                                            if(err) return res.json("Something went wrong!");
                                            return res.json("Done")
                                        });
                                    }else{
                                        return res.json("Something went wrong!");
                                    }
                                    
                                }).catch(error => {
                                    return res.json(error);
                                });
                                
                            }).catch(err => {return res.json(error)})
                        })
                        .catch(error => {
                            return res.json(error);
                        });
                        
                    }else{
                        return res.json("Something went wrong!")
                    }
                }).catch(err => {return res.json(error)})
                
            }else{
                return res.json("Customer balance is not enough")
            }
        })
        .catch(error => {
            return res.json(error);
        });
        
    }
    
})

//get count of expected parcels

app.get("/get_count_expected_parcels", async (req,res)=>{

    const sql = "SELECT COUNT(`idOrder`) as ExpCount FROM `orders` WHERE (`idUser`= ? OR `Id_Reshipper`= ? ) AND `Accept_Status` = 'False'"
    if(req.session.user){
        db.query(sql,[req.session.user.Id,req.session.user.Id],(err,data)=>{
            if(err) return res.json({status: false,message: "Something went wrong!"});
            return res.json({status: true,message: data[0]})
        });
    }
    
})

//get count of Inventory

app.get("/get_count_inventory", async (req,res)=>{

    const sql = "SELECT COUNT(`idOrder`) as ExpCount FROM `orders` WHERE Accept_Status = 'True' AND (`idUser`= ? OR `Id_Reshipper`= ? )"
    if(req.session.user){
        db.query(sql,[req.session.user.Id,req.session.user.Id],(err,data)=>{
            if(err) return res.json({status: false,message: "Something went wrong!"});
            return res.json({status: true,message: data[0]})
        });
    }
    
})

//get count of Reshipped

app.get("/get_count_inv_reshipped", async (req,res)=>{

    const sql = "SELECT COUNT(`idOrder`) as ExpCount FROM `orders` WHERE Status = 'Reshipped' AND Accept_Status = 'True' AND (`idUser`= ? OR `Id_Reshipper`= ? ) "
    if(req.session.user){
        db.query(sql,[req.session.user.Id,req.session.user.Id],(err,data)=>{
            if(err) return res.json({status: false,message: "Something went wrong!"});
            return res.json({status: true,message: data[0]})
        });
    }
    
})

//GET ALL THE Inventory Parcels
app.post("/get_allInventoryParcels", async (req,res)=>{
    let st = req.body.Comingstatus === "Reshipped"? "Status	= 'Reshipped' AND":""
    const sql = "SELECT orders.*,DATEDIFF(CURRENT_DATE, orders.`Date_Accept`) AS Days_held ,(SELECT CONCAT(users.First_Name,' ' ,users.Last_Name)  FROM users WHERE Id = idUser )AS Sender_Name,CONCAT(users.First_Name,' ',users.Last_Name) as ReciverName ,users.AddressLine1 as ReshipperAddress FROM `orders` JOIN users ON orders.Id_Reshipper = users.Id WHERE "+st+" (idUser = ? or `Id_Reshipper` = ?) AND `Accept_Status` != 'False'";
    const sqlReciverName = "SELECT orders.*,DATEDIFF(CURRENT_DATE, orders.`Date_Accept`) AS Days_held ,(SELECT CONCAT(users.First_Name,' ' ,users.Last_Name)  FROM users WHERE Id = idUser )AS Sender_Name,CONCAT(users.First_Name,' ',users.Last_Name) as ReciverName ,users.AddressLine1 as ReshipperAddress FROM `orders` JOIN users ON orders.Id_Reshipper = users.Id WHERE "+st+" (idUser = ? or `Id_Reshipper` = ?)AND `Accept_Status` != 'False' ORDER BY ReciverName" ;
    const sqlAdress = "SELECT orders.*,DATEDIFF(CURRENT_DATE, orders.`Date_Accept`) AS Days_held ,(SELECT CONCAT(users.First_Name,' ' ,users.Last_Name)  FROM users WHERE Id = idUser )AS Sender_Name,CONCAT(users.First_Name,' ',users.Last_Name) as ReciverName ,users.AddressLine1 as ReshipperAddress FROM `orders` JOIN users ON orders.Id_Reshipper = users.Id WHERE "+st+" (idUser = ? or `Id_Reshipper` = ?) AND `Accept_Status` != 'False' ORDER BY ReshipperAddress";
    const sqlPrice = "SELECT orders.*,DATEDIFF(CURRENT_DATE, orders.`Date_Accept`) AS Days_held ,(SELECT CONCAT(users.First_Name,' ' ,users.Last_Name)  FROM users WHERE Id = idUser )AS Sender_Name,CONCAT(users.First_Name,' ',users.Last_Name) as ReciverName ,users.AddressLine1 as ReshipperAddress FROM `orders` JOIN users ON orders.Id_Reshipper = users.Id WHERE "+st+" (idUser = ? or `Id_Reshipper` = ?) AND `Accept_Status` != 'False' ORDER BY Price DESC";
    if(req.session.user){ 
    if(req.body.filter == "ReciverName" ){
        db.query(sqlReciverName,[req.session.user.Id,req.session.user.Id],(err,data)=>{
            if(err) return res.json({parcels:[]});
            if(data.length > 0){
                return res.json({parcels:data});
            }else{
                return res.json({parcels:[]});
            }
        });
    }else if(req.body.filter == "Address"){
        db.query(sqlAdress,[req.session.user.Id,req.session.user.Id],(err,data)=>{
            if(err) return res.json({parcels:[]});
            if(data.length > 0){
                return res.json({parcels:data});
            }else{
                return res.json({parcels:[]});
            }
        });
    }
    else if(req.body.filter == "Price"){
        db.query(sqlPrice,[req.session.user.Id,req.session.user.Id],(err,data)=>{
            if(err) return res.json({parcels:[]});
            if(data.length > 0){
                return res.json({parcels:data});
            }else{
                return res.json({parcels:[]});
            }
        });
    }
    else{
        db.query(sql,[req.session.user.Id,req.session.user.Id],(err,data)=>{
            if(err) return res.json({parcels:[]});
            if(data.length > 0){
                return res.json({parcels:data});
            }else{
                return res.json({parcels:[]});
            }
        });
    }
}
});


//UnAccept Parcel Reshipper

app.post("/unaccept_parcel_mership2023", async (req,res)=>{

    const sql = "UPDATE `orders` SET `Accept_Status`= ?, `Status`= ? WHERE `idOrder` = ? AND  Id_Reshipper = ?;"
    
    if(req.session.user){
        db.query(sql,["False","Processing",req.body.idParcel,req.session.user.Id],(err,data)=>{
            if(err) return res.json("Something went wrong!");
            return res.json("Done")
        });
    }
    
})


//Update status

app.post("/update_status_order_mership", async (req,res)=>{

    const sql = "UPDATE `orders` SET `Status`= ?, ImageLink = ? WHERE `idOrder` =? AND  Id_Reshipper =?;"
    
    if(req.session.user){
        db.query(sql,[req.body.Status,req.body.Parcelimagelink,req.body.IdOrder,req.session.user.Id],(err,data)=>{
            if(err) return res.json("Something went wrong!");
            return res.json("Done")
        });
    }
    
})

//Get all payments

app.get("/get_all_payments_mership", async (req,res)=>{

    const sql = "SELECT orders.Name_on_Parcel, (SELECT  IFNULL(users.Image, '') AS Image FROM users WHERE users.Id = payments.idReshipper) AS ImageReshipper, (SELECT  IFNULL(users.Image, '') AS Image FROM users WHERE users.Id = payments.idUser) AS ImageCustomar, users.Country, users.AddressLine1, CONCAT(users.First_Name,' ',users.Last_Name) AS Receiver_name, (SELECT CONCAT(users.First_Name,' ',users.Last_Name) FROM users WHERE users.Id = payments.idUser)AS SenderName , orders.Quantity,payments.datePayment,payments.paymentPrice FROM `payments` JOIN orders ON payments.idOrder = orders.idOrder JOIN users ON payments.idReshipper = users.Id WHERE payments.idUser = ? OR payments.idReshipper = ? ;"
    
    if(req.session.user){
        db.query(sql,[req.session.user.Id,req.session.user.Id], async(err,data)=>{
            if(err) return res.json("Something went wrong!");
            if(data.length > 0){
                for(var i=0;i<data.length;i++){
                    if(data[i].ImageReshipper !== ''){
                        //get image 
                        const getObjectParams = {
                            Bucket: 'nooship',
                            Key: data[i].ImageReshipper,
                        }
                        const command1 = new GetObjectCommand(getObjectParams);
                        const url = await getSignedUrl(s3, command1, { expiresIn: 86400 });
                        data[i].ImageReshipper = url;
                    }
                }
                for(var i=0;i<data.length;i++){
                    if(data[i].ImageCustomar !== ''){
                        //get image 
                        const getObjectParams = {
                            Bucket: 'nooship',
                            Key: data[i].ImageCustomar,
                        }
                        const command1 = new GetObjectCommand(getObjectParams);
                        const url = await getSignedUrl(s3, command1, { expiresIn: 86400 });
                        data[i].ImageCustomar = url;
                    }
                }
                return res.json({payments:data});
            }else{
                return res.json({payments:[]});
            }
        });
    }
    
})

//Get recent payments

app.get("/get_recent_payments_mership", async (req,res)=>{

    const sql = "SELECT orders.Name_on_Parcel, (SELECT IFNULL(users.Image, '') AS Image FROM users WHERE users.Id = payments.idReshipper) AS ImageReshipper, (SELECT IFNULL(users.Image, '') AS Image FROM users WHERE users.Id = payments.idUser) AS ImageCustomar, users.Country, users.AddressLine1, CONCAT(users.First_Name,' ',users.Last_Name) AS Receiver_name, (SELECT CONCAT(users.First_Name,' ',users.Last_Name) FROM users WHERE users.Id = payments.idUser)AS SenderName , orders.Quantity,payments.datePayment,payments.paymentPrice FROM `payments` JOIN orders ON payments.idOrder = orders.idOrder JOIN users ON payments.idReshipper = users.Id WHERE (WEEK(payments.datePayment) = WEEK(CURDATE()) AND YEAR(payments.datePayment) = YEAR(CURDATE())) AND ( payments.idUser = ? OR payments.idReshipper = ? ) LIMIT 3;"
    
    if(req.session.user){
        db.query(sql,[req.session.user.Id,req.session.user.Id], async (err,data)=>{
            if(err) return res.json("Something went wrong!");
            if(data.length > 0){
                for(var i=0;i<data.length;i++){
                    if(data[i].ImageReshipper !== ''){
                        //get image 
                        const getObjectParams = {
                            Bucket: 'nooship',
                            Key: data[i].ImageReshipper,
                        }
                        const command1 = new GetObjectCommand(getObjectParams);
                        const url = await getSignedUrl(s3, command1, { expiresIn: 86400 });
                        data[i].ImageReshipper = url;
                    }
                }
                for(var i=0;i<data.length;i++){
                    if(data[i].ImageCustomar !== ''){
                        //get image 
                        const getObjectParams = {
                            Bucket: 'nooship',
                            Key: data[i].ImageCustomar,
                        }
                        const command1 = new GetObjectCommand(getObjectParams);
                        const url = await getSignedUrl(s3, command1, { expiresIn: 86400 });
                        data[i].ImageCustomar = url;
                    }
                }
                return res.json({payments:data});
            }else{
                return res.json({payments:[]});
            }
        });
    }
    
})

//get user balance

app.get("/get_user_balance_mership", async (req,res)=>{

    const sql = "SELECT Balance FROM `users` WHERE Id = ? "
    
    if(req.session.user){
        db.query(sql,[req.session.user.Id],(err,data)=>{
            if(err) return res.json("Something went wrong!");
            if(data.length > 0){
                return res.json({balance:data[0].Balance});
            }else{
                return res.json({balance:0});
            }
        });
    }
    
})




app.listen(5080,()=>{console.log("Listening...")})