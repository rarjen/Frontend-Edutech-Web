import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(token, id) {
  return {
    type: USER_LOGIN,
    token,
    id,
  };
}

export function userLogout() {
  localStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}
