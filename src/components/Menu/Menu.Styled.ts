import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }: { open: boolean }) =>
    open ? "translateX(0)" : "translateX(-101%)"};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  a,button {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SesionText = styled.span`
  margin-right: 8px;
`;
