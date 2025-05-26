import { useLoaderData } from "react-router-dom"
import AllproductData from "../AllproductData/AllproductData"

export default function Allproduct() {
    const allProduct = useLoaderData()
  return (
    <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
        allProduct.map((producs)=>(<AllproductData key={producs.product_id} product={producs}></AllproductData>))
             
            }
          
            </div>

    </div>
  )
}
