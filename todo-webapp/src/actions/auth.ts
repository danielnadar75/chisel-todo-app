import { AUTH } from "../constants";

export const requestLogin = (user: User) => ({
  type: AUTH.REQUEST_LOGIN,
  user
})

export const login = (auth: Authentication) => ({
  type: AUTH.LOGIN,
  auth
})

export const logout = () => ({
  type: AUTH.LOGOUT
})