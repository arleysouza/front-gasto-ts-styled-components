import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.navbarBackground};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  padding: 0px 15px;
`;
