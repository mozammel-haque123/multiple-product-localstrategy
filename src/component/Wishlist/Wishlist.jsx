import { storegHendale } from '../Utilis/Utilitys'
import { TiDeleteOutline } from "react-icons/ti";
import { Nav } from '../Mainleyaut/Mainleyaut';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';

export default function Wishlist() {
      const [local, setLocal] = useState([])
      const {updateLocal} = useContext(Nav)
    
      useEffect(()=>{
       const storegLocal = storegHendale()
       setLocal(storegLocal)
       
      },[])
    
     const deletLocalWishlist = (productId) => {
      const updatedList = local.filter(item => item.product_id !== productId);
      localStorage.setItem('product', JSON.stringify(updatedList));
    
      setLocal(updatedList);
      updateLocal()
      toast.success('Product deleted successfully!')
     }

  return (
    <div className='w-11/12 mx-auto'>
            {
            local.map((data,idx)=> <div key={idx} className=" bg-base-200 my-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex flex-col lg:flex-row items-center p-6 gap-[100px]">
        <img
          src={data.product_image}
          className=" rounded-lg shadow-2xl h-[300px]"
        />
        <div>
          <h1 className="text-5xl font-bold">{data.product_title}</h1>
          <p className="my-2">{data.specification}</p>
        
        <h1>{data.price}</h1>
    
        <button onClick={()=>deletLocalWishlist(data.product_id)} className='btn'><span className='text-3xl text-orange-600 '><TiDeleteOutline /></span></button>
        </div>
      </div>
    </div>)
            }
          </div>
  )
}
