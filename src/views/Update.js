import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Update=(props)=>{
    const {id}= props;
    const [name, setName]= useState('');
    const [price, setPrice] = useState(0)
    const [desc, setDesc]= useState('')

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/'+ id)
        .then(res=>{
            setName(res.data.name)
            setPrice(res.data.price)
            setDesc(res.data.desc)
        })
        .catch(err=> console.log(err))
    }, [])

    const updatePerson= e =>{
        e.preventDefault();
        console.log("submitting")
        axios.put('http://localhost:8000/api/products/' +id, {
            name, 
            price, 
            desc
        })
        .then(res =>console.log(res))
        .catch (err=> console.log("error updating person"+ err))
    }

        return(
            <form onSubmit={updatePerson}>
                <label> Title: </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
    
                <label> Price: </label>
                <input type= "number" step=".01" value= {price} onChange={(e)=>setPrice(e.target.value)} ></input>
    
                <label> Description: </label>
                <input type="text" value= {desc} onChange={(e)=>setDesc(e.target.value)}></input>
    
                <input type="submit"></input>
            </form>
        )

}

export default Update
