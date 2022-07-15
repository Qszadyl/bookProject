import React, {useEffect, useState} from 'react';
import { BookTable } from './BookTable';
import {BookEntity} from 'types';
import { Spinner } from '../common/Spinner/Spinner';


export const BookList = () =>{
    const [bookList, setBookList] = useState<BookEntity[] | null>(null);

    


    const refreshBooks = async()=>{
        setBookList(null);
        const res = await fetch('http://localhost:3001/books');
        // const res = await fetch(`${props.adress}`)
        const data = await res.json();
        setBookList(data.bookList);
    };


    useEffect(()=>{
        refreshBooks();
    },[])


    if(bookList === null){
        return <Spinner/>
    }

    return <div className='container'>
        <h1>Książki</h1>
        <BookTable books={bookList} onBooksChange={refreshBooks}/>
    </div>

}