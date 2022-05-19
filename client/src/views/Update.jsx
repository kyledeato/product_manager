import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");
    const { id } = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                setProduct(res.data)
            })
    },[])

    const handleUpdate = product =>{
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then(res=>navigate('/'))
            .catch(err=>console.log(err))
    }

  return (
    <div>
        <h1>Update a Product</h1>
        {/* if product is loaded show form (form was being loaded before axios)*/}
        {product && 
        <>
        <ProductForm onSubmitProp={handleUpdate} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}/>
        <DeleteButton productId={product._id} successCallback={()=> navigate('/')}/>
        </>
        }
        
    </div>
  )
}

export default Update