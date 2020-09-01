import React, {useState} from 'react';
import * as S from './styled';

const Input = ({label, field, initialValue, handleChange}) => {

  console.log(initialValue);
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
        value={inputValue || initialValue}
      />
    </S.Wrapper>
  )
}

export default Input;
