import axios from 'axios';
import { Link } from "react-router-dom";

    
const ProductList = (props) => {
    return (
        <div>
            {props.product.map( (product, i) =>
                <p key={i}> 
                <Link to={"/products/viewone/" + product._id}>{product.title}</Link>
                </p>
            )}
        </div>
    )
}
    
export default ProductList;