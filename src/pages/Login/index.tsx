import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Box, Button, Error, Field, Label, Input } from "../../components";

export default function Login() {
  const [mail, setMail] = useState("pedro@teste.com");
  const [senha, setSenha] = useState("123");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const enviar = async () => {
    setError("");
    const r = await login({ mail, senha });
    if (r.error !== "") {
      setError(r.error);
    }
  };

  return (
    <Box>
      <Field>
        <Label>e-mail</Label>
        <Input
          width="300px"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </Field>
      <Field>
        <Label>Senha</Label>
        <Input
          value={senha}
          type="password"
          onChange={(e) => setSenha(e.target.value)}
        />
      </Field>
      {error !== "" && <Error>{error}</Error>}
      <div>
        <Button title="Logar" onClick={enviar} />
        <Button title="Cadastrar-se" margin="0px 0px 0px 10px" onClick={()=>navigate("/cadastrar")} />
      </div>
    </Box>
  );
}
