import { useState, useEffect } from "react";
import { useAuth } from "../../hooks";
import { Box, Button, Error, Field, Label, Input } from "../../components";

export default function UsuarioUpdate() {
  const [mail, setMail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");
  const { usuarioUpdate, mailLogin } = useAuth();

  useEffect(() => {
    setMail(mailLogin);
  }, [mailLogin]);

  const salvar = async () => {
    setMsg("");
    if (mail !== "" || senha !== "") {
      const r = await usuarioUpdate({ mail, senha });
      if (r.error !== "") {
        setMsg(r.error);
      } else {
        setMsg("Atualizado com sucesso");
      }
    }
    else{
      setMsg("Forneça o novo e-mail ou a nova senha")
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
        <Button title="Atualizar" onClick={salvar} />
      </div>
    </Box>
  );
}
