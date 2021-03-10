import { CREATE_CARD_INWORK, EDITOR_CARD_INWORK } from './types';
const initialState = {
  inWork: [],
};

export const InWorkReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_CARD_INWORK:
      return {
        ...state, 
        inWork: [...state.inWork, action.payload]
      }
    case EDITOR_CARD_INWORK:
      return {
        ...state, 
        inWork: [
          ...action.arr.slice(0, action.idCard), 
          action.z, 
          ...action.arr.slice(action.idCard+1)]
    }
    default: return state
  }
};