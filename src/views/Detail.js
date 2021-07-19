import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
const Detail=(props)=>{
    
    const [product, setProduct] = useState({});
    const {removeFromDom}= props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    const deleteProduct = (productId)=>{
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res => {
            window.location= ('/api/products')
        })
        .catch(err=> console.log(err))
    }

    return (
        <div>
            <p>Title: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.desc}</p>

            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    )
} 

export default Detail