import React from 'react'

export default function Boxes(props) {
    return (
        <div>
            {props.boxes.map ( (item, i) => 
            <div key={i} style={{backgroundColor: item.color, width: 100, height: 100}}> 
            </div>
            )}
        </div>
    )
}
