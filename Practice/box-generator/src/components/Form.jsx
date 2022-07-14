import React, { useState } from 'react';

const Form = (props) => {
    const [color, setColor] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        const Square = {color};
        props.create(Square);


    };
    return (
        <form onSubmit={submitHandler}>
            <h1>Box Generator</h1>
            <h3>
                <label>Color:</label>
                <input type="text" onChange={(e) => setColor(e.target.value)} /> 
                <input type="submit" value="Submit"/>
            </h3>
        </form>
    );
};
export default Form;