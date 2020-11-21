import React from 'react';
import API from '../utils/API';

function ResultCard(props){
    const book = props.book;

    async function handleBtnClicked(event){
        event.preventDefault();
        console.log(`[handleBtnClicked] called to save book.`);
        const response = await API.saveBook({
            bookId: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        }).catch(err => console.log(err));
        console.log(response);
        alert(`BookID: ${book.id} saved`);
    }
    if(book){
        return (
        <li className="list-group-item" id={book.id} style={{border: '2px solid black'}}>
            <h2>{book.volumeInfo.title}</h2>
            <h5 style={{fontSize: '20px'}}>by {book.volumeInfo.authors}</h5>
            <h5 style={{fontSize: '15px'}}>Description: </h5>
            <p style={{width: '80%'}}>{book.volumeInfo.description}</p>
            <a href={book.volumeInfo.infoLink} target="blank"><button type="button" className="btn btn-primary">Learn more</button></a>
            <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'http://placehold.it/128x198'} alt="book cover" style={{float: 'right', marginTop: '-14%'}}/> 
            <button type="button" className="btn btn-primary" onClick={handleBtnClicked} style={{float: 'right', marginRight: '5%'}}>Save</button>            
        </li>
        );
    } else {
        return (
            <li className="list-group-item">You don't have any saved books</li>
        );
    }
}

export default ResultCard;