import React, { SyntheticEvent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { BookEntity } from 'types';

interface Props{
    book: BookEntity;
    onBooksChange: () => void;

}

export const BookTableRow = (props:Props) =>{

    return (
 
 <tr>
  <Link to={`/books/${props.book.id}`}>
        {props.book.title}
  </Link>
        <td>{props.book.name}</td>
        <td>{props.book.surname}</td>
        <td>{props.book.release}</td>
        <td>
        <Link to={`/books/${props.book.id}`}>Wypożycz</Link>
       
        </td>
    </tr>
)};