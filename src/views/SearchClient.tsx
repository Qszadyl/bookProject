import { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BookList } from "src/components/book/BookList";
import { ClientEntity, GetSingleClientRes, ListBorrowsRes } from "types";
import { FindClients } from "./FindClients";
import "../style/style.css";

export const SearchClient = () =>{
    const [clientList, setClientList] = useState<ClientEntity[]>([]);
    const [input,setInput] = useState<string>('');
    const [output,setOutPut] = useState<ClientEntity[]>([]);


useEffect(()=>{
    (async ()=>{
        const res = await fetch('http://localhost:3001/clients');
        const data = await res.json();
        console.log(data);
        setClientList(data.clientList);
    })();
},[]);

useEffect(()=>{
    setOutPut([])
    clientList.filter(value=>{
        if(value.name.toLowerCase().includes(input.toLowerCase()))
        {
            setOutPut(output=>[...output,value])
        }
    })
},[input])


 
if(clientList === null){
    return null;
}


    return (
        <div className="main search">
           <h2>Znajdz Klienta</h2>
           <input 
           type="text" 
           placeholder="Szukaj Klienta"
           onChange={e=>setInput(e.target.value)}
           />
        
           <div className="output">
            {output.map(client=>(
                <>
                  <Link to={`/clients/${client.id}`}>
                    
                  <p>{client.name} {client.surname}</p> 
                    </Link>
       
                
                
                </>
            ))}

           </div>
         
               
           
          
        </div>
     
    )
    
}