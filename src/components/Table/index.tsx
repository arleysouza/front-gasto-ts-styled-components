import { TableSld } from "./styles";
import { GastoProps } from "../../types";

export function Table({ titles, data, edit, deletar }) {
  return (
    <TableSld>
      <caption>Clique com o botão esquerdo para editar e com o botão direito para excluir</caption>
    
      <colgroup>
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          {titles.map((title:string, index:number) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item:GastoProps, index:number) => (
          <tr key={index} onClick={()=>edit(item)} onContextMenu={(e)=>deletar(e,item.id)}>
            <td>{item.descricao}</td>
            <td style={{textAlign:"right"}}>R$ {(item.valor+"").replace(".",",")}</td>
          </tr>
        ))}
      </tbody>
    </TableSld>
  );
}
