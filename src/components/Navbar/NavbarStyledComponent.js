// src/components/Navbar/NavbarStyledComponent.js
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled.a`
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
`;

export const NavItems = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const GitHubButton = styled.a`
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.card_light};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 20px;
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 10px 0;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
