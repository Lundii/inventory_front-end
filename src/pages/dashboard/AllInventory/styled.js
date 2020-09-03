import styled from 'styled-components';


export const Wrapper = styled.div`
  padding: 24px;
`
export const TableHeader = styled.div`
display: grid;
grid-template-columns: 25% 15% 15% 15% 15% 15%;
justify-items: center;
color: white;
background-color: #3A74CB;
padding: 16px;

h4 {
  margin: 0;
  align-self: center;
}
`
export const RowWrapper = styled.div`
`;

export const TableRow = styled.div`
display: grid;
grid-template-columns: 25% 15% 15% 15% 15% 15%;
justify-items: center;
padding: 16px;
background-color: #ECECEC;
:nth-child(even) {background-color: white;}

h5 {
  margin: 0;
  align-self: center;
}
`;

export const Search = styled.div`
  display: flex;
  width: 30%;

  input {
    background-color: white;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    flex: 1;
  }
`

export const Button = styled.div`
  display: flex;
  width: 20%;

  input {
    background-color: #3A74CB;
    border: 0;
    padding: 8px 16px;
    border-radius: 8px;
    color white;
    flex: 1;
    cursor: pointer;
  }
`
export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between
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
  font-weight: bold;
  cursor: pointer;
`;

export const LeftButton = styled(RightButton)`
  background-color: white;
  border: 0;
  color: black;
  text-align: left;
  font-weight: bold;
`;

export const Paging = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 24px 16px 0 0;

  input {
    border: 0;
    outline: 0;
    border-bottom: 1px solid black;
    padding: 0 8px;
    width: 24px;
    text-align: center;
  }

  h4 {
    margin: 0;
  }
`

export const Error = styled.p`
  font-size: 12px;
  text-align: center;
  color: red;
`

export const TopContainer = styled.div`
  height: 120px; 
  display: flex; 
  flex-direction: column; 
  justify-content: center;

  .container{
    display: flex; 
    justify-content: space-between;
  }
`