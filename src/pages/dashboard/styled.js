import styled from 'styled-components';

export const Header = styled.div`
  height: 55px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  display: flex;

  h3 {
    margin: 0;
    align-self: center;
    margin-left: 35px;
  }
`
export const NavWrapper = styled.div`
  height: 110vh;
  width: 260px;
  background-color: #3A74CB};
  top: 55px;
`;

export const NavLink = styled.div`
  padding: 16px;
  cursor: pointer;
  color: white;
  :hover{
    background-color: white;
    color: #3A74CB;
  }
`;