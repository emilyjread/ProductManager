import React, {useState, useEffect} from 'react'
import { Link} from '@reach/router'
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ProductList=(props)=>{
    const [products, setProducts]= useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res =>setProducts(res.data))
        
    }, [])

    const removeFromDom= productId=>{
        setProducts(products.filter(products=>products._id!=productId))
    }

    return(
        <div>
           {props.products.map((product, idx)=>{
               return (
               <div key={idx}>
                   <p>{product.name}, {product.price}, {product.desc}</p>
                   <Link to={`/api/products/${product._id}`} >Go </Link>
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
               </div>
               
               )          
           })}
        </div>
    )

}

export default ProductList