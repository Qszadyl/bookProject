import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BorrowsTableRow } from "src/components/borrows/BorrowsTableRow";
import { BookEntity, BorrowsEntity, GetSingleBookRes } from "types";
import { BorrowRecord } from "../../../backend/records/borrow.records";
import "../style/style.css";

export const SingleBookView = () =>{
    const [bookInfo,setBookInfo] = useState<GetSingleBookRes | null>(null); 
    const {idOfBook} = useParams();

   

    useEffect(()=>{
        (async ()=>{
            const res = await fetch(`http://localhost:3001/books/${idOfBook}`);
            setBookInfo(await res.json())
          

        })();
    },[]);


    if(bookInfo === null){
        return null
    }

    console.log(bookInfo.isBorrowed);
    return <div className="single">
        <h1>{bookInfo.book.title}</h1>
        <p>ID Ksiażki</p><strong>{bookInfo.book.id}</strong><br/><br/>
        <h4>Autor:   {bookInfo.book.surname}  {bookInfo.book.name}</h4>
        <p>Wydana: {bookInfo.book.release}</p>
        Stan: {
    
        
        bookInfo.isBorrowed ? "Na Stanie"  : "Wypożyczona"   
        
        }
        <br/>
        <strong>
            
        {
           
            
             bookInfo.isBorrowed ? <button className="btn"><Link to={`/borrows/borrowBook/${bookInfo.book.id}`}>Wypożycz :</Link></button>: null 
        }
        </strong>
        <p>
            <Link to={'/books'}>Wróć do listy</Link>
        </p>
    
    </div>
}