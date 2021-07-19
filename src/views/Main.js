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
            console.log("requesting products from API", res.data)
        })
        .catch(err=>console.log(err))
}, [])

 
    return(
        <div>
            <Form/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main