import React from 'react';
import * as S from './styled';

const Input = ({label, field, handleChange}) => {

  const handleInputChange = (e) => {
    e.preventDefault();
    const {value} = e.target;
    handleChange(value, field)
  }
  return (
    <S.Wrapper>
      <S.Label>{`${label}`}:</S.Label>
      <S.Input onChange={handleInputChange}/>
    </S.Wrapper>
  )
}

export default Input;
