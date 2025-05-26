import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import BtnProductData from "../BtnProductData/BtnProductData";

export default function BtnProduct() {
    const [product , setProduct] = useState([])
    const allData = useLoaderData()
    const {category} = useParams();

    useEffect(()=>{
   const AlldataFilter = allData.filter((data)=>data.category === category)
   setProduct(AlldataFilter)
    },[allData, category])
 console.log(product)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
        product.map((producs)=>(<BtnProductData key={producs.product_id} product={producs}></BtnProductData>))
     
    }
  
    </div>
  )
}
