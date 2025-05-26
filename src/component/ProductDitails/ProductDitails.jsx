import { useLoaderData, useParams } from "react-router-dom"
import Benner from "../Bennar/Benner"
import { useEffect, useState } from "react"
import ProductDitailsData from "../ProductDitailsData/ProductDitailsData"


export default function ProductDitails() {
    const {id} = useParams()
    const[ ditails, setDitails] = useState([])
    const ditailsId = useLoaderData()
   useEffect(()=>{
    const detailsFind = ditailsId.find((fin)=>fin.product_id === id)
    setDitails(detailsFind)
   },[ditailsId, id])
   
  return (
    <div className="">
       <div className=' bg-purple-500 flex flex-col justify-center items-center text-center gap-4 text-white p-4 pb-[200px]'>
      <Benner Dashboard='Product Details' ptagdasbo='Explore the latest gadgets that will take your experience' ptagstatic='to the next level. From smart devices to the coolest accessories, we have it all!'></Benner>
    <div>
       </div>
     </div>


    <div className="">
      {
     <ProductDitailsData product={ditails} id={id}></ProductDitailsData>
                     
      }                 
    </div>



    </div>
  )
}
