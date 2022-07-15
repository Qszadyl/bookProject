import React, {FormEvent, useState} from 'react';
import { Link } from 'react-router-dom';
import { ClientEntity, CreateClientReq } from 'types';
import { Spinner } from '../common/Spinner/Spinner';
import "./AddClient.css";


export const AddClient = () =>{
    const [form, setForm] = useState<CreateClientReq>({
    name: '',
    surname: '',
    email: '',
    phone: '',
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setresultInfo] = useState<string | null>(null);
    const [wrapper, setWrapper] = useState<any | null>(null);

    
 
    const updateForm = (key:string, value: any)=>{
        setForm(form=>({
            ...form, 
            [key]:value,
        }));
    };

    const showForm = async () =>{
        setWrapper(null);
        setWrapper(document.querySelector('.add_client_wrapper'));

        if( wrapper == null){
            return 
        }else{
            wrapper.classList.toggle('hide');
        }
      
    }

    const sendForm = async (e:FormEvent)=>{
        e.preventDefault();

        setLoading(true);

        try{
            const res = await fetch(`http://localhost:3001/clients`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: ClientEntity = await res.json();
            console.log(data);
            setLoading(false);
            setresultInfo(`${data.name} added with ID ${data.id}`);
        }finally{
            setLoading(false);
        }

   
    }

    if(loading){
        return <Spinner/>
    }

    if(resultInfo !== null){
        return <div>
             <p><strong>{resultInfo}</strong></p>   
             <button onClick={()=>setresultInfo(null)}>Dodaj jeszcze jedną pozycje</button>

        </div>
        
      
    }


    return (
    <>
      <div className="navBar">
    <button  className='btn' onClick={()=>showForm()}>Formularz dodawania klienta</button>
    <Link to={`/clinets/search/:nameOfClient`}><button className='btn'>Wyszukiwarka</button></Link>
    </div>
    <div className="add_client_wrapper hide">

    <form onSubmit={sendForm}>
        <h2>Dodaj Urzytkownika</h2>
          <div className="box-wrap">
           <div className='box'>
        <label>
            Nazwisko: <br/>
            <input type="text" 
            value={form.name} 
            onChange={e=>updateForm('name', e.target.value)}
            />
        </label>
        </div>
        <div className='box'>
        <label>
            Imię: <br/>
            <input type="text" 
            value={form.surname} 
            onChange={e=>updateForm('surname', e.target.value)}
            />
        </label>
        </div>
        <div className='box'>
        <label>
            Maila: <br/>
            <input type="text" 
            value={form.email} 
            onChange={e=>updateForm('email', e.target.value)}
            />
        </label>
        </div>
        <div className='box'>
        <label>
            Numer Telefonu: <br/>
            <input type="text" 
            value={form.phone} 
            onChange={e=>updateForm('phone', e.target.value)}
            />
        </label>
        </div>
        </div>

        <button className='btn' type="submit">Dodaj</button>
    </form>
    </div>
    
    </>
    )
    



}