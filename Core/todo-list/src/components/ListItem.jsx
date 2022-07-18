import React from 'react'
export default function ListItem(props) {
    const deleteHandler = (e, i) => {
        e.preventDefault();
        props.onDelete(i)
    }
    const completed = {
        textDecoration: "line-through"
    }
    const uncompleted ={
        textDecoration: "none"
    }



    return (
        <div>
            <h1>List Item's</h1>
            {props.List.map((ListItem,i) =>
                <div>
                    <div style={{ display: "flex" }}>
                        <h1  style={ListItem.isComplete? completed : uncompleted}>{ListItem.text} </h1>
                        <input key={i} type="checkbox" name="isComplete" onChange={() => props.handler(i)} style={{ height: 30, width: 65 }} />
                        <button onClick={(e) => deleteHandler(e, i)} style={{ backgroundColor: "black", height: 30, width: 65, color: "white" }}> Delete </button>
                    </div>

                </div>
            )}
        </div>
    )
};
