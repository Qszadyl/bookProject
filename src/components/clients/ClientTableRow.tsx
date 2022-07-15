import { Link } from "react-router-dom";
import { ClientEntity } from "types";

interface Props{
    client: ClientEntity
    onClientChange: () => void;

}

export const ClientTableRow = (props:Props) =>{
   
    return (
 
 <tr>
  <Link to={`/clients/${props.client.id}`}>
        {props.client.name}
  </Link>
        <td>{props.client.surname}</td>
        <td>{props.client.email}</td>
        <td>{props.client.phone}</td>
    </tr>
)};