import dprConstants from './dprConstants';

const initialState = {

}

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case dprConstants.GET_USERS:
      return []

    default: return state
  }
}

export default adminReducer;