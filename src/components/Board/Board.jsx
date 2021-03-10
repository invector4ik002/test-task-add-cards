import React from 'react';

import { InWork }  from '../InWork/InWork';
import { OnCheck }  from '../OnCheck/OnCheck';
import { Done } from '../Performed/Done';

import './Board.css';

export const Board = () => {
  return (
    <div className='board board_flex'>
      <InWork />
      <OnCheck />
      <Done />
    </div>
  );
}