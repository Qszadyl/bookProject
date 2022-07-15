import React from 'react';
import { BookEntity, BorrowsEntity, ClientEntity } from 'types';
import { BorrowsTableRow } from './BorrowsTableRow';



interface Props{
  borrows: BorrowsEntity[];
  onBorrowsChange: ()=> void,
}

export const BorrowsTable = (props: Props)=>(
    <table>
        <thead>
            <tr>
                <th>Książka</th>
                <th>Klient</th>
                <th>Data wypożyczenia</th>
                <th>Zwrot</th>
                <th>Stan</th>
                <th>#</th>

            </tr>
        </thead>
        <tbody>
            {
            props.borrows.map(borrow=><BorrowsTableRow borrow={borrow} key={borrow.bookId} onBorrowsChange={props.onBorrowsChange}/>)
            }
        </tbody>
    </table>
);