import {validateResponse} from "../utils/validateResponse";

const URL: string = "/api";

// Отправка заметки
export const apiCreateNote = (title: string, text: string) => {
  return fetch(`${URL}/notes`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      title,
      text
    })
  }).then(validateResponse).then(response => {console.log(response)})
}
// Получение Data List
export const apiGetDataList = (): Promise<void> => {
  return fetch(`${URL}/notes`, {
    method: "GET"
  })
      .then(res => res.json())
      .then(res => res.list)
}
// Регистрация юзера
export const apiRegisterUser = (username: string, password: string, email: string): Promise<void> => {
  return fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      username, password, email
    })
  }).then(() => undefined)
}
// Выход
export const apiLogout = (): Promise<undefined> => {
  return fetch(`${URL}/logout`, {method: "POST"})
      .then(() => undefined)
}
// Вход
export const apiLogin = (email: string, password: string) => {
  return fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(validateResponse)
      .then(() => undefined)
}
// Me
export const apiMe = () => {
  return fetch(`${URL}/users/me`, {method: "GET"})
      .then(validateResponse)
      .then(res => res.json())
      .then(res => res)
}
