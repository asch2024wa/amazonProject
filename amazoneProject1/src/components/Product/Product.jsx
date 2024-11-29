
import React,{useState,useEffect} from 'react'
import classes from "./product.module.css"
import axios from "axios"
import ProductCard from './ProductCard';
function Product() {
    const [product,setProduct]=useState([]);
  useEffect(()=>{ axios.get('https://fakestoreapi.com/products').then((res)=>{setProduct(res.data)}).catch((err)=>(console.log(err)))

  },[])

  return (
    <div className={classes.product_container}>
      {product.map((singleProduct,i)=>(<ProductCard key={i} product={singleProduct}/>))}
       </div>
  )
}

export default Product
