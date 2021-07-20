import React, {useState} from 'react'


const Form=(props)=>{
    const { initialName, initialPrice, initialDesc, onSubmitProp } = props;
    const [name, setName]= useState(initialName)
    const [price, setPrice]= useState(initialPrice)
    const [desc, setDesc]= useState(initialDesc)

const handleSubmit=e=>{
    e.preventDefault()
    props.onSubmitProp({name, price, desc})

}

    return(
        <form onSubmit={handleSubmit}>
            <label> Title: </label>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}></input>

            <label> Price: </label>
            <input type= "number" step=".01" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} ></input>

            <label> Description: </label>
            <input type = "text" name="desc" value={desc} onChange={(e)=>setDesc(e.target.value)}></input>

            <input type="submit"></input>
        </form>
    )
}

export default Form
