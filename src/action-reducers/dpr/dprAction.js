import sendApiReq from '../../utils/sendApiReq';
import endPoints, { root } from '../../utils/endPoints';
import dprConstants from './dprConstants';

export const documentTypes = {
  lrCopy: "lrCopy",
  sealCode: "sealCode",
  taxInvoice: "taxInvoice",
  signedLrCopy: "signedLrCopy",
  signedSealCode: "signedSealCode",
}

export async function checkDpr(dprno = "") {
  try {
    const res = await sendApiReq({
      url: endPoints.checkDpr + dprno,
    })

    return res

  } catch (error) {
    console.log(error)
    throw error
  }
}

export function createDpr(data, onSuccess) {
  return async dispatch => {
    try {
      const res = await sendApiReq({
        method: 'post',
        url: endPoints.createDpr,
        data,
      })

      let payload = {
        ...res,
        packingList: JSON.parse(res.packingList),
        ccdrStatus: JSON.parse(res.ccdrStatus),
        products: JSON.parse(res.products),
      }
      // console.log(payload)

      dispatch({
        type: dprConstants.ADD_DPR,
        payload
      })
      onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}

export function getDprInfo({ dprNo, id }, onSuccess) {
  return async dispatch => {
    try {
      let url = endPoints.getDprInfo
      if (dprNo) {
        url = url + `?dprNo=${dprNo}`
      }

      if (id) {
        let prefix = dprNo ? "&" : "?"
        url = url + `${prefix}id=${id}`
      }

      const res = await sendApiReq({ url })

      if (endPoints.getDprInfo === url) {
        dispatch({
          type: dprConstants.GET_DPR_LIST,
          payload: res.map(r => ({
            ...r,
            ccdrStatus: JSON.parse(r.ccdrStatus)
          }))
        })
      }

      if (id) {
        let data1 = res[0]
        let payload = {
          ...data1,
          packingList: JSON.parse(data1.packingList),
          products: JSON.parse(data1.products),
          ccdrStatus: JSON.parse(data1.ccdrStatus)
        }

        dispatch({
          type: dprConstants.UPDATE_DPR,
          payload
        })
      }

      onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}

export function getCCDRInfo({ dprNo, dprId }, onSuccess) {
  return async dispatch => {
    try {
      let url = endPoints.getCCDRInfo
      if (dprNo) {
        url = url + `?dprNo=${dprNo}`
      }

      if (dprId) {
        let prefix = dprNo ? "&" : "?"
        url = url + `${prefix}dprId=${dprId}`
      }

      const res = await sendApiReq({ url })
      onSuccess(res[0])

    } catch (error) {
      console.log(error)
    }
  }
}

export function createCCDR(data, onSuccess) {
  return async dispatch => {
    try {
      await sendApiReq({
        method: 'post',
        url: endPoints.createCCDR,
        data,
      })

      dispatch({
        type: dprConstants.UPDATE_CCDR_STATUS,
        payload: {
          id: data.dprId,
          ccdrStatus: "in-progress"
        }
      })
      onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}

export function updateCCDRStatus(data, onSuccess) {
  return async dispatch => {
    try {
      await sendApiReq({
        method: 'put',
        url: endPoints.updateCCDRStatus,
        data
      })

      // console.log(res)

      dispatch({
        type: dprConstants.UPDATE_CCDR_STATUS,
        payload: {
          id: data.dprId,
          ccdrStatus: data.ccdrStatus
        }
      })
      onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}

export function documentUpload(data, onSuccess) {
  return async dispatch => {
    try {
      const res = await sendApiReq({
        method: 'post',
        url: endPoints.documentUpload,
        headers: { 'content-type': 'multipart/form-data' },
        data,
      })

      // console.log(res)

      onSuccess(res)

    } catch (error) {
      console.log(error)
    }
  }
}

export function getDoc(onSuccess = () => { }) {
  return async dispatch => {
    try {
      const res = await sendApiReq({
        url: endPoints.getDoc
      })

      let payload = res.map(r => ({
        ...r,
        documents: JSON.parse(r?.documents) || []
      }))

      // console.log(payload)
      onSuccess(payload)

    } catch (error) {
      console.log(error)
    }
  }
}

export function updateDocStatus(data) {
  return async dispatch => {
    try {
      await sendApiReq({
        method: 'put',
        url: endPoints.updateDocStatus,
        data: data[0]
      })

      await sendApiReq({
        method: 'put',
        url: endPoints.updateDocStatus,
        data: data[1]
      })

      // console.log(res1, res2)

    } catch (error) {
      console.log(error)
    }
  }
}

export async function getMissions(onSuccess = () => { }) {
  try {
    const res = await sendApiReq({
      url: endPoints.getMissions
    })

    console.log(res)
    // onSuccess(payload)

  } catch (error) {
    console.log(error)
  }
}

export async function getLoggers(onSuccess = () => { }) {
  try {
    const res = await sendApiReq({
      url: endPoints.getLoggers
    })

    console.log(res)
    // onSuccess(payload)

  } catch (error) {
    console.log(error)
  }
}

export async function getAlerts(onSuccess = () => { }) {
  try {
    const res = await sendApiReq({
      url: endPoints.getAlerts
    })

    console.log(res)
    // onSuccess(payload)

  } catch (error) {
    console.log(error)
  }
}

export async function getDashboardData(onSuccess = () => { }) {
  try {
    const res = await sendApiReq({
      url: endPoints.getDashboardData
    })

    const res2 = await sendApiReq({
      url: endPoints.getAlert,
      baseURL: root.api2
    })

    let payload = {
      ...res,
      recentAlert: [
        ...res.recentAlert,
        { ...res2 }
      ]
    }

    onSuccess(payload)

  } catch (error) {
    console.log(error)
  }
}

export async function vehicleTracking(dprNo, onSuccess = () => { }) {
  try {
    const res = await sendApiReq({
      url: "http://52.66.119.232:5000/api/v1/dashboard/track"
      // url: endPoints.vehicleTracking + "?dprNo=" + dprNo
    })

    if (Number(res.lastTrackedTemp) > 8) {
      await sendApiReq({
        method: 'post',
        url: endPoints.postAlert,
        baseURL: root.api2,
        data: {
          dpr_no: dprNo,
          temp: res.lastTrackedTemp
        }
      })
    }

    onSuccess(res)

  } catch (error) {
    console.log(error)
  }
}

export async function createMsg(data, onSuccess = () => { }) {
  try {
    const res = await sendApiReq({
      method: 'post',
      url: endPoints.createMsg,
      data
    })

    console.log(res)
    // onSuccess(payload)

  } catch (error) {
    console.log(error)
  }
}

export async function getMsg(data, onSuccess = () => { }) {
  try {
    // const res = await sendApiReq({
    //   url: endPoints.createMsg,
    // })

    // console.log(res)
    // onSuccess(payload)

  } catch (error) {
    console.log(error)
  }
}

export function getConsignments(onSuccess) {
  return async dispatch => {
    try {
      let url = `${endPoints.getDprInfo}?consignment_status=true`

      const res = await sendApiReq({ url })

      dispatch({
        type: dprConstants.GET_CONSIGNMENT,
        payload: res.map(d => ({
          dprNo: d.dprNo,
          id: d.id,
          status: d.notes ? JSON.parse(d.notes)?.[0]?.status : ""
        }))
      })

      onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}

export async function getTemparatures({ id }, onSuccess) {
  try {
    let url = `${endPoints.getDprInfo}?id=${id}`

    const res = await sendApiReq({ url })

    let data = {
      ...res[0],
      packingList: JSON.parse(res[0].packingList),
      products: JSON.parse(res[0].products),
      ccdrStatus: JSON.parse(res[0].ccdrStatus)
    }

    onSuccess(data)

  } catch (error) {
    console.log(error)
  }
}

export async function updateConsignments(data) {
  try {
    await sendApiReq({
      url: endPoints.updateConsignment,
      method: "put",
      data
    })

  } catch (error) {
    console.log(error)
  }
}
