import { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';


const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [update, setUpdate] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [product, update]);

const change = () => {
    setUpdate (!update)
}


    return (
        <div>
            <ProductForm update={change} />
            {loaded && <ProductList product={product}/>}
        </div>
    )
}

export default Main;