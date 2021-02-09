import React from "react";
import { Menu } from "antd";

function NavBar() {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <a href="/" title="시작페이지로">시작페이지</a>
        </Menu.Item>
        <Menu.Item>
          <a href="register" title="회원가입하기">회원가입</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/login" title="로그인하기">로그인</a>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default NavBar;
