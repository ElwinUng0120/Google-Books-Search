import React from 'react';

function SavedCard(props){
    const book=props.book;
    return (
    <li className="list-group-item" id={book.bookId} style={{border: '2px solid black'}}>
        <h2>{book.title}</h2>
        <h5 style={{fontSize: '20px'}}>by {book.authors}</h5>
        <h5 style={{fontSize: '15px'}}>Description: </h5>
        <p style={{width: '80%'}}>{book.description}</p>
        <a href={book.link} target="blank"><button type="button" className="btn btn-primary">Learn more</button></a>
        <img src={book.image} alt="book cover" style={{float: 'right', marginTop: '-14%'}}/> 
        <button type="button" className="btn btn-primary" id={book.bookId} onClick={props.handleBtnClicked} style={{float: 'right', marginRight: '5%'}}>Remove</button>            
    </li>
    );
}

export default SavedCard;