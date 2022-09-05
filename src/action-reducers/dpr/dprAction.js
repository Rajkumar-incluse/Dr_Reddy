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
        if (id) {
          url = url + `&id=${id}`
        }
      }
      const res = await sendApiReq({ url })

      console.log(res)

      // onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}