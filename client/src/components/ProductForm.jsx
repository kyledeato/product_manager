import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = (props) => {
  const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

const handleSubmit = e =>{
    e.preventDefault();
    onSubmitProp({title, price, description})
    }
  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="">Title:</label>
            <input type="text" name="" id="" value={title} onChange={e=>setTitle(e.target.value)}/>
        </p>
        <p>
            <label htmlFor="">Price:</label>
            <input type="text" name="" id="" value={price} onChange={e=>setPrice(e.target.value)}/>
        </p>
        <p>
            <label htmlFor="">Description:</label>
            <input type="text" name="" id="" value={description} onChange={e=>setDescription(e.target.value)}/>
        </p>
        <button type="submit">Submit</button>
    </form>
  )
}

export default ProductForm