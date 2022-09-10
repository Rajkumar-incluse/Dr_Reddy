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

export function getUserById(id, onSuccess) {
  return async (dispatch, getStore) => {
    try {
      const users = getStore().admin

      if (users.some(us => us._id === id)) {
        onSuccess()
      } else {
        const payload = await sendApiReq({
          url: endPoints.getUserList + "?id=" + id
        })

        dispatch({
          type: adminConstants.ADD_USER,
          payload: payload[0]
        })

        onSuccess()
      }
    } catch (error) {
      console.log(error)
    }
  }
}