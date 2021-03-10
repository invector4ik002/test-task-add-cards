import React from 'react';
import './AddCardMoreBtn.css';

export const AddCardMoreBtn = (props) => {

  const handlerAddMore = () => {

    switch(props.name) {
      case 'inWork': return props.setAddCardInWork(true);
      case 'onCheck': return props.setAddCardOnCheck(true);
      case 'done': return props.setAddCardDone(true);
    }
  };
  
  return (
    <>
      <button 
        onClick={handlerAddMore}
        type='button' 
        className='сolumn-cards__btn сolumn-cards__btn_hover'
      >
      <svg className='сolumn-cards__btn-svg' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#626262"/>
      </svg>
      Добавить еще одну карточку
      </button>
    </>
  );
}