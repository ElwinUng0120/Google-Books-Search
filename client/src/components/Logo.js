import React from 'react';

function Logo(){
    return (
    <div className="jumbotron jumbotron-fluid" style={{marginLeft: 'auto', marginRight: 'auto', width: '60%', height: '200px', textAlign: 'center'}}>
        <div className="container">
          <h1 className="display-4" style={{marginTop: '-2%', fontWeight: 'bold'}}>Google Books Search</h1>
          <p className="lead" style={{fontSize: '30px'}}>Your One Stop Book Searcher in the sea of the Internet</p>
        </div>
    </div>
    );
}

export default Logo;