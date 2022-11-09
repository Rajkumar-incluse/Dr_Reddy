import dprConstants from './dprConstants';

const initialState = {
  list: [],
  ccdrList: {},
  consignmentList: []
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

    case dprConstants.UPDATE_CCDR_STATUS:
      return {
        ...state,
        list: state.list.map(dpr => {
          if (dpr.id === payload.id) {
            return {
              ...dpr,
              ccdrStatus: {
                ...dpr.ccdrStatus,
                status: payload.ccdrStatus
              },
            }
          }

          return dpr
        }),
      }

    case dprConstants.GET_CONSIGNMENT:
      return {
        ...state,
        consignmentList: [...payload]
      }

    default: return state
  }
}

export default adminReducer;