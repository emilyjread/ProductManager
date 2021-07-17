import React, {useState} from 'react'
import axios from 'axios'


const Form=()=>{
    const [name, setName]= useState("")
    const [price, setPrice]= useState(0)
    const [desc, setDesc]= useState("")

const handleSubmit=e=>{
    e.preventDefault()
    console.log("form submitted")
    axios.post('http://localhost:8000/api/products',{
        name, 
        price, 
        desc
    })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))    
}




    return(
        <form onSubmit={handleSubmit}>
            <label> Title: </label>
            <input type="text" onChange={(e)=>setName(e.target.value)}></input>

            <label> Price: </label>
            <input onChange={(e)=>setPrice(e.target.value)} type= "number"></input>

            <label> Description: </label>
            <textarea onChange={(e)=>setDesc(e.target.value)}></textarea>

            <input type="submit"></input>
        </form>
    )
}

export default Form
