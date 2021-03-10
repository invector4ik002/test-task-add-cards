import { 
   CREATE_CARD_INWORK, 
   CREATE_CARD_ONCHECK, 
   CREATE_CARD_DONE, 
   ADD_ID_CARD, 
   NAME_CARD, 
   EDITOR_CARD_INWORK, 
   EDITOR_CARD_ONCHECK, 
   EDITOR_CARD_DONE
} from "./types";

export function inWorkCreateCard(card) {
   return {
      type: CREATE_CARD_INWORK,
      payload: card
   }
}
export function onCheckCreateCard(card) {
   return {
      type: CREATE_CARD_ONCHECK,
      payload: card
   }
}
export function doneCreateCard(card) {
   return {
      type: CREATE_CARD_DONE,
      payload: card
   }
}
export function addIdCrad (idCard) {
   return {
      type : ADD_ID_CARD,
      payload: idCard,
   }
}
export function getName (name) {
   return {
      type : NAME_CARD,
      payload: name,
   }
}
export function editorCardInwork(idCard, arr, z) {
   return {
      type: EDITOR_CARD_INWORK,
      idCard: idCard,
      arr: arr,
      z: z
   }
}
export function editorCardOnCheck(idCard, arr, z) {
   return {
      type: EDITOR_CARD_ONCHECK,
      idCard: idCard,
      arr: arr,
      z: z
   }
}
export function editorCardDone(idCard, arr, z) {
   return {
      type: EDITOR_CARD_DONE,
      idCard: idCard,
      arr: arr,
      z: z
   }
}
