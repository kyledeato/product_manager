import React, {useEffect, useState} from "react";
import ProductForm from '../components/ProductForm'
import axios from "axios";
import ProductList from "../components/ProductList";

const Main = () => {
  const [products, setProduct] = useState([])
  

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
        .then(res=>{
          setProduct(res.data);
          
        })
        .catch(err=>console.log("Error: ", err))
},[])



  const removeFromDom = productId => {
    setProduct(products.filter(product=> product._id !== productId))
  }

  const createProduct = product => {
    axios.post("http://localhost:8000/api/products", product)
    .then(res=>{
      console.log("Response", res);
      setProduct([...products,res.data])
     
    })
    .catch(err=>console.log("Error: ", err))

      
  }
  return (
    <div>
        <h1>Product Manager</h1>
        <ProductForm  onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
        <ProductList products={products} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default Main