import adminConstants from './adminConstants';

const initialState = []

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case adminConstants.GET_USERS:
      return [...payload]

    case adminConstants.ADD_USER:
      return [...state, { ...payload }]

    default: return state
  }
}

export default adminReducer;