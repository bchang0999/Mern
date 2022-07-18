import { useState } from 'react';
import ListItem from './ListItem';

export default function Main(props) {
    const [text, setText] = useState("");
    const submitHandler = (e) => {
        e.preventDefault(); if (text < 1){
            return;
        }
        const task = {
            text: text,
            isComplete: false
        
        }
        console.log(task)
        props.createList(task);
        
    };
    return(
        <form onSubmit={submitHandler}>
            <h1>
                <input type="text" onChange={(e) => setText(e.target.value)} /> 
            </h1>
                <input type="submit" value="Add" className='btnbtn' style={{backgroundColor: "cyan"}}/> 
        </form>
    )
}