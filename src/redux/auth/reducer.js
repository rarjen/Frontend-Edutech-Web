import { USER_LOGIN, USER_LOGOUT } from "./constants";

let initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { token: null, id: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
        id: action.id,
      };
    case USER_LOGOUT:
      return { token: null, id: null };
    default:
      return state;
  }
}
