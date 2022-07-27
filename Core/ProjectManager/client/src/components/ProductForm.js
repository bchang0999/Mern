import React, { useState } from 'react'
import axios from 'axios';




const ProductForm = props => {
    //keep track of what is being typed via useState hook
    const [title, settitle] = useState(""); 
    const [price, setprice] = useState("");
    const [description, setDescription] = useState('');
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products/create', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update title and price
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>settitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setprice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <textarea type="description" onChange={(e)=>setDescription(e.target.value)} value={description}> </textarea>
            </p>
            <input type="submit" value={"Add Product"}/>
        </form>
    )
}


export default ProductForm;