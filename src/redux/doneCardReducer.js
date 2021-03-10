import { CREATE_CARD_DONE, EDITOR_CARD_DONE } from './types';
const initialState = {
  done: [],
};

export const DoneCardReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_CARD_DONE:
      return {
        ...state, 
        done: [...state.done, action.payload]
      }
    case EDITOR_CARD_DONE:
    return {
      ...state, 
      done: [
        ...action.arr.slice(0, action.idCard), 
        action.z, 
        ...action.arr.slice(action.idCard+1)]
    }
    default: return state
  }
};