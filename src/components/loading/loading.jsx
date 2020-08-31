import React from 'react';
import ReactLoading from 'react-loading';
import * as S from './styled';
 
const Loading = ({color}) => (
  <S.Wrapper>
    <ReactLoading 
      type={'spin'} 
      color={color || '#3A74CB'} 
      height={'5%'} 
      width={'5%'} 
    />
  </S.Wrapper>
);
 
export default Loading;