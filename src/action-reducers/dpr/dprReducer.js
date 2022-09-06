import dprConstants from './dprConstants';

const initialState = {
  list: [],
}

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case dprConstants.GET_DPR_LIST:
      return {
        list: [...payload]
      }

    case dprConstants.ADD_DPR:
      return {
        list: [...state.list, { ...payload }],
      }

    case dprConstants.UPDATE_DPR:
      return {
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