import axios from 'axios';
import React from 'react'

const DeleteButton = ({productId, successCallback}) => {
                    // use deconstructing ^^
    //or 
    // const {productId, successCallback} = props
   

    const deleteProduct = e => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res=>{
                successCallback(productId);
                
            })
    }
  return (
   <button onClick={deleteProduct}>
       Delete
   </button>
  )
}

export default DeleteButton