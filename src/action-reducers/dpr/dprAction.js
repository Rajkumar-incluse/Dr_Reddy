import sendApiReq from '../../utils/sendApiReq';
import endPoints from '../../utils/endPoints';
import dprConstants from './dprConstants';

export function checkDpr(dprno) {
  return sendApiReq({
    url: endPoints.checkDpr + dprno,
  })
}

export function createDpr(data) {
  return async dispatch => {
    try {
      const res = await sendApiReq({
        method: 'post',
        url: endPoints.createDpr,
        data,
      })

      console.log(res)

    } catch (error) {
      console.log(error)
    }
  }
}

export function getDprInfo({ dprNo, id }) {
  return async dispatch => {
    try {
      const res = await sendApiReq({
        url: `${endPoints.getDprInfo}${dprNo}&id=${id}`,
      })

      console.log(res)

    } catch (error) {
      console.log(error)
    }
  }
}