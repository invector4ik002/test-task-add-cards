import React from 'react';

import { CancelBtn } from '../CancelBtn/CancelBtn';
import { AddCardMoreBtn } from '../AddCardMoreBtn/AddCardMoreBtn';
import { BoardTextarea } from '../BoardTextarea/BoardTextarea';
import { useSelector, useDispatch } from 'react-redux';
import { EditorCard } from '../EditorCards/EditorCards';

import { inWorkCreateCard } from '../../redux/actions';
import { addIdCrad } from '../../redux/actions';
import { getName } from '../../redux/actions';

export const InWork = () => {
const dispatch = useDispatch();

const idCard = useSelector((state) => state.BoardReducer.CardId);
const NameCard = useSelector((state) => state.BoardReducer.NameCard);
const inWorkCards = useSelector( (state) => state.InWorkReducer.inWork);

const [addCardInWork, setAddCardInWork] = React.useState(false);
const [valueInWork, setValueInWork] = React.useState(null);
const [openEditorCardInWorck, setOpenEditorCardInWorck] = React.useState(false);

const handlerAddBtn = () => {
if(valueInWork === null) {
  return
}
  dispatch(inWorkCreateCard(valueInWork));
  setAddCardInWork(false);
  setValueInWork(null);
};

 const handlerOpenEditModal = (e) => {
  setOpenEditorCardInWorck(true);
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
        <span>В работе</span>
          {inWorkCards.map((item, idx) => (
            <textarea onClick={handlerOpenEditModal} onChange={Change} name='inWork' className='board__сolumn-textarea' id={idx} key={idx} value={item}></textarea>
          ))}
          {addCardInWork  && <BoardTextarea name='inWork' setValueInWork={setValueInWork} valueInWork={valueInWork}/>}
          {!addCardInWork && <AddCardMoreBtn name='inWork' setAddCardInWork={setAddCardInWork} />}
        <div>
          {addCardInWork &&  <button 
            onClick={handlerAddBtn}
            className='сolumn-cards__btn-add-card' 
            type='button'>Добавить карточку
            </button>}
          {addCardInWork && <CancelBtn name='inWork' setAddCardInWork={setAddCardInWork}/>}
        </div>
      </div>
      {openEditorCardInWorck &&  <EditorCard 
        setOpenEditorCardInWorck={setOpenEditorCardInWorck}
        card={inWorkCards[idCard]} 
        nameCard={NameCard} 
        currentCards={inWorkCards}
        idCard={idCard}
      />}
    </div>
  );
} 


   