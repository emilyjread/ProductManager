import React from 'react'
import { Link, Redirect } from '@reach/router'
import axios from 'axios';

const ProductList=(props)=>{
    const {removeFromDom}= props;
    const deleteProduct = (productId)=>{
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res => {
            removeFromDom(productId)
        })
        .catch(err=> console.log(err))

    }

    return(
        <div>
           {props.products.map((product, idx)=>{
               return (
               <div>
                   <p key={idx}>{product.name}, {product.price}, {product.desc}</p>
                   <Link to={`/api/products/${product._id}`} >Go </Link>
                   <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
               </div>
               
               )          
           })}
        </div>
    )

}

export default ProductList