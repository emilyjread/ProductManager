import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from '../components/Form';

const Update=(props)=>{
    const {id}= props;
    const [product, setProduct]= useState();
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/'+ id)
        .then(res=>{
            setProduct(res.data);
            setLoaded(true)
        })
        .catch(err=> console.log(err))
    }, [])

    const updateProduct= product =>{

        axios.put('http://localhost:8000/api/products/' +id, product)
        .then (res=> console.log(res))
        .catch (err=> console.log("error updating person"+ err))
    
    }
        return(
            loaded &&(<Form
                onSubmitProp={updateProduct}
                initialName={product.name}
                initialPrice={product.price}
                initialDesc={product.desc}
            />)
        )
                    
}

export default Update
