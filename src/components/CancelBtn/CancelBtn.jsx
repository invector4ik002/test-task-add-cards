import React from 'react';
import './CancelBtn.css';

export const CancelBtn = (props) => {


  const handlerCancelBtn = () => {
    // console.log('object');
    switch(props.name) {
      case 'inWork': return props.setAddCardInWork(false);
      case 'onCheck': return props.setAddCardOnCheck(false);
      case 'done': return props.setAddCardDone(false);
    }
  }

  return (
    <button onClick={handlerCancelBtn} className='сolumn-cards__btn-cancel' type='button'>
      <svg className='сolumn-cards__btn-cancel-svg' width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#626262"/>
      </svg>
    Отмена</button>
  );
}