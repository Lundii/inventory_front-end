import styled, { keyframes } from 'styled-components';

export const ModalBody = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const easeIn = keyframes`
  from {
    top: 30%;
  }

  to {
    top:50%
  }
`;

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadowLarge};
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  min-width: 25%;
  max-width: 50%;
  padding: 16px;
  border-radius: 8px;
  animation: ${easeIn} 0.5s;
  
  @media only screen and (max-width: 768px) {
    width: 90%;
    max-width: 100%;
`;

export const Text = styled.h6`
  text-align: center;
  margin-bottom: 12px;
`;

export const Header = styled.h4`
  text-align: center;
  margin: 12px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: ${props => {
    if (props.left && props.right) return 'space-between';
    if (props.left) return 'flex-start';
    return 'flex-end';
  }};
`;

export const RightButton = styled.button`
  margin: 8px;
  width: 40%;
  color: white;
  background-color: #3A74CB;
  padding: 8px;
  border: 0;
  border-radius: 8px;
  font-size: 16px;
`;

export const LeftButton = styled.button`
  margin: 8px;
  width: 40%;
  background-color: white;
  border: 0;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
`;
