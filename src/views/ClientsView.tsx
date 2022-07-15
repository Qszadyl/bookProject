import React from 'react';
import { AddClient } from '../components/AddClient/AddClient';
import { ClientList } from '../components/clients/ClientList';



export const ClientsView = () =>(
    <div className='main'>
    <ClientList/>
    <AddClient/>
    </div>
)

