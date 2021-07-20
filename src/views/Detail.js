import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton'
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
            <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
        </div>
    )
} 

export default Detail