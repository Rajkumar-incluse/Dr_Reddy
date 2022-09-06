import dprConstants from './dprConstants';

const initialState = {
  list: [],
  ccdrList: {}
}

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case dprConstants.GET_DPR_LIST:
      return {
        ...state,
        list: [...payload]
      }

    case dprConstants.ADD_DPR:
      return {
        ...state,
        list: [...state.list, { ...payload }],
      }

    case dprConstants.UPDATE_DPR:
      return {
        ...state,
        list: state.list.map(dpr => {
          if (dpr.id === payload.id) {
            return {
              ...payload
            }
          }

          return dpr
        }),
      }

    default: return state
  }
}

export default adminReducer;