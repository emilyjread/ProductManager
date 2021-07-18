import React from 'react'

const ProductList=(props)=>{
    return(
        <div>
           {props.products.map((product, idx)=>{
               return (
               <div>
                   <p key={idx}>{product.name}, {product.price}, {product.desc}</p>
                   <a href={`/api/products/${product._id}`} >Go </a>
               </div>
               )          
           })}
        </div>
    )

}

export default ProductList