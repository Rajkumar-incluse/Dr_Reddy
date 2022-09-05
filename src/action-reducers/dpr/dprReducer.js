import dprConstants from './dprConstants';

const initialState = []

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case dprConstants.GET_DPR_LIST:
      return [...payload]

    case dprConstants.ADD_DPR:
      return [...state, { ...payload }]

    default: return state
  }
}

export default adminReducer;