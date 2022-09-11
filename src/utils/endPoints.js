export const root = {
  baseUrl: 'http://13.127.0.50:8080/api/v1',
  imgUrl: "http://13.127.0.50:8080"
}

const endPoints = {
  createOrg: '/participantapi/Organization/create',
  registerUser: '/participantapi/Users/create',
  login: '/login',

  getUserList: '/participantapi/Users',
  checkDpr: '/dpr/search?dprno=',
  createDpr: '/dpr',
  getDprInfo: '/dpr', // ?dprNo= &id=
  createCCDR: '/ccdr',
  getCCDRInfo: '/ccdr', // ?dprNo=&dprId=
  updateCCDRStatus: "/ccdr/status",
  documentUpload: '/document',
  getDoc: "/document",
  updateDocStatus: '/document/status',
}

export default endPoints