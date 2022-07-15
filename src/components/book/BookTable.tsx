import React from 'react';
import { BookEntity } from 'types';
import { BookTableRow } from './BookTableRow';

interface Props{
    books: BookEntity[];
    onBooksChange: () => void;
}

export const BookTable = (props: Props)=>(
    <table>
        <thead>
            <tr>
                <th>Tytuł</th>
                <th>Name</th>
                <th>Imię</th>
                <th>Rok Wydania</th>
                <th>#</th>

            </tr>
        </thead>
        <tbody>
            {
                props.books.map(book=> <BookTableRow book={book} key={book.id} onBooksChange={props.onBooksChange}/>)
            }
        </tbody>
    </table>
);