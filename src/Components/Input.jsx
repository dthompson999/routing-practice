import React from 'react';

const Number = props => {
    
    if (isNaN(props.input)) {
        return (

            <div className="container">
                <div className="text-center">
                    <div className="jumbotron mt-5">
                        <h1>The Word to display is {props.input}</h1>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (

            <div className="container">
                <div className="text-center">
                    <div className="jumbotron mt-5">
                        <h1>The Number to display is {props.input}</h1>
                    </div>
                </div>
            </div>

        );
    }
}

export default Number;