import React from 'react';

import { CancelBtn } from '../CancelBtn/CancelBtn';
import { AddCardMoreBtn } from '../AddCardMoreBtn/AddCardMoreBtn';
import { BoardTextarea } from '../BoardTextarea/BoardTextarea';
import { useSelector, useDispatch } from 'react-redux';
import { EditorCard } from '../EditorCards/EditorCards';

import { doneCreateCard } from '../../redux/actions';
import { addIdCrad } from '../../redux/actions';
import { getName } from '../../redux/actions';

export const Done = () => {
const dispatch = useDispatch();

const idCard = useSelector((state) => state.BoardReducer.CardId);
const NameCard = useSelector((state) => state.BoardReducer.NameCard);
const doneCards = useSelector( (state) => state.DoneCardReducer.done);

const [addCardDone, setAddCardDone] = React.useState(false);
const [valuedone, setValueDone] = React.useState(null);
const [openEditorCardDone, setOpenEditorCardDone] = React.useState(false);

const handlerAddBtn = () => {
if(valuedone === null) {
  return
}
  dispatch(doneCreateCard(valuedone));
  setAddCardDone(false);
  setValueDone(null);
};
const handlerOpenEditModal = (e) => {
  setOpenEditorCardDone(true)
  dispatch(addIdCrad(Number(e.target.id))); 
  dispatch(getName(e.target.name));
};
/**
 * функция заглушка для устранения "варенника из консоли"
 */
const Change = () => {};
  return (
    <div>
      <div className='board__сolumn-cards board__сolumn-cards_flex'>
        <span>Выполнено</span>
          {doneCards.map((item, idx) => (
            <textarea onClick={handlerOpenEditModal} onChange={Change} name='done' className='board__сolumn-textarea' id={idx} key={idx} value={item}></textarea>
          ))}
          {addCardDone  && <BoardTextarea name='done' setValueDone={setValueDone} valuedone={valuedone}/>}
          {!addCardDone && <AddCardMoreBtn name='done' setAddCardDone={setAddCardDone}/>}
        <div>

          { addCardDone && <button 
            onClick={handlerAddBtn}
            className='сolumn-cards__btn-add-card' 
            type='button'>Добавить карточку
          </button>}

          {addCardDone && <CancelBtn name='done' setAddCardDone={setAddCardDone}/>}
          { openEditorCardDone && <EditorCard 
            setOpenEditorCardDone={setOpenEditorCardDone}
            card={doneCards[idCard]} 
            nameCard={NameCard} 
            currentCards={doneCards}
            idCard={idCard}
            />
          }
        </div>
      </div>
    </div>
  );
}