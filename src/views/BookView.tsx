import React from 'react';
import { AddBook } from '../components/AddBook/AddBook';
import { BookList } from '../components/book/BookList';
import "../style/style.css";

export const BookView = () =>(
    <div className='main'>
    {/* <BookList adress={'http://localhost:3001/books'}/> */}
    <BookList/>
    <AddBook/>
    </div>
)