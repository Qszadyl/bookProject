import React, { useEffect, useState } from "react";
import { ClientEntity } from "types";
import { Spinner } from "../common/Spinner/Spinner";
import { ClientTable } from "./ClientTable";


export const ClientList = () =>{
    const [clientList, setClientList] = useState<ClientEntity[] | null>(null);


    const refreshClients = async()=>{
        setClientList(null);
        const res = await fetch('http://localhost:3001/clients')
        const data = await res.json();
        setClientList(data.clientList);
    };


    useEffect(()=>{
        refreshClients();
    },[])



    if(clientList === null){
        return <Spinner/>
    }

    return <div className="container">
        <h1>Klienci</h1>
        <ClientTable client={clientList} onClientChange={refreshClients}/>
    </div>

}