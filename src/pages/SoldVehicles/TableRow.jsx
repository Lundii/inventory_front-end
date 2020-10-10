import React, {useState, useCallback} from 'react';
import * as S from './styled';

const TableRow = ({id, name, model, color, vin, year, price, commission}) => {
  
  return (
    <S.TableRow>
      <div>{name}</div>
      <div>{year}</div>
      <div>{model}</div>
      <div>{`$ ${price}`}</div>
      <div>{color}</div>
      <div>{vin}</div>
      <div>{`$ ${commission}`}</div>
    </S.TableRow>
  )
};

export default TableRow;
