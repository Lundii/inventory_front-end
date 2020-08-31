import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  margin-bottom: 16px;
`

export const Label = styled.label`
  font-weight: 500;
  align-self: center;
`

export const Input = styled.input`
  margin-left: 36px;
  padding: 8px;
  border: 1px solid rgba(0,0,0,0.25);
  border-radius: 8px;
  flex: 1;
`