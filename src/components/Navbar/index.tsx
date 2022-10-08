import { useContext } from "react";
import { NavbarContainer } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Button } from "../";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

export function Navbar({ children }) {
  return <NavbarContainer>{children}</NavbarContainer>;
}

export function AppMenu() {
  const { logout, toggleTheme } = useAuth();
  const { title, switchOnColor,switchOffColor } = useContext(ThemeContext);
  return (
    <>
      <Link to="/atualizar">
        <Button title="Atualizar" margin="0px 10px 0px 0px" />
      </Link>
      <Link to="/gasto">
        <Button title="Gastos" margin="0px 10px 0px 0px" />
      </Link>

      <Button
        title="Logout"
        margin="0px 20px 0px 0px"
        onClick={() => logout()}
      />

      <Switch
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        onColor={switchOnColor}
        offColor={switchOffColor}
        onChange={()=>toggleTheme()}
      />
    </>
  );
}

export function AuthMenu() {
  const { toggleTheme } = useAuth();
  const { title, switchOnColor,switchOffColor } = useContext(ThemeContext);
  return (
    <>
      <Link to="/login">
        <Button title="Login" margin="0px 10px 0px 0px" />
      </Link>
      <Link to="/cadastrar">
        <Button title="Cadastrar-se" margin="0px 20px 0px 0px" />
      </Link>

      <Switch
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        onColor={switchOnColor}
        offColor={switchOffColor}
        onChange={()=>toggleTheme()}
      />
    </>
  );
}
