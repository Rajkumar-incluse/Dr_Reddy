import sendApiReq from '../../utils/sendApiReq';
import endPoints from '../../utils/endPoints';
import adminConstants from './adminConstants';

export function registerUser(data, onSuccess) {
  return async dispatch => {
    try {
      const payload = await sendApiReq({
        method: 'post',
        url: endPoints.registerUser,
        data,
      })

      dispatch({
        type: adminConstants.ADD_USER,
        payload
      })
      onSuccess()

    } catch (error) {
      console.log(error)
    }
  }
}

export function getUsersList(onSuccess) {
  return async dispatch => {
    try {
      const payload = await sendApiReq({
        url: endPoints.getUserList
      })

      dispatch({
        type: adminConstants.GET_USERS,
        payload
      })

      onSuccess()
    } catch (error) {
      console.log(error)
    }
  }
}