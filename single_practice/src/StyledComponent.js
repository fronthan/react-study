import React from 'react';
import styled, {css} from 'styled-components';

/* ======= 9.3 styled-component
* styled를 불러오고, styled.태그명을 사용하면 리액트 컴포넌트가 생성된다.
*/
const Box =styled.div`
    display:flex;
    background:${props => props.color || 'blue'};//props로 값을 전달할 수 있다. 
  padding:1rem;
`;

const Button = styled.button`
  display:flex;
  align-items: center;
  justify-content:center;
  box-sizing:border-box;
  background:white;
  color:black;
  border-radius:4px;
  padding:0.5rem;
  font-size:1rem; font-weight:600;

  &:hover{
    background:rgba(255,255,255,0.9);
  }//sass 기능도 가능

  ${props => props.inverted &&
  css`
  background:none;
  border:2px solid white;
  color:white;

  &:hover {
    background:white;
    color:black;
  }
  `};

  & + button {
    margin-left:1rem;
  }
`;




const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;