import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { idText } from 'typescript';
import { Header } from './components/Header/Header';
// import './App.css';
// import { BookList } from './components/book/BookList';
import { BookView } from './views/BookView';
import { BorrowBook } from './views/BorrowBook';
import { BorrowsView } from './views/BorrowsView';
import { ClientsView } from './views/ClientsView';
import { FindClients } from './views/FindClients';
import { Home } from './views/Home';
import { NotFoundView } from './views/NotFoundView';
import { SearchBook } from './views/SearchBook';
import { SearchClient } from './views/SearchClient';
import { SingleBookView } from './views/SingleBookView';
import { SingleClientView } from './views/SingleClientView';


export const App = () =>{
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/books" element={<BookView/>}/>
      <Route path="/books/:idOfBook" element={<SingleBookView/>}/>
      <Route path="/books/search/:title" element={<SearchBook/>}/>
      <Route path="/clients" element={<ClientsView/>}/>
      <Route path="/clients/:idOfClient" element={<SingleClientView/>}/>
      <Route path="/clinets/search/:name" element={<SearchClient/>}/>
      <Route path="/borrows" element={<BorrowsView/>}/>
      <Route path="/borrows/borrowBook/:bookId" element={<BorrowBook/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<NotFoundView/>}/>

    </Routes>
    </>
 

    // <div className="App">
    //     <BookView/>
    // </div>
  )
}
