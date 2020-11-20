import React from 'react';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Searchbar from '../components/Searchbox';
import Results from '../components/Results';

function Search(){
    return (
        <>
            <Navbar />
            <Logo />
            <div className="container">
                <Searchbar />
                <br/>
                <Results />
            </div>
        </>
    );
}

export default Search;