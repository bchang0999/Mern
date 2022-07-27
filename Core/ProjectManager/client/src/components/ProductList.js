import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

    
const ProductList = (props) => {
    const navigate = useNavigate();

    const deleteProduct = (e, id) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => props.removeFromDom(id))
            .catch(err => console.log(err))
        navigate('/');
    }

    return (
        <div>
            {props.product.map( (product, i) =>
                <p key={i}> 
                <Link to={"/products/viewone/" + product._id}>{product.title}</Link> | <button onClick={e => deleteProduct(e, product._id)} >Delete</button>
                </p>
                
            )}
        </div>
    )
}
    
export default ProductList;