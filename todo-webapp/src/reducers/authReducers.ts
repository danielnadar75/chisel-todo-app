import { history } from "../App";
import { AUTH } from "../constants";

const initialData: Authentication = {
  isAuthenticated: false,
  authToken: "",
};

const authReducer = (state = initialData, action: any) => {
  switch (action.type) {
    case AUTH.LOGIN:
      localStorage.setItem("authToken", action.auth.access_token);
      history.push("/");
      return {
        isAuthenticated: true,
        authToken: action.auth.access_token,
      };

    case AUTH.LOGOUT:
      localStorage.setItem("authToken", "");
      history.push("/login");
      return initialData;

    default:
      return state;
  }
};

export default authReducer;
