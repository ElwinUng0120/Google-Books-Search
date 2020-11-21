import React from 'react';

function Searchbar(props){
    return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Looking for Something Interesting?</h5>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Keywords..." onChange={props.handleInputChange} value={props.input}/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" id="button-addon2" onClick={props.handleBtnClicked}>Search</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Searchbar;