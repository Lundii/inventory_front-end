import React, {useState} from 'react';
import * as S from './styled';

const Input = ({label, field, initialValue, handleChange, disabled, type}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    const {value} = e.target;
    setInputValue(value);
    handleChange(value, field)
  }

  return (
    <S.Wrapper>
      <S.Label>{`${label}`}:</S.Label>
      <S.Input 
        onChange={handleInputChange}
        disabled={disabled}
        type={type}
        value={inputValue || initialValue}
      />
    </S.Wrapper>
  )
}

export default Input;
