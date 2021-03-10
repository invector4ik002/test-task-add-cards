import { combineReducers } from "redux";

import { BoardReducer } from "./BoardReducer";
import { InWorkReducer } from "./inWorkReducer";
import { OnCheckReducer } from './onCheckReducer';
import { DoneCardReducer } from './doneCardReducer';

export const rootReducer = combineReducers({
  InWorkReducer: InWorkReducer,
  OnCheckReducer: OnCheckReducer,
  DoneCardReducer: DoneCardReducer,

  BoardReducer: BoardReducer,
});