import { ADD_ID_CARD, NAME_CARD} from './types';
const initialState = {};
export const BoardReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ID_CARD:
      return {
        ...state,
        CardId: action.payload,
      }
    case NAME_CARD:
      return {
        ...state,
        NameCard: action.payload,
      }
    default: return state
  }
};