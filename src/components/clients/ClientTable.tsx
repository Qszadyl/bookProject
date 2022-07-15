import { ClientEntity } from "types";
import { ClientTableRow } from "./ClientTableRow";

    interface Props{
        client: ClientEntity[];
        onClientChange: () => void;
    }
    
    export const ClientTable = (props: Props)=>{
        return (
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Nazwisko</th>
                        <th>Imię</th>
                        <th>email</th>
                        <th>Telefon</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        props.client.map(client=> <ClientTableRow client={client} key={client.id} onClientChange={props.onClientChange}/>)
                    }
                </tbody>
            </table>
            </div>
        );
    }
