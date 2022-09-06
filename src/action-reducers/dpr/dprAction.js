import sendApiReq from '../../utils/sendApiReq';
import endPoints from '../../utils/endPoints';
import dprConstants from './dprConstants';

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
          payload: res
        })
      }

      if (id) {
        let data1 = res[0]
        let payload = {
          ...data1,
          packingList: JSON.parse(data1.packingList),
          products: JSON.parse(data1.products),
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
      const res = await sendApiReq({
        method: 'post',
        url: endPoints.createCCDR,
        data,
      })

      console.log(res)

      // let payload = {
      //   ...res,
      //   packingList: JSON.parse(res.packingList),
      //   products: JSON.parse(res.products),
      // }
      // console.log(payload)

      // dispatch({
      //   type: dprConstants.ADD_DPR,
      //   payload
      // })
      // onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}

export function updateCCDRStatus(data, onSuccess) {
  return async dispatch => {
    try {
      const res = await sendApiReq({
        method: 'put',
        url: endPoints.updateCCDRStatus,
        data
      })

      console.log(res)

      // dispatch({
      //   type: dprConstants.ADD_DPR,
      //   payload
      // })
      // onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}