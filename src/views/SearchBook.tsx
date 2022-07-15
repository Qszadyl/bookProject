import { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BookList } from "src/components/book/BookList";
import { BookEntity, ClientEntity, GetSingleClientRes, ListBorrowsRes } from "types";
import { FindClients } from "./FindClients";
import "../style/style.css";

export const SearchBook = () =>{
    const [bookList, setBookList] = useState<BookEntity[]>([]);
    const [input,setInput] = useState<string>('');
    const [output,setOutPut] = useState<BookEntity[]>([]);
    const [option,setOption] = useState<string>("title");


useEffect(()=>{
    (async ()=>{
        const res = await fetch('http://localhost:3001/books');
        const data = await res.json();
        console.log(data);
        setBookList(data.bookList);
    })();
},[]);

useEffect(()=>{
    setOutPut([])
    if(option === "title"){
        bookList.filter(value=>{
            console.log(value);
            
            if(value.title.toLowerCase().includes(input.toLowerCase()))
            {
                setOutPut(output=>[...output,value])
            }
        })
    }
    if(option === "name"){
        bookList.filter(value=>{
            console.log(value);
            
            if(value.name.toLowerCase().includes(input.toLowerCase()))
            {
                setOutPut(output=>[...output,value])
            }
        })
    }


},[input])


 
if(bookList === null){
    return null;
}
const options = ["title","name"]


    return (
        <div className="main search">
           <h2>Znajdz Książkę</h2>
           <label>
            <select name="option" value={option}
            onChange={e=>setOption(e.target.value)}>
                {options.map(o=><option value={o} key={o}>{o}</option>)}
            </select>

           </label>
           <input 
           type="text" 
           placeholder="Szukaj Książkę"
           onChange={e=>setInput(e.target.value)}
           />
        
           <div className="output">
            {output.map(book=>(
                <>
                  <Link to={`/books/${book.id}`}>
                    {option === "title" ? <p>{book.title}</p>
                                        : <p>{book.name} {book.surname}</p>}
                
                    </Link>
       
                
                
                </>
            ))}

           </div>
         
               
           
          
        </div>
     
    )
    
}