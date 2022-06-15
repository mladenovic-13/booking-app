import React from "react";
import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Container>
        <Logo>Booking App</Logo>
        <NavItems>
          <button className="navButton">Register</button>
          <button className="navButton">Sign In</button>
        </NavItems>
      </Container>
    </Nav>
  );
};

const Nav = styled.div`
  background-color: ${(props: any) => props.theme.color["primary-dark"]};
  height: 50px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.span`
  font-weight: 600;
  font-size: 20px;
`;
const NavItems = styled.div`
  .navButton {
    cursor: pointer;
    margin-left: 30px;
    border: none;
    border-radius: 2px;
    padding: 7px 12px;
    font-weight: 500;
    font-size: 16px;
    color: ${(props: any) => props.theme.color["primary-dark"]};
    background-color: ${(props: any) => props.theme.color["primary-lighter"]};
    transition: 0.2s ease-in-out 0s;
  }
  .navButton:hover {
    transform: scale(1.05);
  }
`;

export default Navbar;
