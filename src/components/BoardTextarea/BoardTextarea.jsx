import React from 'react';
import './BoardTextarea.css'

export const BoardTextarea = (props) => {

const handlerChange = (event)=> {
  switch(props.name) {
    case 'inWork': return props.setValueInWork(event.target.value);
    case 'onCheck': return props.setValueOnCheck(event.target.value);
    case 'done': return props.setValueDone(event.target.value);
  }
};
  return (
    <>
      <textarea 
        defaultValue={props.valueInWork}
        // name={props.name}
        placeholder='Введите текст карточки'
        onChange={handlerChange} 
        className='board__сolumn-textarea board__сolumn-textarea_focus'>
      </textarea>
    </>
  );
}