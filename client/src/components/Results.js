import React from 'react';
import ResultCard from './ResultCard';

function Results(props){
    return (
    <div className="card">
        <div className="card-body">
        <ul className="list-group">
            {props.data.map(book => <ResultCard book={book} key={book.id}/>)}
        </ul>
        </div>
    </div>
    );
}

export default Results;