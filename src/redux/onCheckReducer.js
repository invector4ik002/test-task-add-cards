import { CREATE_CARD_ONCHECK, EDITOR_CARD_ONCHECK } from './types';
const initialState = {
  onCheck: [],
};

export const OnCheckReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_CARD_ONCHECK:
      return {
        ...state, 
        onCheck: [...state.onCheck, action.payload]
      }
    case EDITOR_CARD_ONCHECK:
    return {
      ...state, 
      onCheck: [
        ...action.arr.slice(0, action.idCard), 
        action.z, 
        ...action.arr.slice(action.idCard+1)]
    }
    default: return state
  }
};