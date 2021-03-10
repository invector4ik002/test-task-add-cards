import React from 'react';

import { CancelBtn } from '../CancelBtn/CancelBtn';
import { AddCardMoreBtn } from '../AddCardMoreBtn/AddCardMoreBtn';
import { BoardTextarea } from '../BoardTextarea/BoardTextarea';
import { useSelector, useDispatch} from 'react-redux';
import { EditorCard } from '../EditorCards/EditorCards';

import { onCheckCreateCard } from '../../redux/actions';
import { addIdCrad } from '../../redux/actions';
import { getName } from '../../redux/actions';

export const OnCheck = () => {
const dispatch = useDispatch();

const idCard = useSelector((state) => state.BoardReducer.CardId);
const NameCard = useSelector((state) => state.BoardReducer.NameCard);
const onCheckCards = useSelector( (state) => state.OnCheckReducer.onCheck);

const [addCardOnCheck, setAddCardOnCheck] = React.useState(false);
const [valueOnCheck, setValueOnCheck] = React.useState(null);
const [openEditorCardOnCheck, setOpenEditorCardOnCheck] = React.useState(false);

const handlerAddBtn = () => {
if(valueOnCheck === null) {
  return
}
  dispatch(onCheckCreateCard(valueOnCheck));
  setAddCardOnCheck(false);
  setValueOnCheck(null);
};
const handlerOpenEditModal = (e) => {
  setOpenEditorCardOnCheck(true);
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
        <span>На проверке</span>
         {onCheckCards.map((item, idx) => (
            <textarea onClick={handlerOpenEditModal} onChange={Change} name='onCheck' className='board__сolumn-textarea' id={idx} key={idx} value={item}></textarea>
          ))}
          {addCardOnCheck  && <BoardTextarea name='onCheck' setValueOnCheck={setValueOnCheck} valueOnCheck={valueOnCheck}/>}
          {!addCardOnCheck && <AddCardMoreBtn name='onCheck' setAddCardOnCheck={setAddCardOnCheck} />}
        <div>
          {addCardOnCheck && <button 
            onClick={handlerAddBtn}
            className='сolumn-cards__btn-add-card' 
            type='button'>Добавить карточку
          </button>}
          {addCardOnCheck && <CancelBtn name='onCheck' setAddCardOnCheck={setAddCardOnCheck} />}
        </div>
      </div>
      {openEditorCardOnCheck && <EditorCard 
        setOpenEditorCardOnCheck={setOpenEditorCardOnCheck}
        card={onCheckCards[idCard]} 
        nameCard={NameCard} 
        currentCards={onCheckCards}
        idCard={idCard}
      />}
    </div>
  );
}