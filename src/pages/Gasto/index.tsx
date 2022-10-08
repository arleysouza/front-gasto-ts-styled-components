import { useState } from "react";
import { useGasto } from "../../hooks";
import { GastoProps } from "../../types";
import {
  Box,
  Button,
  Error,
  Field,
  Label,
  Input,
  Table,
} from "../../components";

export default function Gasto() {
  const [id, setId] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [error, setError] = useState("");
  const { create, remove, update, gastos } = useGasto();

  const salvar = async () => {
    setError("");
    const _valor = parseFloat(valor.replace(",", "."));
    if (_valor > 0) {
      const r =
        id === ""
          ? await create({ descricao, valor: _valor })
          : await update({ id, descricao, valor: _valor });
      if (r.error !== "") {
        setError(r.error);
      } else {
        limpar();
      }
    } else {
      setError("Forneça o valor");
    }
  };

  const edit = (obj: GastoProps) => {
    console.log("clicous");
    setId(obj.id);
    setDescricao(obj.descricao);
    setValor(obj.valor + "");
  };

  const limpar = () => {
    setId("");
    setDescricao("");
    setValor("");
  };

  const deletar = async (e, id) => {
    e.preventDefault();
    setError("");
    const r = await remove(id);
    if (r.error !== "") {
      setError(r.error);
    }
  };

  return (
    <Box>
      <Field>
        <Label>Descrição</Label>
        <Input
          width="300px"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </Field>
      <Field>
        <Label>Valor</Label>
        <Input
          value={valor}
          type="text"
          onChange={(e) => setValor(e.target.value)}
        />
      </Field>
      {error !== "" && <Error>{error}</Error>}
      <div>
        <Button onClick={salvar} title="Salvar" margin="0px 10px 0px 0px" />
        <Button onClick={limpar} title="Limpar" />
      </div>
      {gastos.length > 0 && (
        <Table
          titles={["Descrição", "Valor"]}
          data={gastos}
          edit={edit}
          deletar={deletar}
        />
      )}
    </Box>
  );
}
