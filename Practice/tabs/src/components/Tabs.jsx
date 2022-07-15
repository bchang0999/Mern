import { useState } from 'react';

const Tabs = (props) => {
    const [text, setText] = useState(props.array)
    const clickHandler = (e) => {
        e.preventDefault();
        props.textBox(text)
    };
    return (
        <div >
            <button onClick={clickHandler} style={{height:40, width:100}}>{props.name}</button>
            

            
        </div>
    );
};
export default Tabs;
