import React, { useEffect, useState }  from "react";
import { Link, useParams } from "react-router-dom";
import { BorrowsEntity, ClientEntity, CreateBorrowReq } from "types";
import { SearchClient } from "./SearchClient";
import "../style/style.css";




export const BorrowBook = () =>{
    const {bookId} = useParams();


    const [clientList, setClientList] = useState<ClientEntity[]>([]);
    const [resultInfo, setresultInfo] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [input,setInput] = useState<string>('');
    const [output,setOutPut] = useState<ClientEntity[]>([]);

    const [form,setForm] = useState<CreateBorrowReq>({
        bookId: '',
        clientId: '',
        startRent: '',
        endRent: '',
        state: false,
    })

    const updateForm = (key:string, value: any)=>{
    
        console.log('Click',bookId, 'Clietn Id', value);
        
        let time = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;

        setForm({
            ...form,
            bookId: `${bookId}`,
            clientId: value,
            startRent: time,
            endRent: '',
            state: true,
        });
        console.log(form);
        
    };

    const borrowBook = async ()=>{
        console.log(form);
        
        setLoading(true);

        try{
            const res = await fetch(`http://localhost:3001/borrows`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: BorrowsEntity = await res.json();
            console.log(data);
            setLoading(false);
         
        
            setresultInfo(`${data.clientId} wypożyczył książkę o  ${data.bookId}`);
        }finally{
            setLoading(false);
        }

   
    }



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
if(output=== null){
    return null;
}


    return (
        <div className="main searchList">
           <h2>Znajdz Osobę Wypożyczjącą</h2>
           <input 
           type="text" 
           placeholder="Szukaj Klienta"
           onChange={e=>setInput(e.target.value)}
           />
        
        <div className="clientListWrapper">
           <div className="output">

            {output.map(client=>(
              
                
                <div className="clinet-box">
                  <p>{client.name} {client.surname}</p> 
                  <button className="borrowButton" onClick={e=>updateForm('clientId', client.id)}>Wybierz</button>
                  </div>
                
                  
                
            ))}

            </div>
            <div className="buttonWrapper">

    {
                form.clientId === "" 
                ? null :
                <Link to={'/books'}>
                    <button className="bigButton" onClick={borrowBook}>Wypożycz</button>
                </Link>
                }

    </div>

           </div>
          
         
               
           
          
        </div>
     
    )



    
  
    
   

    return(
        <>
          <h2>Wypożyczanie:</h2>
          <SearchClient/>
        </>
          
    )
}