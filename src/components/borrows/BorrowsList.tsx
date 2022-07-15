import React, {useEffect, useState} from 'react';

import {BookEntity, BorrowsEntity, ClientEntity} from 'types';
import { Spinner } from '../common/Spinner/Spinner';
import { BorrowsTable } from './BorrowsTable';
import "../components-style/style.css";

interface Props{
    adress: string;
}


export const BorrowsList = (props: Props) =>{
    const [borrowsList, setBorrowsList] = useState<BorrowsEntity[] | null>(null);


    const refreshBorrow = async()=>{
        setBorrowsList(null);
        const resClint = await fetch('http://localhost:3001/clients')
        const res = await fetch(`${props.adress}`)
        const data = await res.json();
        setBorrowsList(data.borrowsList);
        console.log(borrowsList)

    };


    useEffect(()=>{
        refreshBorrow ();
    },[])


    if(borrowsList === null){
        return <Spinner/>
    }


    return <div className='container'>
        <h1>Książki</h1>
        <BorrowsTable borrows={borrowsList}  onBorrowsChange={refreshBorrow}/>
    </div>

}