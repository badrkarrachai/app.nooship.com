const countries = [{
    countryName: "Afghanistan",
    countryShortcode: "AF",
    alpha3Code: "AFG",
    numberCode: "004",
    regions: ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamian", "Daykondi", "Farah", "Faryab", "Ghazni", "Ghowr", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Konar", "Kondoz", "Laghman", "Lowgar", "Nangarhar", "Nimruz", "Nurestan", "Oruzgan", "Paktia", "Paktika", "Panjshir", "Parvan", "Samangan", "Sar-e Pol", "Takhar", "Vardak", "Zabol"]
},
{
    countryName: "Albania",
    countryShortcode: "AL",
    alpha3Code: "ALB",
    numberCode: "008",
    regions: ["Berat", "Dibres", "Durres", "Elbasan", "Fier", "Gjirokastre", "Korce", "Kukes", "Lezhe", "Shkoder", "Tirane", "Vlore"]
},
{
    countryName: "Algeria",
    countryShortcode: "DZ",
    alpha3Code: "DZA",
    numberCode: "012",
    regions: ["Adrar", "Ain Defla", "Ain Temouchent", "Alger", "Annaba", "Batna", "Bechar", "Bejaia", "Biskra", "Blida", "Bordj Bou Arreridj", "Bouira", "Boumerdes", "Chlef", "Constantine", "Djelfa", "El Bayadh", "El Oued", "El Tarf", "Ghardaia", "Guelma", "Illizi", "Jijel", "Khenchela", "Laghouat", "Muaskar", "Medea", "Mila", "Mostaganem", "M'Sila", "Naama", "Oran", "Ouargla", "Oum el Bouaghi", "Relizane", "Saida", "Setif", "Sidi Bel Abbes", "Skikda", "Souk Ahras", "Tamanghasset", "Tebessa", "Tiaret", "Tindouf", "Tipaza", "Tissemsilt", "Tizi Ouzou", "Tlemcen"]
},
{
    countryName: "Andorra",
    countryShortcode: "AD",
    alpha3Code: "AND",
    numberCode: "020",
    regions: ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julia de Loria"]
},
{
    countryName: "Angola",
    countryShortcode: "AO",
    alpha3Code: "AGO",
    numberCode: "024",
    regions: ["Bengo", "Benguela", "Bie", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huila", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uige", "Zaire"]
},
{
    countryName: "Antarctica",
    countryShortcode: "AQ",
    alpha3Code: "ATA",
    numberCode: "010",
    regions: []
},
{
    countryName: "Antigua and Barbuda",
    countryShortcode: "AG",
    alpha3Code: "ATG",
    numberCode: "028",
    regions: ["Barbuda", "Redonda", "Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"]
},
{
    countryName: "Argentina",
    countryShortcode: "AR",
    alpha3Code: "ARG",
    numberCode: "032",
    regions: ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"]
},
{
    countryName: "Armenia",
    countryShortcode: "AM",
    alpha3Code: "ARM",
    numberCode: "051",
    regions: ["Aragatsotn", "Ararat", "Armavir", "Geghark'unik'", "Kotayk'", "Lorri", "Shirak", "Syunik'", "Tavush", "Vayots' Dzor", "Yerevan"]
},
{
    countryName: "Australia",
    countryShortcode: "AU",
    alpha3Code: "AUS",
    numberCode: "036",
    regions: ["Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"]
},
{
    countryName: "Austria",
    countryShortcode: "AT",
    alpha3Code: "AUT",
    numberCode: "040",
    regions: ["Burgenland", "Kaernten", "Niederoesterreich", "Oberoesterreich", "Salzburg", "Steiermark", "Tirol", "Vorarlberg", "Wien"]
},
{
    countryName: "Azerbaijan",
    countryShortcode: "AZ",
    alpha3Code: "AZE",
    numberCode: "031",
    regions: ["Abseron Rayonu", "Agcabadi Rayonu", "Agdam Rayonu", "Agdas Rayonu", "Agstafa Rayonu", "Agsu Rayonu", "Astara Rayonu", "Balakan Rayonu", "Barda Rayonu", "Beylaqan Rayonu", "Bilasuvar Rayonu", "Cabrayil Rayonu", "Calilabad Rayonu", "Daskasan Rayonu", "Davaci Rayonu", "Fuzuli Rayonu", "Gadabay Rayonu", "Goranboy Rayonu", "Goycay Rayonu", "Haciqabul Rayonu", "Imisli Rayonu", "Ismayilli Rayonu", "Kalbacar Rayonu", "Kurdamir Rayonu", "Lacin Rayonu", "Lankaran Rayonu", "Lerik Rayonu", "Masalli Rayonu", "Neftcala Rayonu", "Oguz Rayonu", "Qabala Rayonu", "Qax Rayonu", "Qazax Rayonu", "Qobustan Rayonu", "Quba Rayonu", "Qubadli Rayonu", "Qusar Rayonu", "Saatli Rayonu", "Sabirabad Rayonu", "Saki Rayonu", "Salyan Rayonu", "Samaxi Rayonu", "Samkir Rayonu", "Samux Rayonu", "Siyazan Rayonu", "Susa Rayonu", "Tartar Rayonu", "Tovuz Rayonu", "Ucar Rayonu", "Xacmaz Rayonu", "Xanlar Rayonu", "Xizi Rayonu", "Xocali Rayonu", "Xocavand Rayonu", "Yardimli Rayonu", "Yevlax Rayonu", "Zangilan Rayonu", "Zaqatala Rayonu", "Zardab Rayonu", "Ali Bayramli Sahari", "Baki Sahari", "Ganca Sahari", "Lankaran Sahari", "Mingacevir Sahari", "Naftalan Sahari", "Saki Sahari", "Sumqayit Sahari", "Susa Sahari", "Xankandi Sahari", "Yevlax Sahari", "Naxcivan Muxtar"]
},
{
    countryName: "Bahamas",
    countryShortcode: "BS",
    alpha3Code: "BHS",
    numberCode: "044",
    regions: ["Acklins and Crooked Islands", "Bimini", "Cat Island", "Exuma", "Freeport", "Fresh Creek", "Governor's Harbour", "Green Turtle Cay", "Harbour Island", "High Rock", "Inagua", "Kemps Bay", "Long Island", "Marsh Harbour", "Mayaguana", "New Providence", "Nichollstown and Berry Islands", "Ragged Island", "Rock Sound", "Sandy Point", "San Salvador and Rum Cay"]
},
{
    countryName: "Bahrain",
    countryShortcode: "BH",
    alpha3Code: "BHR",
    numberCode: "048",
    regions: ["Al Hadd", "Al Manamah", "Al Mintaqah al Gharbiyah", "Al Mintaqah al Wusta", "Al Mintaqah ash Shamaliyah", "Al Muharraq", "Ar Rifa' wa al Mintaqah al Janubiyah", "Jidd Hafs", "Madinat Hamad", "Madinat 'Isa", "Juzur Hawar", "Sitrah"]
},
{
    countryName: "Bangladesh",
    countryShortcode: "BD",
    alpha3Code: "BGD",
    numberCode: "050",
    regions: ["Barisal", "Chittagong", "Dhaka", "Khulna", "Rajshahi", "Sylhet"]
},
{
    countryName: "Barbados",
    countryShortcode: "BB",
    alpha3Code: "BRB",
    numberCode: "052",
    regions: ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"]
},
{
    countryName: "Belarus",
    countryShortcode: "BY",
    alpha3Code: "BLR",
    numberCode: "112",
    regions: ["Brest", "Homyel", "Horad Minsk", "Hrodna", "Mahilyow", "Minsk", "Vitsyebsk"]
},
{
    countryName: "Belgium",
    countryShortcode: "BE",
    alpha3Code: "BEL",
    numberCode: "056",
    regions: ["Antwerpen", "Brabant Wallon", "Brussels", "Flanders", "Hainaut", "Liege", "Limburg", "Luxembourg", "Namur", "Oost-Vlaanderen", "Vlaams-Brabant", "Wallonia", "West-Vlaanderen"]
},
{
    countryName: "Belize",
    countryShortcode: "BZ",
    alpha3Code: "BLZ",
    numberCode: "084",
    regions: ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo"]
},
{
    countryName: "Benin",
    countryShortcode: "BJ",
    alpha3Code: "BEN",
    numberCode: "204",
    regions: ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Oueme", "Plateau", "Zou"]
},
{
    countryName: "Bermuda",
    countryShortcode: "BM",
    alpha3Code: "BMU",
    numberCode: "060",
    regions: ["Devonshire", "Hamilton", "Hamilton", "Paget", "Pembroke", "Saint George", "Saint George's", "Sandys", "Smith's", "Southampton", "Warwick"]
},
{
    countryName: "Bhutan",
    countryShortcode: "BT",
    alpha3Code: "BTN",
    numberCode: "064",
    regions: ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangste", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"]
},
{
    countryName: "Bolivia",
    countryShortcode: "BO",
    alpha3Code: "BOL",
    numberCode: "068",
    regions: ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosi", "Santa Cruz", "Tarija"]
},
{
    countryName: "Bosnia and Herzegovina",
    countryShortcode: "BA",
    alpha3Code: "BIH",
    numberCode: "070",
    regions: ["Una-Sana [Federation]", "Posavina [Federation]", "Tuzla [Federation]", "Zenica-Doboj [Federation]", "Bosnian Podrinje [Federation]", "Central Bosnia [Federation]", "Herzegovina-Neretva [Federation]", "West Herzegovina [Federation]", "Sarajevo [Federation]", " West Bosnia [Federation]", "Banja Luka [RS]", "Bijeljina [RS]", "Doboj [RS]", "Fo?a [RS]", "Sarajevo-Romanija [RS]", "Trebinje [RS]", "Vlasenica [RS]"]
},
{
    countryName: "Botswana",
    countryShortcode: "BW",
    alpha3Code: "BWA",
    numberCode: "072",
    regions: ["Central", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "North East", "North West", "South East", "Southern"]
},
{
    countryName: "Brazil",
    countryShortcode: "BR",
    alpha3Code: "BRA",
    numberCode: "076",
    regions: ["Acre", "Alagoas", "Amapa", "Amazonas", "Bahia", "Ceara", "Distrito Federal", "Espirito Santo", "Goias", "Maranhao", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Para", "Paraiba", "Parana", "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondonia", "Roraima", "Santa Catarina", "Sao Paulo", "Sergipe", "Tocantins"]
},
{
    countryName: "Brunei",
    countryShortcode: "BN",
    alpha3Code: "BRN",
    numberCode: "096",
    regions: ["Belait", "Brunei and Muara", "Temburong", "Tutong"]
},
{
    countryName: "Bulgaria",
    countryShortcode: "BG",
    alpha3Code: "BGR",
    numberCode: "100",
    regions: ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Khaskovo", "Kurdzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofiya", "Sofiya-Grad", "Stara Zagora", "Turgovishte", "Varna", "Veliko Turnovo", "Vidin", "Vratsa", "Yambol"]
},
{
    countryName: "Burkina Faso",
    countryShortcode: "BF",
    alpha3Code: "BFA",
    numberCode: "854",
    regions: ["Bale", "Bam", "Banwa", "Bazega", "Bougouriba", "Boulgou", "Boulkiemde", "Comoe", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kenedougou", "Komondjari", "Kompienga", "Kossi", "Koulpelogo", "Kouritenga", "Kourweogo", "Leraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passore", "Poni", "Sanguie", "Sanmatenga", "Seno", "Sissili", "Soum", "Sourou", "Tapoa", "Tuy", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundweogo"]
},
{
    countryName: "Myanmar",
    countryShortcode: "MM",
    alpha3Code: "MMR",
    numberCode: "104",
    regions: ["Ayeyarwady", "Bago", "Magway", "Mandalay", "Sagaing", "Tanintharyi", "Yangon", "Chin State", "Kachin State", "Kayin State", "Kayah State", "Mon State", "Rakhine State", "Shan State"]
},
{
    countryName: "Burundi",
    countryShortcode: "BI",
    alpha3Code: "BDI",
    numberCode: "108",
    regions: ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rutana", "Ruyigi"]
},
{
    countryName: "Cambodia",
    countryShortcode: "KH",
    alpha3Code: "KHM",
    numberCode: "116",
    regions: ["Banteay Mean Chey", "Batdambang", "Kampong Cham", "Kampong Chhnang", "Kampong Spoe", "Kampong Thum", "Kampot", "Kandal", "Koh Kong", "Kracheh", "Mondol Kiri", "Otdar Mean Chey", "Pouthisat", "Preah Vihear", "Prey Veng", "Rotanakir", "Siem Reab", "Stoeng Treng", "Svay Rieng", "Takao", "Keb", "Pailin", "Phnom Penh", "Preah Seihanu"]
},
{
    countryName: "Cameroon",
    countryShortcode: "CM",
    alpha3Code: "CMR",
    numberCode: "120",
    regions: ["Adamaoua", "Centre", "Est", "Extreme-Nord", "Littoral", "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest"]
},
{
    countryName: "Canada",
    countryShortcode: "CA",
    alpha3Code: "CAN",
    numberCode: "124",
    regions: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"]
},
{
    countryName: "Cape Verde",
    countryShortcode: "CV",
    alpha3Code: "CPV",
    numberCode: "132",
    regions: ["Santo Antão", "São Vicente", "Santa Luzia,", "São Nicolau", "Sal", "Boa Vista", "Maio", "Santiago", "Fogo", "Brava"]
},
{
    countryName: "Central African Republic",
    countryShortcode: "CF",
    alpha3Code: "CAF",
    numberCode: "140",
    regions: ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kemo", "Lobaye", "Mambere-Kadei", "Mbomou", "Nana-Grebizi", "Nana-Mambere", "Ombella-Mpoko", "Ouaka", "Ouham", "Ouham-Pende", "Sangha-Mbaere", "Vakaga"]
},
{
    countryName: "Chad",
    countryShortcode: "TD",
    alpha3Code: "TCD",
    numberCode: "148",
    regions: ["Batha", "Biltine", "Borkou-Ennedi-Tibesti", "Chari-Baguirmi", "Guéra", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mayo-Kebbi", "Moyen-Chari", "Ouaddaï", "Salamat", "Tandjile"]
},
{
    countryName: "Chile",
    countryShortcode: "CL",
    alpha3Code: "CHL",
    numberCode: "152",
    regions: ["Aysen", "Antofagasta", "Araucania", "Atacama", "Bio-Bio", "Coquimbo", "O'Higgins", "Los Lagos", "Magallanes y la Antartica Chilena", "Maule", "Santiago Region Metropolitana", "Tarapaca", "Valparaiso"]
},
{
    countryName: "China",
    countryShortcode: "CN",
    alpha3Code: "CHN",
    numberCode: "156",
    regions: ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang", "Guangxi", "Nei Mongol", "Ningxia", "Xinjiang", "Xizang (Tibet)", "Beijing", "Chongqing", "Shanghai", "Tianjin"]
},
{
    countryName: "Colombia",
    countryShortcode: "CO",
    alpha3Code: "COL",
    numberCode: "170",
    regions: ["Amazonas", "Antioquia", "Arauca", "Atlantico", "Bogota District Capital", "Bolivar", "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco", "Cordoba", "Cundinamarca", "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Narino", "Norte de Santander", "Putumayo", "Quindio", "Risaralda", "San Andres & Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupes", "Vichada"]
},
{
    countryName: "Comoros",
    countryShortcode: "KM",
    alpha3Code: "COM",
    numberCode: "174",
    regions: ["Grande Comore (Njazidja)", "Anjouan (Nzwani)", "Moheli (Mwali)"]
},
{
    countryName: "Congo, Democratic Republic",
    countryShortcode: "CD",
    alpha3Code: "COD",
    numberCode: "180",
    regions: ["Bandundu", "Bas-Congo", "Equateur", "Kasai-Occidental", "Kasai-Oriental", "Katanga", "Kinshasa", "Maniema", "Nord-Kivu", "Orientale", "Sud-Kivu"]
},
{
    countryName: "Congo, Republic of the",
    countryShortcode: "CG",
    alpha3Code: "COG",
    numberCode: "178",
    regions: ["Bouenza", "Brazzaville", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lekoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"]
},
{
    countryName: "Costa Rica",
    countryShortcode: "CR",
    alpha3Code: "CRI",
    numberCode: "188",
    regions: ["Alajuela", "Cartago", "Guanacaste", "Heredia", "Limon", "Puntarenas", "San Jose"]
},
{
    countryName: "Cote d'Ivoire",
    countryShortcode: "CI",
    alpha3Code: "CIV",
    numberCode: "384",
    regions: ["Abidjan", "Bas-Sassandra", "Comoé", "Denguélé", "Gôh-Djiboua", "Lacs", "Lagunes", "Montagnes", "Sassandra-Marahoué", "Savanes", "Vallée du Bandama", "Woroba", "Yamoussoukro", "Zanzan"]
},
{
    countryName: "Croatia",
    countryShortcode: "HR",
    alpha3Code: "HRV",
    numberCode: "191",
    regions: ["Bjelovarsko-Bilogorska", "Brodsko-Posavska", "Dubrovacko-Neretvanska", "Istarska", "Karlovacka", "Koprivnicko-Krizevacka", "Krapinsko-Zagorska", "Licko-Senjska", "Medimurska", "Osjecko-Baranjska", "Pozesko-Slavonska", "Primorsko-Goranska", "Sibensko-Kninska", "Sisacko-Moslavacka", "Splitsko-Dalmatinska", "Varazdinska", "Viroviticko-Podravska", "Vukovarsko-Srijemska", "Zadarska", "Zagreb", "Zagrebacka"]
},
{
    countryName: "Cuba",
    countryShortcode: "CU",
    alpha3Code: "CUB",
    numberCode: "192",
    regions: ["Camaguey", "Ciego de Avila", "Cienfuegos", "Ciudad de La Habana", "Granma", "Guantanamo", "Holguin", "Isla de la Juventud", "La Habana", "Las Tunas", "Matanzas", "Pinar del Rio", "Sancti Spiritus", "Santiago de Cuba", "Villa Clara"]
},
{
    countryName: "Cyprus",
    countryShortcode: "CY",
    alpha3Code: "CYP",
    numberCode: "196",
    regions: ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"]
},
{
    countryName: "Czech Republic",
    countryShortcode: "CZ",
    alpha3Code: "CZE",
    numberCode: "203",
    regions: ["Jihocesky Kraj", "Jihomoravsky Kraj", "Karlovarsky Kraj", "Kralovehradecky Kraj", "Liberecky Kraj", "Moravskoslezsky Kraj", "Olomoucky Kraj", "Pardubicky Kraj", "Plzensky Kraj", "Praha", "Stredocesky Kraj", "Ustecky Kraj", "Vysocina", "Zlinsky Kraj"]
},
{
    countryName: "Denmark",
    countryShortcode: "DK",
    alpha3Code: "DNK",
    numberCode: "208",
    regions: ["Arhus", "Bornholm", "Frederiksberg", "Frederiksborg", "Fyn", "Kobenhavn", "Kobenhavns", "Nordjylland", "Ribe", "Ringkobing", "Roskilde", "Sonderjylland", "Storstrom", "Vejle", "Vestsjalland", "Viborg"]
},
{
    countryName: "Djibouti",
    countryShortcode: "DJ",
    alpha3Code: "DJI",
    numberCode: "262",
    regions: ["Ali Sabih", "Dikhil", "Djibouti", "Obock", "Tadjoura"]
},
{
    countryName: "Dominica",
    countryShortcode: "DM",
    alpha3Code: "DMA",
    numberCode: "212",
    regions: ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Joseph", "Saint Luke", "Saint Mark", "Saint Patrick", "Saint Paul", "Saint Peter"]
},
{
    countryName: "Dominican Republic",
    countryShortcode: "DO",
    alpha3Code: "DOM",
    numberCode: "214",
    regions: ["Azua", "Baoruco", "Barahona", "Dajabon", "Distrito Nacional", "Duarte", "Elias Pina", "El Seibo", "Espaillat", "Hato Mayor", "Independencia", "La Altagracia", "La Romana", "La Vega", "Maria Trinidad Sanchez", "Monsenor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Salcedo", "Samana", "Sanchez Ramirez", "San Cristobal", "San Jose de Ocoa", "San Juan", "San Pedro de Macoris", "Santiago", "Santiago Rodriguez", "Santo Domingo", "Valverde"]
},
{
    countryName: "East Timor",
    countryShortcode: "TL",
    alpha3Code: "TLS",
    numberCode: "626",
    regions: ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova-Lima", "Dili", "Ermera", "Lautem", "Liquica", "Manatuto", "Manufahi", "Oecussi", "Viqueque"]
},
{
    countryName: "Ecuador",
    countryShortcode: "EC",
    alpha3Code: "ECU",
    numberCode: "218",
    regions: ["Azuay", "Bolivar", "Canar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona-Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Sucumbios", "Tungurahua", "Zamora-Chinchipe"]
},
{
    countryName: "Egypt",
    countryShortcode: "EG",
    alpha3Code: "EGY",
    numberCode: "818",
    regions: ["Ad Daqahliyah", "Al Bahr al Ahmar", "Al Buhayrah", "Al Fayyum", "Al Gharbiyah", "Al Iskandariyah", "Al Isma'iliyah", "Al Jizah", "Al Minufiyah", "Al Minya", "Al Qahirah", "Al Qalyubiyah", "Al Wadi al Jadid", "Ash Sharqiyah", "As Suways", "Aswan", "Asyut", "Bani Suwayf", "Bur Sa'id", "Dumyat", "Janub Sina'", "Kafr ash Shaykh", "Matruh", "Qina", "Shamal Sina'", "Suhaj"]
},
{
    countryName: "El Salvador",
    countryShortcode: "SV",
    alpha3Code: "SLV",
    numberCode: "222",
    regions: ["Ahuachapan", "Cabanas", "Chalatenango", "Cuscatlan", "La Libertad", "La Paz", "La Union", "Morazan", "San Miguel", "San Salvador", "Santa Ana", "San Vicente", "Sonsonate", "Usulutan"]
},
{
    countryName: "Equatorial Guinea",
    countryShortcode: "GQ",
    alpha3Code: "GNQ",
    numberCode: "226",
    regions: ["Annobon", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kie-Ntem", "Litoral", "Wele-Nzas"]
},
{
    countryName: "Eritrea",
    countryShortcode: "ER",
    alpha3Code: "ERI",
    numberCode: "232",
    regions: ["Anseba", "Debub", "Debubawi K'eyih Bahri", "Gash Barka", "Ma'akel", "Semenawi Keyih Bahri"]
},
{
    countryName: "Estonia",
    countryShortcode: "EE",
    alpha3Code: "EST",
    numberCode: "233",
    regions: ["Harjumaa (Tallinn)", "Hiiumaa (Kardla)", "Ida-Virumaa (Johvi)", "Jarvamaa (Paide)", "Jogevamaa (Jogeva)", "Laanemaa (Haapsalu)", "Laane-Virumaa (Rakvere)", "Parnumaa (Parnu)", "Polvamaa (Polva)", "Raplamaa (Rapla)", "Saaremaa (Kuressaare)", "Tartumaa (Tartu)", "Valgamaa (Valga)", "Viljandimaa (Viljandi)", "Vorumaa (Voru)"]
},
{
    countryName: "Ethiopia",
    countryShortcode: "ET",
    alpha3Code: "ETH",
    numberCode: "231",
    regions: ["Addis Ababa", "Afar", "Amhara", "Binshangul Gumuz", "Dire Dawa", "Gambela Hizboch", "Harari", "Oromia", "Somali", "Tigray", "Southern Nations, Nationalities, and Peoples Region"]
},
{
    countryName: "Fiji",
    countryShortcode: "FJ",
    alpha3Code: "FJI",
    numberCode: "242",
    regions: ["Central (Suva)", "Eastern (Levuka)", "Northern (Labasa)", "Rotuma", "Western (Lautoka)"]
},
{
    countryName: "Finland",
    countryShortcode: "FI",
    alpha3Code: "FIN",
    numberCode: "246",
    regions: ["Aland", "Etela-Suomen Laani", "Ita-Suomen Laani", "Lansi-Suomen Laani", "Lappi", "Oulun Laani"]
},
{
    countryName: "France",
    countryShortcode: "FR",
    alpha3Code: "FRA",
    numberCode: "250",
    regions: ["Alsace", "Aquitaine", "Auvergne", "Basse-Normandie", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne", "Corse", "Franche-Comte", "Haute-Normandie", "Ile-de-France", "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-Pyrenees", "Nord-Pas-de-Calais", "Pays de la Loire", "Picardie", "Poitou-Charentes", "Provence-Alpes-Cote d'Azur", "Rhone-Alpes"]
},
{
    countryName: "French Guiana",
    countryShortcode: "GF",
    alpha3Code: "GUF",
    numberCode: "254",
    regions: ["Awala-Yalimapo", "Mana", "Saint-Laurent-du-Maroni", "Apatou", "Grand-Santi", "Papaïchton", "Saül", "Maripasoula", "Camopi", "Saint-Georges", "Ouanary", "Régina", "Roura", "Saint-Élie", "Iracoubo", "Sinnamary", "Kourou", "Macouria", "Montsinéry-Tonnegrande", "Matoury", "Cayenne", "Remire-Montjoly"]
},
{
    countryName: "French Polynesia",
    countryShortcode: "PF",
    alpha3Code: "PYF",
    numberCode: "258",
    regions: ["Marquesas Islands", "Leeward Islands", "Windward Islands", "Tuāmotu-Gambier ", "Austral Islands"]
},
{
    countryName: "Gabon",
    countryShortcode: "GA",
    alpha3Code: "GAB",
    numberCode: "266",
    regions: ["Estuaire", "Haut-Ogooue", "Moyen-Ogooue", "Ngounie", "Nyanga", "Ogooue-Ivindo", "Ogooue-Lolo", "Ogooue-Maritime", "Woleu-Ntem"]
},
{
    countryName: "Gambia",
    countryShortcode: "GM",
    alpha3Code: "GMB",
    numberCode: "270",
    regions: ["Banjul", "Central River", "Lower River", "North Bank", "Upper River", "Western"]
},
{
    countryName: "Georgia",
    countryShortcode: "GM",
    alpha3Code: "GMB",
    numberCode: "271",
    regions: ["Abkhazia", "Adjara", "Guria", "Imereti", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svaneti", "Samtskhe-Javakheti", "Shida Kartli", "Tbilisi"]
},
{
    countryName: "Germany",
    countryShortcode: "DE",
    alpha3Code: "DEU",
    numberCode: "276",
    regions: ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"]
},
{
    countryName: "Ghana",
    countryShortcode: "GH",
    alpha3Code: "GHA",
    numberCode: "288",
    regions: ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"]
},
{
    countryName: "Greece",
    countryShortcode: "GR",
    alpha3Code: "GRC",
    numberCode: "300",
    regions: ["Agion Oros", "Achaia", "Aitolia kai Akarmania", "Argolis", "Arkadia", "Arta", "Attiki", "Chalkidiki", "Chanion", "Chios", "Dodekanisos", "Drama", "Evros", "Evrytania", "Evvoia", "Florina", "Fokidos", "Fthiotis", "Grevena", "Ileia", "Imathia", "Ioannina", "Irakleion", "Karditsa", "Kastoria", "Kavala", "Kefallinia", "Kerkyra", "Kilkis", "Korinthia", "Kozani", "Kyklades", "Lakonia", "Larisa", "Lasithi", "Lefkas", "Lesvos", "Magnisia", "Messinia", "Pella", "Pieria", "Preveza", "Rethynnis", "Rodopi", "Samos", "Serrai", "Thesprotia", "Thessaloniki", "Trikala", "Voiotia", "Xanthi", "Zakynthos"]
},
{
    countryName: "Greenland",
    countryShortcode: "GL",
    alpha3Code: "GRL",
    numberCode: "304",
    regions: ["Avannaa (Nordgronland)", "Tunu (Ostgronland)", "Kitaa (Vestgronland)"]
},
{
    countryName: "Grenada",
    countryShortcode: "GD",
    alpha3Code: "GRD",
    numberCode: "308",
    regions: ["Carriacou and Petit Martinique", "Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"]
},
{
    countryName: "Guatemala",
    countryShortcode: "GT",
    alpha3Code: "GTM",
    numberCode: "320",
    regions: ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Peten", "Quetzaltenango", "Quiche", "Retalhuleu", "Sacatepequez", "San Marcos", "Santa Rosa", "Solola", "Suchitepequez", "Totonicapan", "Zacapa"]
},
{
    countryName: "Guinea",
    countryShortcode: "GN",
    alpha3Code: "GIN",
    numberCode: "324",
    regions: ["Beyla", "Boffa", "Boke", "Conakry", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubreka", "Faranah", "Forecariah", "Fria", "Gaoual", "Gueckedou", "Kankan", "Kerouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labe", "Lelouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzerekore", "Pita", "Siguiri", "Telimele", "Tougue", "Yomou"]
},
{
    countryName: "Guinea-Bissau",
    countryShortcode: "GW",
    alpha3Code: "GNB",
    numberCode: "624",
    regions: ["Bafata", "Biombo", "Bissau", "Bolama", "Cacheu", "Gabu", "Oio", "Quinara", "Tombali"]
},
{
    countryName: "Guyana",
    countryShortcode: "GY",
    alpha3Code: "GUY",
    numberCode: "328",
    regions: ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"]
},
{
    countryName: "Haiti",
    countryShortcode: "HT",
    alpha3Code: "HTI",
    numberCode: "332",
    regions: ["Artibonite", "Centre", "Grand 'Anse", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"]
},
{
    countryName: "Honduras",
    countryShortcode: "HN",
    alpha3Code: "HND",
    numberCode: "340",
    regions: ["Atlantida", "Choluteca", "Colon", "Comayagua", "Copan", "Cortes", "El Paraiso", "Francisco Morazan", "Gracias a Dios", "Intibuca", "Islas de la Bahia", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Barbara", "Valle", "Yoro"]
},
{
    countryName: "Hong Kong",
    countryShortcode: "HK",
    alpha3Code: "HKG",
    numberCode: "344",
    regions: ["Islands", "Kwai Tsing", "North", "Sai Kung", "Sha Tin", "Tai Po", "Tsuen Wan", "Tuen Mun", "Yuen Long", "Kowloon City", "Kwun Tong", "Sham Shui Po", "Wong Tai Sin", "Yau Tsim Mong", "Central and Western", "Eastern", "Southern", "Wan Chai"]
},
{
    countryName: "Hungary",
    countryShortcode: "HU",
    alpha3Code: "HUN",
    numberCode: "348",
    regions: ["Bacs-Kiskun", "Baranya", "Bekes", "Borsod-Abauj-Zemplen", "Csongrad", "Fejer", "Gyor-Moson-Sopron", "Hajdu-Bihar", "Heves", "Jasz-Nagykun-Szolnok", "Komarom-Esztergom", "Nograd", "Pest", "Somogy", "Szabolcs-Szatmar-Bereg", "Tolna", "Vas", "Veszprem", "Zala"]
},
{
    countryName: "Iceland",
    countryShortcode: "IS",
    alpha3Code: "ISL",
    numberCode: "352",
    regions: ["Austurland", "Hofudhborgarsvaedhi", "Nordhurland Eystra", "Nordhurland Vestra", "Sudhurland", "Sudhurnes", "Vestfirdhir", "Vesturland"]
},
{
    countryName: "India",
    countryShortcode: "IN",
    alpha3Code: "IND",
    numberCode: "356",
    regions: ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"]
},
{
    countryName: "Indonesia",
    countryShortcode: "ID",
    alpha3Code: "IDN",
    numberCode: "360",
    regions: ["Aceh", "Bali", "Banten", "Bengkulu", "Gorontalo", "Irian Jaya Barat", "Jakarta Raya", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kepulauan Bangka Belitung", "Kepulauan Riau", "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Papua", "Riau", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat", "Sumatera Selatan", "Sumatera Utara", "Yogyakarta"]
},
{
    countryName: "Iran",
    countryShortcode: "IR",
    alpha3Code: "IRN",
    numberCode: "364",
    regions: ["Ardabil", "Azarbayjan-e Gharbi", "Azarbayjan-e Sharqi", "Bushehr", "Chahar Mahall va Bakhtiari", "Esfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khorasan-e Janubi", "Khorasan-e Razavi", "Khorasan-e Shemali", "Khuzestan", "Kohgiluyeh va Buyer Ahmad", "Kordestan", "Lorestan", "Markazi", "Mazandaran", "Qazvin", "Qom", "Semnan", "Sistan va Baluchestan", "Tehran", "Yazd", "Zanjan"]
},
{
    countryName: "Iraq",
    countryShortcode: "IQ",
    alpha3Code: "IRQ",
    numberCode: "368",
    regions: ["Al Anbar", "Al Basrah", "Al Muthanna", "Al Qadisiyah", "An Najaf", "Arbil", "As Sulaymaniyah", "At Ta'mim", "Babil", "Baghdad", "Dahuk", "Dhi Qar", "Diyala", "Karbala'", "Maysan", "Ninawa", "Salah ad Din", "Wasit"]
},
{
    countryName: "Ireland",
    countryShortcode: "IE",
    alpha3Code: "IRL",
    numberCode: "372",
    regions: ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"]
},
{
    countryName: "Israel",
    countryShortcode: "IL",
    alpha3Code: "ISR",
    numberCode: "376",
    regions: ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"]
},
{
    countryName: "Italy",
    countryShortcode: "IT",
    alpha3Code: "ITA",
    numberCode: "380",
    regions: ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto", "Roma"]
},
{
    countryName: "Jamaica",
    countryShortcode: "JM",
    alpha3Code: "JAM",
    numberCode: "388",
    regions: ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"]
},
{
    countryName: "Japan",
    countryShortcode: "JP",
    alpha3Code: "JPN",
    numberCode: "392",
    regions: ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"]
},
{
    countryName: "Jordan",
    countryShortcode: "JO",
    alpha3Code: "JOR",
    numberCode: "400",
    regions: ["Ajlun", "Al 'Aqabah", "Al Balqa'", "Al Karak", "Al Mafraq", "'Amman", "At Tafilah", "Az Zarqa'", "Irbid", "Jarash", "Ma'an", "Madaba"]
},
{
    countryName: "Kazakhstan",
    countryShortcode: "KZ",
    alpha3Code: "KAZ",
    numberCode: "398",
    regions: ["Almaty Oblysy", "Almaty Qalasy", "Aqmola Oblysy", "Aqtobe Oblysy", "Astana Qalasy", "Atyrau Oblysy", "Batys Qazaqstan Oblysy", "Bayqongyr Qalasy", "Mangghystau Oblysy", "Ongtustik Qazaqstan Oblysy", "Pavlodar Oblysy", "Qaraghandy Oblysy", "Qostanay Oblysy", "Qyzylorda Oblysy", "Shyghys Qazaqstan Oblysy", "Soltustik Qazaqstan Oblysy", "Zhambyl Oblysy"]
},
{
    countryName: "Kenya",
    countryShortcode: "KE",
    alpha3Code: "KEN",
    numberCode: "404",
    regions: ["Central", "Coast", "Eastern", "Nairobi Area", "North Eastern", "Nyanza", "Rift Valley", "Western"]
},
{
    countryName: "Kiribati",
    countryShortcode: "KI",
    alpha3Code: "KIR",
    numberCode: "296",
    regions: ["Banaba", "Tarawa", "Northern Gilbert Islands", "Central Gilbert Island", "Southern Gilbert Islands", "Line Islands"]
},
{
    countryName: "Korea North",
    countryShortcode: "KP",
    alpha3Code: "PRK",
    numberCode: "408",
    regions: ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North P'yongan", "South P'yongan", "Yanggang", "Kaesong", "Najin", "Namp'o", "Pyongyang"]
},
{
    countryName: "Korea South",
    countryShortcode: "KR",
    alpha3Code: "KOR",
    numberCode: "410",
    regions: ["Seoul", "Busan City", "Daegu City", "Incheon City", "Gwangju City", "Daejeon City", "Ulsan", "Gyeonggi Province", "Gangwon Province", "North Chungcheong Province", "South Chungcheong Province", "North Jeolla Province", "South Jeolla Province", "North Gyeongsang Province", "South Gyeongsang Province", "Jeju"]
},
{
    countryName: "Kuwait",
    countryShortcode: "KW",
    alpha3Code: "KWT",
    numberCode: "414",
    regions: ["Al Ahmadi", "Al Farwaniyah", "Al Asimah", "Al Jahra", "Hawalli", "Mubarak Al-Kabeer"]
},
{
    countryName: "Kyrgyzstan",
    countryShortcode: "KG",
    alpha3Code: "KGZ",
    numberCode: "417",
    regions: ["Batken Oblasty", "Bishkek Shaary", "Chuy Oblasty", "Jalal-Abad Oblasty", "Naryn Oblasty", "Osh Oblasty", "Talas Oblasty", "Ysyk-Kol Oblasty"]
},
{
    countryName: "Laos",
    countryShortcode: "LA",
    alpha3Code: "LAO",
    numberCode: "418",
    regions: ["Attapu", "Bokeo", "Bolikhamxai", "Champasak", "Houaphan", "Khammouan", "Louangnamtha", "Louangphrabang", "Oudomxai", "Phongsali", "Salavan", "Savannakhet", "Viangchan", "Viangchan", "Xaignabouli", "Xaisomboun", "Xekong", "Xiangkhoang"]
},
{
    countryName: "Latvia",
    countryShortcode: "LV",
    alpha3Code: "LVA",
    numberCode: "428",
    regions: ["Aizkraukles Rajons", "Aluksnes Rajons", "Balvu Rajons", "Bauskas Rajons", "Cesu Rajons", "Daugavpils", "Daugavpils Rajons", "Dobeles Rajons", "Gulbenes Rajons", "Jekabpils Rajons", "Jelgava", "Jelgavas Rajons", "Jurmala", "Kraslavas Rajons", "Kuldigas Rajons", "Liepaja", "Liepajas Rajons", "Limbazu Rajons", "Ludzas Rajons", "Madonas Rajons", "Ogres Rajons", "Preilu Rajons", "Rezekne", "Rezeknes Rajons", "Riga", "Rigas Rajons", "Saldus Rajons", "Talsu Rajons", "Tukuma Rajons", "Valkas Rajons", "Valmieras Rajons", "Ventspils", "Ventspils Rajons"]
},
{
    countryName: "Lebanon",
    countryShortcode: "LB",
    alpha3Code: "LBN",
    numberCode: "422",
    regions: ["Beyrouth", "Beqaa", "Liban-Nord", "Liban-Sud", "Mont-Liban", "Nabatiye"]
},
{
    countryName: "Lesotho",
    countryShortcode: "LS",
    alpha3Code: "LSO",
    numberCode: "426",
    regions: ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"]
},
{
    countryName: "Liberia",
    countryShortcode: "LR",
    alpha3Code: "LBR",
    numberCode: "430",
    regions: ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"]
},
{
    countryName: "Libya",
    countryShortcode: "LY",
    alpha3Code: "LBY",
    numberCode: "434",
    regions: ["Ajdabiya", "Al 'Aziziyah", "Al Fatih", "Al Jabal al Akhdar", "Al Jufrah", "Al Khums", "Al Kufrah", "An Nuqat al Khams", "Ash Shati'", "Awbari", "Az Zawiyah", "Banghazi", "Darnah", "Ghadamis", "Gharyan", "Misratah", "Murzuq", "Sabha", "Sawfajjin", "Surt", "Tarabulus", "Tarhunah", "Tubruq", "Yafran", "Zlitan"]
},
{
    countryName: "Liechtenstein",
    countryShortcode: "LI",
    alpha3Code: "LIE",
    numberCode: "438",
    regions: ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"]
},
{
    countryName: "Lithuania",
    countryShortcode: "LT",
    alpha3Code: "LTU",
    numberCode: "440",
    regions: ["Alytaus", "Kauno", "Klaipedos", "Marijampoles", "Panevezio", "Siauliu", "Taurages", "Telsiu", "Utenos", "Vilniaus"]
},
{
    countryName: "Luxembourg",
    countryShortcode: "LU",
    alpha3Code: "LUX",
    numberCode: "442",
    regions: ["Diekirch", "Grevenmacher", "Luxembourg"]
},
{
    countryName: "Macedonia",
    countryShortcode: "MK",
    alpha3Code: "MKD",
    numberCode: "807",
    regions: ["Aerodrom", "Aracinovo", "Berovo", "Bitola", "Bogdanci", "Bogovinje", "Bosilovo", "Brvenica", "Butel", "Cair", "Caska", "Centar", "Centar Zupa", "Cesinovo", "Cucer-Sandevo", "Debar", "Debartsa", "Delcevo", "Demir Hisar", "Demir Kapija", "Dojran", "Dolneni", "Drugovo", "Gazi Baba", "Gevgelija", "Gjorce Petrov", "Gostivar", "Gradsko", "Ilinden", "Jegunovce", "Karbinci", "Karpos", "Kavadarci", "Kicevo", "Kisela Voda", "Kocani", "Konce", "Kratovo", "Kriva Palanka", "Krivogastani", "Krusevo", "Kumanovo", "Lipkovo", "Lozovo", "Makedonska Kamenica", "Makedonski Brod", "Mavrovo i Rastusa", "Mogila", "Negotino", "Novaci", "Novo Selo", "Ohrid", "Oslomej", "Pehcevo", "Petrovec", "Plasnica", "Prilep", "Probistip", "Radovis", "Rankovce", "Resen", "Rosoman", "Saraj", "Skopje", "Sopiste", "Staro Nagoricane", "Stip", "Struga", "Strumica", "Studenicani", "Suto Orizari", "Sveti Nikole", "Tearce", "Tetovo", "Valandovo", "Vasilevo", "Veles", "Vevcani", "Vinica", "Vranestica", "Vrapciste", "Zajas", "Zelenikovo", "Zelino", "Zrnovci"]
},
{
    countryName: "Madagascar",
    countryShortcode: "MG",
    alpha3Code: "MDG",
    numberCode: "450",
    regions: ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"]
},
{
    countryName: "Malawi",
    countryShortcode: "MW",
    alpha3Code: "MWI",
    numberCode: "454",
    regions: ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Ntcheu", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"]
},
{
    countryName: "Malaysia",
    countryShortcode: "MY",
    alpha3Code: "MYS",
    numberCode: "458",
    regions: ["Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Malacca", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Penang", "Sabah", "Sarawak", "Selangor", "Terengganu"]
},
{
    countryName: "Maldives",
    countryShortcode: "MV",
    alpha3Code: "MDV",
    numberCode: "462",
    regions: ["Alifu", "Baa", "Dhaalu", "Faafu", "Gaafu Alifu", "Gaafu Dhaalu", "Gnaviyani", "Haa Alifu", "Haa Dhaalu", "Kaafu", "Laamu", "Lhaviyani", "Maale", "Meemu", "Noonu", "Raa", "Seenu", "Shaviyani", "Thaa", "Vaavu"]
},
{
    countryName: "Mali",
    countryShortcode: "ML",
    alpha3Code: "MLI",
    numberCode: "466",
    regions: ["Bamako (Capital)", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"]
},
{
    countryName: "Malta",
    countryShortcode: "MT",
    alpha3Code: "MLT",
    numberCode: "470",
    regions: ["Southern Harbour", "Northern Harbour", "Western District", "Northern District", "Gozo and Comino"]
},
{
    countryName: "Marshall Islands",
    countryShortcode: "MH",
    alpha3Code: "MHL",
    numberCode: "584",
    regions: ["Ailuk", "Ailinglaplap", "Arno", "Aur", "Ebon", "Enewetak", "Jabat", "Jaluit", "Kili", "Kwajalein", "Lae", "Lib", "Likiep", "Majuro", "Maloelap", "Mejit", "Mili", "Namorik", "Namu", "Rongelap", "Ujae", "Utirik", "Wotho", "Wotje", "Ailinginae", "Bikar", "Bikini", "Bokak", "Erikub", "Jemo", "Rongrik", "Toke", "Ujelang"]
},
{
    countryName: "Mauritania",
    countryShortcode: "MR",
    alpha3Code: "MRT",
    numberCode: "478",
    regions: ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott", "Tagant", "Tiris Zemmour", "Trarza"]
},
{
    countryName: "Mauritius",
    countryShortcode: "MU",
    alpha3Code: "MUS",
    numberCode: "480",
    regions: ["Agalega Islands", "Black River", "Cargados Carajos Shoals", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Riviere du Rempart", "Rodrigues", "Savanne"]
},
{
    countryName: "Mexico",
    countryShortcode: "mx",
    alpha3Code: "MEX",
    numberCode: "484",
    regions: ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila de Zaragoza", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico", "Michoacan de Ocampo", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro de Arteaga", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz-Llave", "Yucatan", "Zacatecas"]
},
{
    countryName: "Micronesia",
    countryShortcode: "FM",
    alpha3Code: "FSM",
    numberCode: "583",
    regions: ["Chuuk", "Kosrae", "Pohnpei", "Yap"]
},
{
    countryName: "Moldova",
    countryShortcode: "MD",
    alpha3Code: "MDA",
    numberCode: "498",
    regions: ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Cantemir", "Calarasi", "Causeni", "Cimislia", "Criuleni", "Donduseni", "Drochia", "Dubasari", "Edinet", "Falesti", "Floresti", "Glodeni", "Hincesti", "Ialoveni", "Leova", "Nisporeni", "Ocnita", "Orhei", "Rezina", "Riscani", "Singerei", "Soldanesti", "Soroca", "Stefan-Voda", "Straseni", "Taraclia", "Telenesti", "Ungheni", "Balti", "Bender", "Chisinau", "Gagauzia", "Stinga Nistrului"]
},
{
    countryName: "Monaco",
    countryShortcode: "MC",
    alpha3Code: "MCO",
    numberCode: "492",
    regions: ["Monaco-Ville", "La Condamine", "Monte Carlo", "Fontvieille"]
},
{
    countryName: "Mongolia",
    countryShortcode: "MN",
    alpha3Code: "MNG",
    numberCode: "496",
    regions: ["Arhangay", "Bayanhongor", "Bayan-Olgiy", "Bulgan", "Darhan Uul", "Dornod", "Dornogovi", "Dundgovi", "Dzavhan", "Govi-Altay", "Govi-Sumber", "Hentiy", "Hovd", "Hovsgol", "Omnogovi", "Orhon", "Ovorhangay", "Selenge", "Suhbaatar", "Tov", "Ulaanbaatar", "Uvs"]
},
{
    countryName: "Morocco",
    countryShortcode: "MA",
    alpha3Code: "MAR",
    numberCode: "504",
    regions: ["Agadir", "Al Hoceima", "Azilal", "Beni Mellal", "Ben Slimane", "Boulemane", "Casablanca", "Chaouen", "El Jadida", "El Kelaa des Sraghna", "Er Rachidia", "Essaouira", "Fes", "Figuig", "Guelmim", "Ifrane", "Kenitra", "Khemisset", "Khenifra", "Khouribga", "Laayoune", "Larache", "Marrakech", "Meknes", "Nador", "Ouarzazate", "Oujda", "Rabat-Sale", "Safi", "Settat", "Sidi Kacem", "Tangier", "Tan-Tan", "Taounate", "Taroudannt", "Tata", "Taza", "Tetouan", "Tiznit"]
},
{
    countryName: "Mozambique",
    countryShortcode: "MZ",
    alpha3Code: "MZ",
    numberCode: "508",
    regions: ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Cidade de Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"]
},
{
    countryName: "Namibia",
    countryShortcode: "NA",
    alpha3Code: "NAM",
    numberCode: "516",
    regions: ["Caprivi", "Erongo", "Hardap", "Karas", "Khomas", "Kunene", "Ohangwena", "Okavango", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa"]
},
{
    countryName: "Nauru",
    countryShortcode: "NR",
    alpha3Code: "NRU",
    numberCode: "520",
    regions: ["Aiwo", "Anabar", "Anetan", "Anibare"]
},
{
    countryName: "Nepal",
    countryShortcode: "NP",
    alpha3Code: "NPL",
    numberCode: "524",
    regions: ["Bagmati", "Bheri", "Dhawalagiri", "Gandaki", "Janakpur", "Karnali", "Kosi", "Lumbini", "Mahakali", "Mechi", "Narayani", "Rapti", "Sagarmatha", "Seti"]
},
{
    countryName: "Netherlands",
    countryShortcode: "NL",
    alpha3Code: "NLD",
    numberCode: "528",
    regions: ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"]
},
{
    countryName: "New Zealand",
    countryShortcode: "NZ",
    alpha3Code: "NZL",
    numberCode: "554",
    regions: ["Auckland", "Bay of Plenty", "Canterbury", "Chatham Islands", "Gisborne", "Hawke's Bay", "Manawatu-Wanganui", "Marlborough", "Nelson", "Northland", "Otago", "Southland", "Taranaki", "Tasman", "Waikato", "Wellington", "West Coast"]
},
{
    countryName: "Nicaragua",
    countryShortcode: "NI",
    alpha3Code: "NIC",
    numberCode: "558",
    regions: ["Atlantico Norte", "Atlantico Sur", "Boaco", "Carazo", "Chinandega", "Chontales", "Esteli", "Granada", "Jinotega", "Leon", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Rio San Juan", "Rivas"]
},
{
    countryName: "Niger",
    countryShortcode: "NE",
    alpha3Code: "NER",
    numberCode: "562",
    regions: ["Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua", "Tillaberi", "Zinder"]
},
{
    countryName: "Nigeria",
    countryShortcode: "NG",
    alpha3Code: "NGA",
    numberCode: "566",
    regions: ["Abia", "Abuja Federal Capital", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"]
},
{
    countryName: "Norway",
    countryShortcode: "NO",
    alpha3Code: "NOR",
    numberCode: "578",
    regions: ["Akershus", "Aust-Agder", "Buskerud", "Finnmark", "Hedmark", "Hordaland", "More og Romsdal", "Nordland", "Nord-Trondelag", "Oppland", "Oslo", "Ostfold", "Rogaland", "Sogn og Fjordane", "Sor-Trondelag", "Telemark", "Troms", "Vest-Agder", "Vestfold"]
},
{
    countryName: "Oman",
    countryShortcode: "OM",
    alpha3Code: "OMN",
    numberCode: "512",
    regions: ["Ad Dakhiliyah", "Al Batinah", "Al Wusta", "Ash Sharqiyah", "Az Zahirah", "Masqat", "Musandam", "Dhofar"]
},
{
    countryName: "Pakistan",
    countryShortcode: "PK",
    alpha3Code: "PAK",
    numberCode: "586",
    regions: ["Balochistan", "North-West Frontier Province", "Punjab", "Sindh", "Islamabad Capital Territory", "Federally Administered Tribal Areas"]
},
{
    countryName: "Panama",
    countryShortcode: "PA",
    alpha3Code: "PAN",
    numberCode: "591",
    regions: ["Bocas del Toro", "Chiriqui", "Cocle", "Colon", "Darien", "Herrera", "Los Santos", "Panama", "San Blas", "Veraguas"]
},
{
    countryName: "Papua New Guinea",
    countryShortcode: "PG",
    alpha3Code: "PNG",
    numberCode: "598",
    regions: ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Madang", "Manus", "Milne Bay", "Morobe", "National Capital", "New Ireland", "Northern", "Sandaun", "Southern Highlands", "Western", "Western Highlands", "West New Britain"]
},
{
    countryName: "Paraguay",
    countryShortcode: "PY",
    alpha3Code: "PRY",
    numberCode: "600",
    regions: ["Alto Paraguay", "Alto Parana", "Amambay", "Asuncion", "Boqueron", "Caaguazu", "Caazapa", "Canindeyu", "Central", "Concepcion", "Cordillera", "Guaira", "Itapua", "Misiones", "Neembucu", "Paraguari", "Presidente Hayes", "San Pedro"]
},
{
    countryName: "Peru",
    countryShortcode: "PE",
    alpha3Code: "PER",
    numberCode: "604",
    regions: ["Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huanuco", "Ica", "Junin", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martin", "Tacna", "Tumbes", "Ucayali"]
},
{
    countryName: "Philippines",
    countryShortcode: "PH",
    alpha3Code: "PHL",
    numberCode: "608",
    regions: ["Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", "Antique", "Apayao", "Aurora", "Basilan", "Bataan", "Batanes", "Batangas", "Biliran", "Benguet", "Bohol", "Bukidnon", "Bulacan", "Cagayan", "Camarines Norte", "Camarines Sur", "Camiguin", "Capiz", "Catanduanes", "Cavite", "Cebu", "Compostela", "Davao del Norte", "Davao del Sur", "Davao Oriental", "Eastern Samar", "Guimaras", "Ifugao", "Ilocos Norte", "Ilocos Sur", "Iloilo", "Isabela", "Kalinga", "Laguna", "Lanao del Norte", "Lanao del Sur", "La Union", "Leyte", "Maguindanao", "Marinduque", "Masbate", "Mindoro Occidental", "Mindoro Oriental", "Misamis Occidental", "Misamis Oriental", "Mountain Province", "Negros Occidental", "Negros Oriental", "North Cotabato", "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", "Palawan", "Pampanga", "Pangasinan", "Quezon", "Quirino", "Rizal", "Romblon", "Samar", "Sarangani", "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte", "Sultan Kudarat", "Sulu", "Surigao del Norte", "Surigao del Sur", "Tarlac", "Tawi-Tawi", "Zambales", "Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay"]
},
{
    countryName: "Poland",
    countryShortcode: "PL",
    alpha3Code: "POL",
    numberCode: "616",
    regions: ["Greater Poland (Wielkopolskie)", "Kuyavian-Pomeranian (Kujawsko-Pomorskie)", "Lesser Poland (Malopolskie)", "Lodz (Lodzkie)", "Lower Silesian (Dolnoslaskie)", "Lublin (Lubelskie)", "Lubusz (Lubuskie)", "Masovian (Mazowieckie)", "Opole (Opolskie)", "Podlasie (Podlaskie)", "Pomeranian (Pomorskie)", "Silesian (Slaskie)", "Subcarpathian (Podkarpackie)", "Swietokrzyskie (Swietokrzyskie)", "Warmian-Masurian (Warminsko-Mazurskie)", "West Pomeranian (Zachodniopomorskie)"]
},
{
    countryName: "Portugal",
    countryShortcode: "PT",
    alpha3Code: "PRT",
    numberCode: "620",
    regions: ["Aveiro", "Acores", "Beja", "Braga", "Braganca", "Castelo Branco", "Coimbra", "Evora", "Faro", "Guarda", "Leiria", "Lisboa", "Madeira", "Portalegre", "Porto", "Santarem", "Setubal", "Viana do Castelo", "Vila Real", "Viseu"]
},
{
    countryName: "Qatar",
    countryShortcode: "QA",
    alpha3Code: "QAT",
    numberCode: "634",
    regions: ["Ad Dawhah", "Al Ghuwayriyah", "Al Jumayliyah", "Al Khawr", "Al Wakrah", "Ar Rayyan", "Jarayan al Batinah", "Madinat ash Shamal", "Umm Sa'id", "Umm Salal"]
},
{
    countryName: "Romania",
    countryShortcode: "RO",
    alpha3Code: "ROU",
    numberCode: "642",
    regions: ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dimbovita", "Dolj", "Galati", "Gorj", "Giurgiu", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Vaslui", "Vilcea", "Vrancea"]
},
{
    countryName: "Russia",
    countryShortcode: "RU",
    alpha3Code: "RUS",
    numberCode: "643",
    regions: ["Amur", "Arkhangel'sk", "Astrakhan'", "Belgorod", "Bryansk", "Chelyabinsk", "Chita", "Irkutsk", "Ivanovo", "Kaliningrad", "Kaluga", "Kamchatka", "Kemerovo", "Kirov", "Kostroma", "Kurgan", "Kursk", "Leningrad", "Lipetsk", "Magadan", "Moscow", "Murmansk", "Nizhniy Novgorod", "Novgorod", "Novosibirsk", "Omsk", "Orenburg", "Orel", "Penza", "Perm'", "Pskov", "Rostov", "Ryazan'", "Sakhalin", "Samara", "Saratov", "Smolensk", "Sverdlovsk", "Tambov", "Tomsk", "Tula", "Tver'", "Tyumen'", "Ul'yanovsk", "Vladimir", "Volgograd", "Vologda", "Voronezh", "Yaroslavl'", "Adygeya", "Altay", "Bashkortostan", "Buryatiya", "Chechnya", "Chuvashiya", "Dagestan", "Ingushetiya", "Kabardino-Balkariya", "Kalmykiya", "Karachayevo-Cherkesiya", "Kareliya", "Khakasiya", "Komi", "Mariy-El", "Mordoviya", "Sakha", "North Ossetia", "Tatarstan", "Tyva", "Udmurtiya", "Aga Buryat", "Chukotka", "Evenk", "Khanty-Mansi", "Komi-Permyak", "Koryak", "Nenets", "Taymyr", "Ust'-Orda Buryat", "Yamalo-Nenets", "Altay", "Khabarovsk", "Krasnodar", "Krasnoyarsk", "Primorskiy", "Stavropol'", "Moscow", "St. Petersburg", "Yevrey"]
},
{
    countryName: "Rwanda",
    countryShortcode: "RW",
    alpha3Code: "RWA",
    numberCode: "646",
    regions: ["Butare", "Byumba", "Cyangugu", "Gikongoro", "Gisenyi", "Gitarama", "Kibungo", "Kibuye", "Kigali Rurale", "Kigali-ville", "Umutara", "Ruhengeri"]
},
{
    countryName: "Samoa",
    countryShortcode: "WS",
    alpha3Code: "WSM",
    numberCode: "882",
    regions: ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gagaifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"]
},
{
    countryName: "San Marino",
    countryShortcode: "SM",
    alpha3Code: "SMR",
    numberCode: "674",
    regions: ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino Citta", "Serravalle"]
},
{
    countryName: "Sao Tome",
    countryShortcode: "ST",
    alpha3Code: "STP",
    numberCode: "678",
    regions: ["Água Grande", "Cantagalo", "Caué", "Lembá", "Lobata", "Mé-Zóchi", "Autonomous Region of Príncipe"]
},
{
    countryName: "Saudi Arabia",
    countryShortcode: "SA",
    alpha3Code: "SAU",
    numberCode: "682",
    regions: ["Al Bahah", "Al Hudud ash Shamaliyah", "Al Jawf", "Al Madinah", "Al Qasim", "Ar Riyad", "Ash Sharqiyah", "'Asir", "Ha'il", "Jizan", "Makkah", "Najran", "Tabuk"]
},
{
    countryName: "Senegal",
    countryShortcode: "SN",
    alpha3Code: "SEN",
    numberCode: "686",
    regions: ["Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Tambacounda", "Thies", "Ziguinchor"]
},
{
    countryName: "Serbia",
    countryShortcode: "RS",
    alpha3Code: "SRB",
    numberCode: "688",
    regions: ["Valjevo", "Šabac", "Čačak", "Jagodina", "Kruševac", "Kraljevo", "Kragujevac", "Užice", "Bor", "Požarevac", "Leskovac", "Niš", "Vranje", "Pirot", "Smederevo", "Prokuplje", "Zaječar", "Zrenjanin", "Subotica", "Kikinda", "Novi Sad", "Pančevo", "Sremska Mitrovica", "Sombor"]
},
{
    countryName: "Montenegro",
    countryShortcode: "ME",
    alpha3Code: "MNE",
    numberCode: "499",
    regions: ["Andrijevica", "Bar", "Berane", "Berane", "Bijelo Polje", "Budva", "Cetinje", "Danilovgrad", "Gusinje", "Herceg Novi", "Kolašin", "Kotor", "Mojkovac", "Nikšić", "Petnjica", "Plav", "Pljevlja", "Plužine", "Podgorica", "Rožaje", "Šavnik", "Tivat", "Tuzi", "Ulcinj", "Žabljak"]
},
{
    countryName: "Kosovo",
    countryShortcode: "XK",
    alpha3Code: "XXK",
    numberCode: "",
    regions: ["Ferizaj", "Gjakova", "Gjilan", "Mitrovica", "Peja", "Pristina", "Prizren"]
},
{
    countryName: "Seychelles",
    countryShortcode: "SC",
    alpha3Code: "SYC",
    numberCode: "690",
    regions: ["Anse aux Pins", "Anse Boileau", "Anse Etoile", "Anse Louis", "Anse Royale", "Baie Lazare", "Baie Sainte Anne", "Beau Vallon", "Bel Air", "Bel Ombre", "Cascade", "Glacis", "Grand' Anse", "Grand' Anse", "La Digue", "La Riviere Anglaise", "Mont Buxton", "Mont Fleuri", "Plaisance", "Pointe La Rue", "Port Glaud", "Saint Louis", "Takamaka"]
},
{
    countryName: "Sierra Leone",
    countryShortcode: "SL",
    alpha3Code: "SLE",
    numberCode: "694",
    regions: ["Eastern Province", "Northern Province", "Southern Province", "North West Province", "Western Area"]
},
{
    countryName: "Singapore",
    countryShortcode: "SG",
    alpha3Code: "SGP",
    numberCode: "702",
    regions: ["Aljunied Group Representation Constituency", "Ang Mo Kio Group Representation Constituency", "Bishan–Toa Payoh Group Representation Constituency", "Chua Chu Kang Group Representation Constituency", "East Coast Group Representation Constituency", "Holland–Bukit Timah Group Representation Constituency", "Jalan Besar Group Representation Constituency", "Jurong Group Representation Constituency", "Marine Parade Group Representation Constituency", "Marsiling–Yew Tee Group Representation Constituency", "Nee Soon Group Representation Constituency", "Pasir Ris–Punggol Group Representation Constituency", "Sengkang Group Representation Constituency", "Tampines Group Representation Constituency", "Tanjong Pagar Group Representation Constituency", "West Coast Group Representation Constituency"]
},
{
    countryName: "Slovakia",
    countryShortcode: "SK",
    alpha3Code: "SVK",
    numberCode: "703",
    regions: ["Banskobystricky", "Bratislavsky", "Kosicky", "Nitriansky", "Presovsky", "Trenciansky", "Trnavsky", "Zilinsky"]
},
{
    countryName: "Slovenia",
    countryShortcode: "SI",
    alpha3Code: "SVN",
    numberCode: "705",
    regions: ["Ajdovscina", "Beltinci", "Benedikt", "Bistrica ob Sotli", "Bled", "Bloke", "Bohinj", "Borovnica", "Bovec", "Braslovce", "Brda", "Brezice", "Brezovica", "Cankova", "Celje", "Cerklje na Gorenjskem", "Cerknica", "Cerkno", "Cerkvenjak", "Crensovci", "Crna na Koroskem", "Crnomelj", "Destrnik", "Divaca", "Dobje", "Dobrepolje", "Dobrna", "Dobrova-Horjul-Polhov Gradec", "Dobrovnik-Dobronak", "Dolenjske Toplice", "Dol pri Ljubljani", "Domzale", "Dornava", "Dravograd", "Duplek", "Gorenja Vas-Poljane", "Gorisnica", "Gornja Radgona", "Gornji Grad", "Gornji Petrovci", "Grad", "Grosuplje", "Hajdina", "Hoce-Slivnica", "Hodos-Hodos", "Horjul", "Hrastnik", "Hrpelje-Kozina", "Idrija", "Ig", "Ilirska Bistrica", "Ivancna Gorica", "Izola-Isola", "Jesenice", "Jezersko", "Jursinci", "Kamnik", "Kanal", "Kidricevo", "Kobarid", "Kobilje", "Kocevje", "Komen", "Komenda", "Koper-Capodistria", "Kostel", "Kozje", "Kranj", "Kranjska Gora", "Krizevci", "Krsko", "Kungota", "Kuzma", "Lasko", "Lenart", "Lendava-Lendva", "Litija", "Ljubljana", "Ljubno", "Ljutomer", "Logatec", "Loska Dolina", "Loski Potok", "Lovrenc na Pohorju", "Luce", "Lukovica", "Majsperk", "Maribor", "Markovci", "Medvode", "Menges", "Metlika", "Mezica", "Miklavz na Dravskem Polju", "Miren-Kostanjevica", "Mirna Pec", "Mislinja", "Moravce", "Moravske Toplice", "Mozirje", "Murska Sobota", "Muta", "Naklo", "Nazarje", "Nova Gorica", "Novo Mesto", "Odranci", "Oplotnica", "Ormoz", "Osilnica", "Pesnica", "Piran-Pirano", "Pivka", "Podcetrtek", "Podlehnik", "Podvelka", "Polzela", "Postojna", "Prebold", "Preddvor", "Prevalje", "Ptuj", "Puconci", "Race-Fram", "Radece", "Radenci", "Radlje ob Dravi", "Radovljica", "Ravne na Koroskem", "Razkrizje", "Ribnica", "Ribnica na Pohorju", "Rogasovci", "Rogaska Slatina", "Rogatec", "Ruse", "Salovci", "Selnica ob Dravi", "Semic", "Sempeter-Vrtojba", "Sencur", "Sentilj", "Sentjernej", "Sentjur pri Celju", "Sevnica", "Sezana", "Skocjan", "Skofja Loka", "Skofljica", "Slovenj Gradec", "Slovenska Bistrica", "Slovenske Konjice", "Smarje pri Jelsah", "Smartno ob Paki", "Smartno pri Litiji", "Sodrazica", "Solcava", "Sostanj", "Starse", "Store", "Sveta Ana", "Sveti Andraz v Slovenskih Goricah", "Sveti Jurij", "Tabor", "Tisina", "Tolmin", "Trbovlje", "Trebnje", "Trnovska Vas", "Trzic", "Trzin", "Turnisce", "Velenje", "Velika Polana", "Velike Lasce", "Verzej", "Videm", "Vipava", "Vitanje", "Vodice", "Vojnik", "Vransko", "Vrhnika", "Vuzenica", "Zagorje ob Savi", "Zalec", "Zavrc", "Zelezniki", "Zetale", "Ziri", "Zirovnica", "Zuzemberk", "Zrece"]
},
{
    countryName: "Solomon Islands",
    countryShortcode: "SB",
    alpha3Code: "SLB",
    numberCode: "090",
    regions: ["Central", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira", "Malaita", "Rennell and Bellona", "Temotu", "Western"]
},
{
    countryName: "Somalia",
    countryShortcode: "SO",
    alpha3Code: "SOM",
    numberCode: "706",
    regions: ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"]
},
{
    countryName: "South Africa",
    countryShortcode: "ZA",
    alpha3Code: "ZAF",
    numberCode: "710",
    regions: ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North-West", "Northern Cape", "Western Cape"]
},
{
    countryName: "Spain",
    countryShortcode: "ES",
    alpha3Code: "ESP",
    numberCode: "724",
    regions: ["Andalucia", "Aragon", "Asturias", "Baleares", "Ceuta", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y Leon", "Cataluna", "Comunidad Valenciana", "Extremadura", "Galicia", "La Rioja", "Madrid", "Melilla", "Murcia", "Navarra", "Pais Vasco"]
},
{
    countryName: "Sri Lanka",
    countryShortcode: "LK",
    alpha3Code: "LKA",
    numberCode: "144",
    regions: ["Central", "North Central", "Northern", "Eastern", "North Western", "Sabaragamuwa", "Southern", "Uva", "Western"]
},
{
    countryName: "Sudan",
    countryShortcode: "SD",
    alpha3Code: "SDN",
    numberCode: "729",
    regions: ["A'ali an Nil", "Al Bahr al Ahmar", "Al Buhayrat", "Al Jazirah", "Al Khartum", "Al Qadarif", "Al Wahdah", "An Nil al Abyad", "An Nil al Azraq", "Ash Shamaliyah", "Bahr al Jabal", "Gharb al Istiwa'iyah", "Gharb Bahr al Ghazal", "Gharb Darfur", "Gharb Kurdufan", "Janub Darfur", "Janub Kurdufan", "Junqali", "Kassala", "Nahr an Nil", "Shamal Bahr al Ghazal", "Shamal Darfur", "Shamal Kurdufan", "Sharq al Istiwa'iyah", "Sinnar", "Warab"]
},
{
    countryName: "Suriname",
    countryShortcode: "SR",
    alpha3Code: "SUR",
    numberCode: "740",
    regions: ["Brokopondo", "Commewijne", "Coronie", "Marowijne", "Nickerie", "Para", "Paramaribo", "Saramacca", "Sipaliwini", "Wanica"]
},
{
    countryName: "Swaziland",
    countryShortcode: "SZ",
    alpha3Code: "SWZ",
    numberCode: "748",
    regions: ["Hhohho", "Lubombo", "Manzini", "Shiselweni"]
},
{
    countryName: "Sweden",
    countryShortcode: "SE",
    alpha3Code: "SWE",
    numberCode: "752",
    regions: ["Blekinge", "Dalarna", "Gävleborg", "Gotland", "Halland", "Jämtland", "Jönköping", "Kalmar", "Kronoberg", "Norrbotten", "Örebro", "Östergötland", "Skåne", "Södermanland", "Stockholm", "Uppsala", "Värmland", "Västerbotten", "Västernorrland", "Västmanland", "Västra Götaland"]
},
{
    countryName: "Switzerland",
    countryShortcode: "CH",
    alpha3Code: "CHE",
    numberCode: "756",
    regions: ["Aargau", "Appenzell Ausser-Rhoden", "Appenzell Inner-Rhoden", "Basel-Landschaft", "Basel-Stadt", "Bern", "Fribourg", "Geneve", "Glarus", "Graubunden", "Jura", "Luzern", "Neuchatel", "Nidwalden", "Obwalden", "Sankt Gallen", "Schaffhausen", "Schwyz", "Solothurn", "Thurgau", "Ticino", "Uri", "Valais", "Vaud", "Zug", "Zurich"]
},
{
    countryName: "Syria",
    countryShortcode: "SY",
    alpha3Code: "SY",
    numberCode: "760",
    regions: ["Al Hasakah", "Al Ladhiqiyah", "Al Qunaytirah", "Ar Raqqah", "As Suwayda'", "Dar'a", "Dayr az Zawr", "Dimashq", "Halab", "Hamah", "Hims", "Idlib", "Rif Dimashq", "Tartus"]
},
{
    countryName: "Taiwan",
    countryShortcode: "TW",
    alpha3Code: "TWN",
    numberCode: "158",
    regions: ["Chang-hua", "Chia-i", "Hsin-chu", "Hua-lien", "I-lan", "Kao-hsiung", "Kin-men", "Lien-chiang", "Miao-li", "Nan-t'ou", "P'eng-hu", "P'ing-tung", "T'ai-chung", "T'ai-nan", "T'ai-pei", "T'ai-tung", "T'ao-yuan", "Yun-lin", "Chia-i", "Chi-lung", "Hsin-chu", "T'ai-chung", "T'ai-nan", "Kao-hsiung city", "T'ai-pei city"]
},
{
    countryName: "Tajikistan",
    countryShortcode: "TJ",
    alpha3Code: "TJK",
    numberCode: "762",
    regions: ["Sughd Region", "Districts of Republican Subordination", "Khatlon Region", "Gorno-Badakhshan Autonomous Region", "Dushanbe"]
},
{
    countryName: "Tanzania",
    countryShortcode: "TZ",
    alpha3Code: "TZA",
    numberCode: "834",
    regions: ["Arusha", "Dar es Salaam", "Dodoma", "Iringa", "Kagera", "Kigoma", "Kilimanjaro", "Lindi", "Manyara", "Mara", "Mbeya", "Morogoro", "Mtwara", "Mwanza", "Pemba North", "Pemba South", "Pwani", "Rukwa", "Ruvuma", "Shinyanga", "Singida", "Tabora", "Tanga", "Zanzibar Central/South", "Zanzibar North", "Zanzibar Urban/West"]
},
{
    countryName: "Thailand",
    countryShortcode: "TH",
    alpha3Code: "THA",
    numberCode: "764",
    regions: ["Amnat Charoen", "Ang Thong", "Buriram", "Chachoengsao", "Chai Nat", "Chaiyaphum", "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chon Buri", "Chumphon", "Kalasin", "Kamphaeng Phet", "Kanchanaburi", "Khon Kaen", "Krabi", "Krung Thep Mahanakhon", "Lampang", "Lamphun", "Loei", "Lop Buri", "Mae Hong Son", "Maha Sarakham", "Mukdahan", "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan", "Narathiwat", "Nong Bua Lamphu", "Nong Khai", "Nonthaburi", "Pathum Thani", "Pattani", "Phangnga", "Phatthalung", "Phayao", "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya", "Phrae", "Phuket", "Prachin Buri", "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et", "Sa Kaeo", "Sakon Nakhon", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Sara Buri", "Satun", "Sing Buri", "Sisaket", "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", "Tak", "Trang", "Trat", "Ubon Ratchathani", "Udon Thani", "Uthai Thani", "Uttaradit", "Yala", "Yasothon"]
},
{
    countryName: "Togo",
    countryShortcode: "TG",
    alpha3Code: "TGO",
    numberCode: "768",
    regions: ["Kara", "Plateaux", "Savanes", "Centrale", "Maritime"]
},
{
    countryName: "Tonga",
    countryShortcode: "TO",
    alpha3Code: "TON",
    numberCode: "776",
    regions: ["Tongatapu", "Vavaʻu", "Haʻapai", "ʻEua", "Ongo Niua", "Tonga"]
},
{
    countryName: "Trinidad and Tobago",
    countryShortcode: "TT",
    alpha3Code: "TTO",
    numberCode: "780",
    regions: ["Couva", "Diego Martin", "Mayaro", "Penal", "Princes Town", "Sangre Grande", "San Juan", "Siparia", "Tunapuna", "Port-of-Spain", "San Fernando", "Arima", "Point Fortin", "Chaguanas", "Tobago"]
},
{
    countryName: "Tunisia",
    countryShortcode: "TN",
    alpha3Code: "TUN",
    numberCode: "788",
    regions: ["Ariana (Aryanah)", "Beja (Bajah)", "Ben Arous (Bin 'Arus)", "Bizerte (Banzart)", "Gabes (Qabis)", "Gafsa (Qafsah)", "Jendouba (Jundubah)", "Kairouan (Al Qayrawan)", "Kasserine (Al Qasrayn)", "Kebili (Qibili)", "Kef (Al Kaf)", "Mahdia (Al Mahdiyah)", "Manouba (Manubah)", "Medenine (Madanin)", "Monastir (Al Munastir)", "Nabeul (Nabul)", "Sfax (Safaqis)", "Sidi Bou Zid (Sidi Bu Zayd)", "Siliana (Silyanah)", "Sousse (Susah)", "Tataouine (Tatawin)", "Tozeur (Tawzar)", "Tunis", "Zaghouan (Zaghwan)"]
},
{
    countryName: "Turkey",
    countryShortcode: "TR",
    alpha3Code: "TUR",
    numberCode: "792",
    regions: ["Adana", "Adiyaman", "Afyonkarahisar", "Agri", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydin", "Balikesir", "Bartin", "Batman", "Bayburt", "Bilecik", "Bingol", "Bitlis", "Bolu", "Burdur", "Bursa", "Canakkale", "Cankiri", "Corum", "Denizli", "Diyarbakir", "Duzce", "Edirne", "Elazig", "Erzincan", "Erzurum", "Eskisehir", "Gaziantep", "Giresun", "Gumushane", "Hakkari", "Hatay", "Igdir", "Isparta", "Istanbul", "Izmir", "Kahramanmaras", "Karabuk", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kirikkale", "Kirklareli", "Kirsehir", "Kocaeli", "Konya", "Kutahya", "Malatya", "Manisa", "Mardin", "Mersin", "Mugla", "Mus", "Nevsehir", "Nigde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Sanliurfa", "Siirt", "Sinop", "Sirnak", "Sivas", "Tekirdag", "Tokat", "Trabzon", "Tunceli", "Usak", "Van", "Yalova", "Yozgat", "Zonguldak"]
},
{
    countryName: "Turkmenistan",
    countryShortcode: "TM",
    alpha3Code: "TKM",
    numberCode: "795",
    regions: ["Ahal Welayaty (Ashgabat)", "Balkan Welayaty (Balkanabat)", "Dashoguz Welayaty", "Lebap Welayaty (Turkmenabat)", "Mary Welayaty"]
},
{
    countryName: "Uganda",
    countryShortcode: "UG",
    alpha3Code: "UGA",
    numberCode: "800",
    regions: ["Adjumani", "Apac", "Arua", "Bugiri", "Bundibugyo", "Bushenyi", "Busia", "Gulu", "Hoima", "Iganga", "Jinja", "Kabale", "Kabarole", "Kaberamaido", "Kalangala", "Kampala", "Kamuli", "Kamwenge", "Kanungu", "Kapchorwa", "Kasese", "Katakwi", "Kayunga", "Kibale", "Kiboga", "Kisoro", "Kitgum", "Kotido", "Kumi", "Kyenjojo", "Lira", "Luwero", "Masaka", "Masindi", "Mayuge", "Mbale", "Mbarara", "Moroto", "Moyo", "Mpigi", "Mubende", "Mukono", "Nakapiripirit", "Nakasongola", "Nebbi", "Ntungamo", "Pader", "Pallisa", "Rakai", "Rukungiri", "Sembabule", "Sironko", "Soroti", "Tororo", "Wakiso", "Yumbe"]
},
{
    countryName: "Ukraine",
    countryShortcode: "UA",
    alpha3Code: "UKR",
    numberCode: "804",
    regions: ["Cherkasy", "Chernihiv", "Chernivtsi", "Crimea", "Dnipropetrovs'k", "Donets'k", "Ivano-Frankivs'k", "Kharkiv", "Kherson", "Khmel'nyts'kyy", "Kirovohrad", "Kiev", "Kyyiv", "Luhans'k", "L'viv", "Mykolayiv", "Odesa", "Poltava", "Rivne", "Sevastopol'", "Sumy", "Ternopil'", "Vinnytsya", "Volyn'", "Zakarpattya", "Zaporizhzhya", "Zhytomyr"]
},
{
    countryName: "United Arab Emirates",
    countryShortcode: "AE",
    alpha3Code: "ARE",
    numberCode: "784",
    regions: ["Abu Dhabi", "'Ajman", "Al Fujayrah", "Sharjah", "Dubai", "Ra's al Khaymah", "Umm al Qaywayn"]
},
{
    countryName: "United Kingdom",
    countryShortcode: "GB",
    alpha3Code: "GBR",
    numberCode: "826",
    regions: ["Aberconwy and Colwyn", "Aberdeen City", "Aberdeenshire", "Anglesey", "Angus", "Antrim", "Argyll and Bute", "Armagh", "Avon", "Ayrshire", "Bath and NE Somerset", "Bedfordshire", "Belfast", "Berkshire", "Berwickshire", "BFPO", "Blaenau Gwent", "Buckinghamshire", "Caernarfonshire", "Caerphilly", "Caithness", "Cambridgeshire", "Cardiff", "Cardiganshire", "Carmarthenshire", "Ceredigion", "Channel Islands", "Cheshire", "City of Bristol", "Clackmannanshire", "Clwyd", "Conwy", "Cornwall/Scilly", "Cumbria", "Denbighshire", "Derbyshire", "Derry/Londonderry", "Devon", "Dorset", "Down", "Dumfries and Galloway", "Dunbartonshire", "Dundee", "Durham", "Dyfed", "East Ayrshire", "East Dunbartonshire", "East Lothian", "East Renfrewshire", "East Riding Yorkshire", "East Sussex", "Edinburgh", "England", "Essex", "Falkirk", "Fermanagh", "Fife", "Flintshire", "Glasgow", "Gloucestershire", "Greater London", "Greater Manchester", "Gwent", "Gwynedd", "Hampshire", "Hartlepool", "Hereford and Worcester", "Hertfordshire", "Highlands", "Inverclyde", "Inverness-Shire", "Isle of Man", "Isle of Wight", "Kent", "Kincardinshire", "Kingston Upon Hull", "Kinross-Shire", "Kirklees", "Lanarkshire", "Lancashire", "Leicestershire", "Lincolnshire", "Londonderry", "Merseyside", "Merthyr Tydfil", "Mid Glamorgan", "Mid Lothian", "Middlesex", "Monmouthshire", "Moray", "Neath & Port Talbot", "Newport", "Norfolk", "North Ayrshire", "North East Lincolnshire", "North Lanarkshire", "North Lincolnshire", "North Somerset", "North Yorkshire", "Northamptonshire", "Northern Ireland", "Northumberland", "Nottinghamshire", "Orkney and Shetland Isles", "Oxfordshire", "Pembrokeshire", "Perth and Kinross", "Powys", "Redcar and Cleveland", "Renfrewshire", "Rhonda Cynon Taff", "Rutland", "Scottish Borders", "Shetland", "Shropshire", "Somerset", "South Ayrshire", "South Glamorgan", "South Gloucesteshire", "South Lanarkshire", "South Yorkshire", "Staffordshire", "Stirling", "Stockton On Tees", "Suffolk", "Surrey", "Swansea", "Torfaen", "Tyne and Wear", "Tyrone", "Vale Of Glamorgan", "Wales", "Warwickshire", "West Berkshire", "West Dunbartonshire", "West Glamorgan", "West Lothian", "West Midlands", "West Sussex", "West Yorkshire", "Western Isles", "Wiltshire", "Wirral", "Worcestershire", "Wrexham", "York"]
},
{
    countryName: "United States",
    countryShortcode: "US",
    alpha3Code: "USA",
    numberCode: "840",
    regions: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
},
{
    countryName: "Uruguay",
    countryShortcode: "UY",
    alpha3Code: "URY",
    numberCode: "858",
    regions: ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandu", "Rio Negro", "Rivera", "Rocha", "Salto", "San Jose", "Soriano", "Tacuarembo", "Treinta y Tres"]
},
{
    countryName: "Uzbekistan",
    countryShortcode: "UZ",
    alpha3Code: "UZB",
    numberCode: "860",
    regions: ["Andijon Viloyati", "Buxoro Viloyati", "Farg'ona Viloyati", "Jizzax Viloyati", "Namangan Viloyati", "Navoiy Viloyati", "Qashqadaryo Viloyati", "Qaraqalpog'iston Respublikasi", "Samarqand Viloyati", "Sirdaryo Viloyati", "Surxondaryo Viloyati", "Toshkent Shahri", "Toshkent Viloyati", "Xorazm Viloyati"]
},
{
    countryName: "Vanuatu",
    countryShortcode: "VU",
    alpha3Code: "VUT",
    numberCode: "548",
    regions: ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"]
},
{
    countryName: "Venezuela",
    countryShortcode: "VE",
    alpha3Code: "VEN",
    numberCode: "862",
    regions: ["Amazonas", "Anzoategui", "Apure", "Aragua", "Barinas", "Bolivar", "Carabobo", "Cojedes", "Delta Amacuro", "Dependencias Federales", "Distrito Federal", "Falcon", "Guarico", "Lara", "Merida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Tachira", "Trujillo", "Vargas", "Yaracuy", "Zulia"]
},
{
    countryName: "Vietnam",
    countryShortcode: "VN",
    alpha3Code: "VNM",
    numberCode: "704",
    regions: ["An Giang", "Bac Giang", "Bac Kan", "Bac Lieu", "Bac Ninh", "Ba Ria-Vung Tau", "Ben Tre", "Binh Dinh", "Binh Duong", "Binh Phuoc", "Binh Thuan", "Ca Mau", "Cao Bang", "Dac Lak", "Dac Nong", "Dien Bien", "Dong Nai", "Dong Thap", "Gia Lai", "Ha Giang", "Hai Duong", "Ha Nam", "Ha Tay", "Ha Tinh", "Hau Giang", "Hoa Binh", "Hung Yen", "Khanh Hoa", "Kien Giang", "Kon Tum", "Lai Chau", "Lam Dong", "Lang Son", "Lao Cai", "Long An", "Nam Dinh", "Nghe An", "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen", "Quang Binh", "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri", "Soc Trang", "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen", "Thanh Hoa", "Thua Thien-Hue", "Tien Giang", "Tra Vinh", "Tuyen Quang", "Vinh Long", "Vinh Phuc", "Yen Bai", "Can Tho", "Da Nang", "Hai Phong", "Hanoi", "Ho Chi Minh"]
},
{
    countryName: "Yemen",
    countryShortcode: "YE",
    alpha3Code: "YEM",
    numberCode: "887",
    regions: ["Abyan", "'Adan", "Ad Dali'", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "'Amran", "Dhamar", "Hadramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Shabwah", "Ta'izz"]
},
{
    countryName: "Zambia",
    countryShortcode: "ZM",
    alpha3Code: "ZMB",
    numberCode: "894",
    regions: ["Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", "Northern", "North-Western", "Southern", "Western"]
},
{
    countryName: "Zimbabwe",
    countryShortcode: "ZW",
    alpha3Code: "ZWE",
    numberCode: "716",
    regions: ["Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"]
}
]

export default countries;