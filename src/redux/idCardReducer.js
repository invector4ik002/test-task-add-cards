import {ADD_ID_CARD } from './types';
const initialState = {
  idCard: null,
};

export const addIdCrad = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ID_CARD:
    return  {
    ...state,
      idCard: action.payload,
    }
    default: return state
  }
};