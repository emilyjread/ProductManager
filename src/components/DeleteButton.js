import React from 'react'
import axios from 'axios'

const Delete=(props)=>{
    const {productId, successCallback}= props
    const deleteProduct = (e)=>{
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res => {
            window.location= ('/api/products')
            successCallback();
        })
        .catch(err=> console.log(err))
    }
    return(
        <button onClick={deleteProduct}>Delete</button>
    )
}
export default Delete