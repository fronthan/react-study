import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  //navigation
  const [show, setShow] = useState(false);

  //search bar
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  //navigation
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  //search bar
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => {window.location.href = "/"}}
        />
      </Logo>

      {pathname === '/' ? 
        <Login>Login</Login> :
        <Input className='nav__input' type='text' placeholder='검색' value={searchValue}
          onChange={(e)=> handleChange(e)}
        />}
    </NavWrapper>
  );
}

export default Nav

const Login = styled.a`
  padding:8px 15px; background-color: rgba(0,0,0, .6);
  border:1px solid #f9f9f9; 
  letter-spacing:1.5px; text-transform:uppercase;
  transition: all 0.2s ease 0s;

  &:hover {
    border-color:transparent;
    color:#000;
    background-color:#f9f9f9
  }
`
const Input = styled.input`
  position: fixed; left:50%;
  padding:5px;
  border:none;
  border-radius: 5px;
  transform: translate(-50%, 0);
  background-color: rgba(0,0,0, .582);
  color:white;  
`

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 36px;
  background-color: ${props => props.show ? "#090b13" : "transparent"};
  z-index: 3;
`;

const Logo = styled.a`
  display: inline-block;
  width: 80px;
  max-height: 70px;
  padding: 0;
  margin-top: 4px;
  font-size: 0;

  img {
    display: block;
    width: 100%;
  }
`;
