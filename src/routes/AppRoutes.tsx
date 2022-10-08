import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsuarioUpdate from "../pages/UsuarioUpdate";
import Gasto from "../pages/Gasto";
import { GastoProvider } from "../contexts/GastoContext";
import { Body, Container, Navbar, AppMenu } from "../components";

const AppRoutes = () => {
  return (
    <Body>
      <BrowserRouter>
        <Navbar>
          <AppMenu />
        </Navbar>
        <Container>
          <GastoProvider>
            <Routes>
              <Route path="*" element={<Gasto />} />
              <Route path="/atualizar" element={<UsuarioUpdate />} />
              <Route path="/gasto" element={<Gasto />} />
            </Routes>
          </GastoProvider>
        </Container>
      </BrowserRouter>
    </Body>
  );
};

export default AppRoutes;
