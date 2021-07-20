import React, {useEffect, useState} from 'react'
import Form from '../components/Form';
import ProductList from '../components/ProductList';
import axios from 'axios'

const Main= ()=>{ 
    const [products, setProducts]= useState([])
    const [loaded, setLoaded] = useState(false)

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

useEffect(()=>{

    axios.get('http://localhost:8000/api/products')
        .then(res=>{
            setProducts(res.data)
            setLoaded(true)
        })
        .catch(err=>console.log(err))
}, [])

const createProduct = product =>{
    axios.post('http://localhost:8000/api/products', product)
    .then (res=>{
        setProducts([...products, res.data])
    })
}

 
    return(
        <div>
            <Form onSubmitProp={createProduct} initialName="" initialPrice="" initialDesc=""/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main