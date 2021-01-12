import styled from "styled-components";
import { FaSitemap } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: #2a2a2a;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: rgba(255, 255, 255, 0.911);
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #858585;
  }
`;

export const NavIcon = styled(FaSitemap)`
  margin-right: 0.5rem;
`;

export const NavIcon1 = styled(FaMapSigns)`
  margin-left: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  color: rgba(255, 255, 255, 0.911);
  transition: color 0.3s ease;

  &:hover {
    color: #858585;
  }

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #2a2a2a;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #e7e7e7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: rgba(255, 255, 255, 0.911);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  transition: color 0.3s ease;

  &:hover {
    color: #858585;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    transition: all 0.3s ease;

    &:hover {
      color: #858585;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
