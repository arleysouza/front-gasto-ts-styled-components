import { AuthProvider } from "./contexts";
import Routes from "./routes";
import "./styles/global.css";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
