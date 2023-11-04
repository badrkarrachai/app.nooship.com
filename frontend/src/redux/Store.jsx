import { configureStore } from "@reduxjs/toolkit";
import {
  ExpectedParcelEditeReducer,
  RightBarStatusReducer,
} from "./RightBarStatus";
import { NotificationBarStatusReducer } from "./NotificationbarStatus";
import { VerCodeReducer } from "./VerficationCode";
import { PageReducer } from "./AuthData";
import {
  AdressStatusReducer,
  AreYouSureReducer,
  LoadingReducer,
} from "./LoadingStataus";
import { SideBarStatusReducer } from "./SideBarStatus";
import { IdReshipperReducer } from "./ReshipperId";
import {
  AreYouSureDataReducer,
  ButtonMessageReducer,
  ButtonTypeReducer,
  ImageAreYouReducer,
  TitleAreYouReducer,
  UpdateExpParcelReducer,
  UpdateInvParcelReducer,
} from "./AreYouSure";
import { ProfileUpdateIndecatorSliceReducer } from "./ProfileUpdateIndicator";
import { CominFromRightBarReducer, UserRoleReducer } from "./UserBasicData";
import { BalanceReducer, UpdateBalanceReducer } from "./Balance";

export const store = configureStore({
  reducer: {
    NotificationBarStatus: NotificationBarStatusReducer,
    RightBarStatus: RightBarStatusReducer,
    VerCode: VerCodeReducer,
    Page: PageReducer,
    Loading: LoadingReducer,
    SideBarStatus: SideBarStatusReducer,
    ReshipperId: IdReshipperReducer,
    AdressStatus: AdressStatusReducer,
    AreYouSure: AreYouSureReducer,
    DataBaseAreouSure: AreYouSureDataReducer,
    TitleAreYou: TitleAreYouReducer,
    ButtonMessage: ButtonMessageReducer,
    ImageAreYou: ImageAreYouReducer,
    UpdateExpParce: UpdateExpParcelReducer,
    ExpectedParcelEdite: ExpectedParcelEditeReducer,
    ProfileUpdateIndecator: ProfileUpdateIndecatorSliceReducer,
    UserRole: UserRoleReducer,
    ButtonType: ButtonTypeReducer,
    UpdateInvParcel: UpdateInvParcelReducer,
    CominFromRightBar: CominFromRightBarReducer,
    Balance: BalanceReducer,
    UpdateBalance: UpdateBalanceReducer,
  },
});
