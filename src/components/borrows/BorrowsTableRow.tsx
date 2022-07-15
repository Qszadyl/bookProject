import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { BorrowsEntity } from "types";

interface Props{
    borrow: BorrowsEntity;
    onBorrowsChange: () => void;

}

export const BorrowsTableRow = (props:Props) =>{

    const returnBook = async ()=>{
        console.log('Click');
        if(!window.confirm(`Are you sure you want to remove ${props.borrow.bookId}?`)){
            return 
        }
        const res = await fetch(`http://localhost:3001/borrows/returnBook/${props.borrow.rentId}`,{
            method: 'PATCH',
      
        })
        if([400,500].includes(res.status)){
            const error = await res.json();
            alert(`Error occured: ${error.message}`)
            return;
        }
        props.onBorrowsChange();

    }


    return (
 
 <tr>
  <Link to={`/borrows/${props.borrow.rentId}`}>
  <td>{props.borrow.bookId}</td> 
  </Link>
        <td>{props.borrow.clientId}</td> 
        <td>{props.borrow.endRent}</td> 
        <td>{props.borrow.state ? "Wypożyczone" : "Na Stanie"}</td>
        <td>
        
            {props.borrow.state 
            ? <a href="#" onClick={returnBook}>Zwróć</a> 
            : null}
        </td>
    </tr>
)};