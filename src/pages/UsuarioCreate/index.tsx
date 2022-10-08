import { useState } from "react";
import { Box, Button, Error, Field, Input, Label } from "../../components";
import { useAuth } from "../../hooks";

export default function UsuarioCreate() {
  const [mail, setMail] = useState("pedro@teste.com");
  const [senha, setSenha] = useState("123");
  const [msg, setMsg] = useState("");
  const { usuarioCreate } = useAuth();

  const salvar = async () => {
    setMsg("");
    const r = await usuarioCreate({ mail, senha });
    if (r.error !== "") {
      setMsg(r.error);
    } else {
      setMsg("Cadastrado com sucesso");
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
      {msg !== "" && <Error>{msg}</Error>}
      <div>
        <Button onClick={salvar} title="Cadastrar" />
      </div>
    </Box>
  );
}
