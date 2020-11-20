import React from 'react';

function Searchbar(){
    return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Looking for Something Interesting?</h5>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Keywords..." />
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Searchbar;