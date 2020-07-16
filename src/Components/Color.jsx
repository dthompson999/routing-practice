import React from 'react';

const Color = props => {
    
    if (isNaN(props.input)) {
        return (

            <div className="container">
                <div className="text-center">
                    <div className="jumbotron mt-5 " style={{backgroundColor: props.bgColor}}>
                        <h1 style={{color: props.textColor}}>The Word to display is {props.input}</h1>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (

            <div className="container">
                <div className="text-center">
                    <div className="jumbotron mt-5" style={{backgroundColor: props.bgColor}}>
                        <h1 style={{color: props.textColor}}>The Number to display is {props.input}</h1>
                    </div>
                </div>
            </div>

        );
    }
}

export default Color;