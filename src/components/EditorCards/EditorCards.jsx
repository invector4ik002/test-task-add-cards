import React from 'react';
import { useDispatch} from 'react-redux';
import { editorCardInwork } from '../../redux/actions';
import { editorCardOnCheck } from '../../redux/actions';
import { editorCardDone } from '../../redux/actions';
import './EditorCards.css';

export const EditorCard = (props) => {
  const dispatch = useDispatch();
  const[сard, setCard] = React.useState(props.card);

  const handlerCloseEditModal = () => {
    switch(props.nameCard) {
      case 'inWork': return props.setOpenEditorCardInWorck(false);
      case 'onCheck': return props.setOpenEditorCardOnCheck(false);
      case 'done': return props.setOpenEditorCardDone(false);
    }
  };
  const handlerEditorCards = () => {
    switch(props.nameCard) {
      case 'inWork': return dispatch(editorCardInwork(props.idCard, props.currentCards, сard)) & props.setOpenEditorCardInWorck(false);
      case 'onCheck': return dispatch(editorCardOnCheck(props.idCard, props.currentCards, сard)) & props.setOpenEditorCardOnCheck(false);
      case 'done': return dispatch(editorCardDone(props.idCard, props.currentCards, сard)) & props.setOpenEditorCardDone(false);
    } 
  };
  const handlerChange = (e) => {
    switch(props.nameCard) {
      case 'inWork': return setCard(e.target.value);
      case 'onCheck': return setCard(e.target.value)
      case 'done': return setCard(e.target.value);
    }
  };
  return (
    <div>
      <div className="board__modal-edit-card_wrap">
        <div className='board__modal-edit-card-heading_wrap'>
          <textarea onChange={handlerChange} name='inWork' defaultValue={сard} className='board__modal-edit-card-heading board__modal-edit-card-heading_focus'></textarea>
          <svg onClick={handlerCloseEditModal} className='board__modal-edit-card-closed' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#626262"/>
          </svg>
        </div>
        <textarea  
          defaultValue=''
          className='board__modal-edit-card-description'
          placeholder='Описание'
        >
        </textarea>
        <button onClick={handlerEditorCards} className='board__modal-edit-card-btn'>Сохранить</button>
      </div>

      <div className='modal-overlay'> 
      </div>

    </div>
  )
}