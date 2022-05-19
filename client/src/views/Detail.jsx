import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
const Detail = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=> {
                setProduct(response.data);
            })
            .catch(err=>console.log("Error: ", err))
    }, [])
  return (
    <div>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <Link to={`/api/products/${id}/edit`}>EDIT</Link>
        <br />
        <Link to={"/"}>HOME</Link>
    </div>
  )
}

export default Detail