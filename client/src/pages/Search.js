import React, {useState, useEffect} from 'react';
import API from '../utils/API';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Searchbar from '../components/Searchbox';
import Results from '../components/Results';

function Search(){

    const [API_KEY, setAPI_KEY] = useState('');
    
    const [input, setInput] = useState('');
    const [result, setResult] = useState([]);

    useEffect(function(){
        getAPIKEY();
    }, []);

    async function getAPIKEY(){
        const response = await API.getAPIKEY();
        setAPI_KEY(response.data);
    }

    function handleInputChange(event){
        const value = event.target.value;
        console.log(`[handleInputChange] value: ${value}`);
        setInput(value); 
    }

    async function handleBtnClicked(event){
        event.preventDefault();
        console.log('[handleBtnClicked] called with input: ', input);
        const response = await API.searchBooks(input, API_KEY).catch((err) => console.log(err));
        console.log(response.data.items)
        setInput('');
        setResult(response.data.items);
    }

    return (
        <>
            <Navbar />
            <Logo />
            <div className="container">
                <Searchbar input={input} handleInputChange={handleInputChange} handleBtnClicked={handleBtnClicked} />
                <br/>
                {result.length === 0 ? <h1 style={{textAlign: 'center'}}>You haven't search for anything yet.</h1> : <Results data={result}/>}
            </div>
        </>
    );
}

export default Search;