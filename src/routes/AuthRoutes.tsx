import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import UsuarioCreate from "../pages/UsuarioCreate";
import { Body, Container, Navbar, AuthMenu } from "../components";

const AuthRoutes = () => {
  return (
    <Body>
      <BrowserRouter>
        <Navbar>
          <AuthMenu />
        </Navbar>
        <Container>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<UsuarioCreate />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Body>
  );
};

export default AuthRoutes;
