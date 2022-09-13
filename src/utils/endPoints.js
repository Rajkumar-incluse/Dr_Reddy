export const root = {
  baseUrl: 'http://13.232.221.107:8080/api/v1',
  imgUrl: "http://13.232.221.107:8080",
  api2: "http://13.232.221.107:5000"
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
  vehicleTracking: "/dashboard/track",

  // manager dashboard
  getMissions: "",
  getLoggers: "",
  getAlerts: "",
  getDashboardData: "/dashboard",

  // transporter
  createMsg: "/alert",

  // alert from kesavan
  postAlert: '/alert_post',
  getAlert: '/alert_get',
}

export default endPoints