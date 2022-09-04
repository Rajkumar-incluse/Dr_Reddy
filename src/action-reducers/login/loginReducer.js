import loginConstants from "./loginConstants";
import { cookies } from "../../utils/sendApiReq";

const initialState = {
  isLoggedIn: !!cookies.get("DrReddyAccessToken"),
  userDetails: {}
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loginConstants.LOGIN_SUCCESSFUL:
      return {
        isLoggedIn: true,
        userDetails: {
          ...state.userDetails,
          ...payload
        }
      }

    case loginConstants.LOGOUT_SUCCESSFUL:
      return {
        userDetails: {},
        isLoggedIn: false
      }

    default: return state
  }
}

export default loginReducer