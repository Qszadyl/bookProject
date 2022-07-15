import React, {FormEvent, useState} from 'react';
import { Link } from 'react-router-dom';
import { BookEntity, CreateBookReq } from 'types';
import { Spinner } from '../common/Spinner/Spinner';
import "./AddBook.css";


export const AddBook = () =>{
    const [form, setForm] = useState<CreateBookReq>({
        title: '',
        name: '',
        surname: '',
        release: '',
        category: '',
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
        setWrapper(document.querySelector('.add_wrapper'));

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
            const res = await fetch(`http://localhost:3001/books`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data: BookEntity = await res.json();
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
            <button onClick={()=>showForm()} className="btn">Formularz dodawania</button>
             <Link to={`/books/search/:nameOfBook`}><button className="btn">Wyszukiwarka</button></Link>
        </div>  
    
    <div className="add_wrapper hide">
       
       <form onSubmit={sendForm}>
           <h2>Dodaj Książkę</h2>
           <div className="box-wrap">
           <div className='box'>
           <label>
               Tytuł: <br/>
               <input type="text" 
               value={form.title} 
               onChange={e=>updateForm('title', e.target.value)}
               />
           </label>
           </div>
           <div className='box'>
           <label>
               Nazwisko autora: <br/>
               <input type="text" 
               value={form.name} 
               onChange={e=>updateForm('name', e.target.value)}
               />
           </label>
           </div>
         <div className='box'>
           <label>
               Imię autora: <br/>
               <input type="text" 
               value={form.surname} 
               onChange={e=>updateForm('surname', e.target.value)}
               />
           </label>
           </div>
        <div className='box'>
           <label>
               Rok wydania: <br/>
               <input type="text" 
               value={form.release} 
               onChange={e=>updateForm('release', e.target.value)}
               />
           </label>
           </div>
           <div className='box'>
           <p>Kategoria: </p>
               <label>
               
                   <select value={form.category} 
                   onChange={e=>updateForm('category', e.target.value)}>
                       <option value="Inne">Inne</option>
                       <option value="Edukacja">Edukacja</option>
                       <option value="Fantasy">Fantasy</option>
                       <option value="Historia">Historia</option>
                       <option value="Programowanie">Programowanie</option>
                   </select>
               </label>
               </div>
          
               </div>
           <button className='btn' type="submit">Dodaj</button>
       </form>
       </div>
        </>

  
    )


}