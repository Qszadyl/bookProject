import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BookList } from "src/components/book/BookList";
import { GetSingleClientRes, ListBorrowsRes } from "types";
import "../style/style.css";

export const SingleClientView = () =>{
    const [clientInfo,setClientInfo] = useState<GetSingleClientRes | null>(null); 
    const {idOfClient} = useParams();
    const [clientBooks, setClientBook] = useState<ListBorrowsRes | null>(null) 

    useEffect(()=>{
        (async ()=>{
            const res = await fetch(`http://localhost:3001/clients/${idOfClient}`);
            setClientInfo(await res.json())
            const resBorrows = await fetch(`http://localhost:3001/clients/clientBorrows/${idOfClient}`);
            console.log(resBorrows);
            setClientBook(await resBorrows.json())


        })();
    },[]);


    if(clientInfo === null){
        return null
    }

    return <div className="single">
        <h1>{clientInfo.client.name} {clientInfo.client.surname}</h1>
        <p>Id Klienta</p><strong>{clientInfo.client.id}</strong><br/><br/>
        <hr/>
        <h3>Kontakt</h3>
        <p>Email: {clientInfo.client.email}</p>
        <p>Telefon: {clientInfo.client.phone}</p>
        <p>
        <p>Ilość posiadnych książek: <strong>{clientInfo.counter}</strong></p> 

        </p>
        <Link to={'/clients'}>Powrót</Link>
    
    </div>


    
}