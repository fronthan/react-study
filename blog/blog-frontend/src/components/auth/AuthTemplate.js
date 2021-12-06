import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
/**
 * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트
 */
//화면 전체를 채운다
const AuthTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  position: absolute;
  left:0; top:0;
  bottom:0; right:0;
  background: ${palette.gray[2]};
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block; padding-bottom: 2rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 2px;;
  }
  width:360px;
  padding:2rem;
  box-shadow:0 0 8px rgba(0,0,0, 0.025);
  border-radius: 2px;
  background-color: #fff;;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">REACTERS</Link>
        </div>
        { children } 
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;