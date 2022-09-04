import sendApiReq, { cookies } from './sendApiReq';
import endPoints from './endPoints';

const setTokenToApp = token => {
  cookies.set("DrReddyAccessToken", token, {
    path: '/',
    domain: window.location.hostname,
    expires: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
  })
}

export function parseJwt(token) {
  const base64Url = token.split(".")[1]
  const base64 = base64Url.replace("-", "+").replace("_", "/")
  return JSON.parse(window.atob(base64))
}

export async function login(data) {
  try {
    const { token } = await sendApiReq({
      isAuthendicated: false,
      method: 'post',
      url: endPoints.login,
      data,
    })
    setTokenToApp(token)

    return parseJwt(token)
  } catch (error) {
    return false
  }
}

export function createOrg(data) {
  return sendApiReq({
    isAuthendicated: false,
    method: 'post',
    url: endPoints.createOrg,
    data,
  })
}

export function registerUser(data) {
  return sendApiReq({
    method: 'post',
    url: endPoints.registerUser,
    data,
  })
}

export function getUsersList() {
  return sendApiReq({
    url: endPoints.getUserList
  })
}

export function checkDpr(dprno) {
  return sendApiReq({
    url: endPoints.checkDpr + dprno,
  })
}

export function createDpr(data) {
  return sendApiReq({
    method: 'post',
    url: endPoints.createDpr,
    data,
  })
}

export function getDprInfo({ dprNo, id }) {
  return sendApiReq({
    url: `${endPoints.getDprInfo}${dprNo}&id=${id}`,
  })
}