import axios from "axios";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";


const ProductOne = props => {
    const [product, setProduct] = useState({})
    const { id } = useParams();


    useEffect(() => {
        axios.get('http://localhost:8000/api/products/viewone/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [product]);


    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default ProductOne;