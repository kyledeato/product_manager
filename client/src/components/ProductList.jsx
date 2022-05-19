import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';
const ProductList = (props) => {
    
  return (
    <table>
        <thead>
           <tr>
               <th>Title</th>
           </tr>
        </thead>
        <tbody>
        {props.products.map((product,index)=>{
            return(
                <tr key={index}>
                <td><Link to={"/api/products/"+product._id}>{product.title}</Link></td>
                <td><DeleteButton productId={product._id} successCallback={props.removeFromDom}/></td>
            </tr>
            )
        })}
        </tbody>
    </table>
  )
}

export default ProductList