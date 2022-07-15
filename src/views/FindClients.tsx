import React, { useEffect, useState } from "react"
import { ClientList } from "../components/clients/ClientList"
import { ClientTable } from "../components/clients/ClientTable"
import { ClientEntity } from "types"




interface Props{
    text: string
}

export const FindClients = (props: Props) =>{
    const [clientList,setClientList] = useState<ClientEntity[] | null>(null)
    // const [error,setError] = useState(null);

    const refreshClients = async()=>{
        setClientList(null);
        // const res = await fetch('http://localhost:3001/clients')
        // const res = await fetch(`${props.adress}`);
        const res = await fetch(`http://localhost:3001/clients/search/${props.text}`);
        const data = await res.json();
        setClientList(data.clientList);
        console.log(clientList,props.text);
        
    }
    
        useEffect(()=>{
            refreshClients();
        },[])


    if(clientList === null){
        return null
    }
    

{
return (
    <>
    <h1>Siemanko</h1>
    <ClientTable client={clientList} onClientChange={refreshClients}/>
    {/* <ClientList adress={`http://localhost:3001/clients/search/${props.text}`}/> */}
    </>


)


}



}

// useEffect(()=>{
    //     console.log(text);
        
    //     (async ()=>{
    //         const res = await fetch(`http://localhost:3001/clients/${text}`);
    //        setClientList(await res.json())
    //         // const resBorrows = await fetch(`http://localhost:3001/clientBorrows/${idOfClient}`);
    //         // setClientBook(await resBorrows.json())


    //     })();
    // },[]);

    // if(clientList === null){
    //     return null
    // }

  

    // const [clientList, setClientList] = useState<ClientEntity[] | null>(null);
    // const [text, setText] = useState<string | null>(null);

        // const refreshClients = async()=>{
    //     // e.preventDefault()
    //     setClientList(null);
    //     const res = await fetch(`http://localhost:3001/clients/search/${text}`);
    //     const data = await res.json();
    //     setClientList(data.clientList);
    //     console.log(text,clientList)
    // }