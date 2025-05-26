import { storegHendale } from '../Utilis/Utilitys'
import { TiDeleteOutline } from "react-icons/ti";
import { Nav } from '../Mainleyaut/Mainleyaut';
import { useEffect, useState, useContext } from 'react';
import { Sort } from './../Dashboard/Dashboard';
import toast from 'react-hot-toast';

export default function Carts() {

  const sort = useContext(Sort)
  const {updateLocal} = useContext(Nav)
      const [local, setLocal] = useState([])
      
    useEffect(() => {
  if (sort.length > 0) {
    setLocal(sort);
  } else {
    const storegLocal = storegHendale();
    setLocal(storegLocal);
  }
}, [sort]);

     const deletLocalCards = (productId) => {
      const updatedList = local.filter(item => item.product_id !== productId);
      localStorage.setItem('product', JSON.stringify(updatedList));
    
      setLocal(updatedList);
      updateLocal()
      toast.success('Product deleted successfully!')
    };
    
  return (
   <div className='w-11/12 mx-auto'>
        {
        local.map((data,idx)=> <div key={idx} className="rounded-2xl bg-base-200 my-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
  <div className="flex flex-col lg:flex-row items-center justify-between p-6 gap-[100px]">

    <div className='flex items-center gap-8'>
    <div className=''>
       <img
      src={data.product_image}
      className=" rounded-lg shadow-2xl w-[180px] h-[100px] object-cover"
    />
    </div>
 
    <div>
      <h1 className="text-2xl font-bold">{data.product_title} {data.category}</h1>
      <p className="my-2 font-normal text-[18px] text-gray-500">{data.specification}</p>
    
    <h1 className='font-bold text-[20px] text-gray-600'>Price: {data.price}</h1>

    </div>
    </div>

    <div>
  
    <button onClick={()=>deletLocalCards(data.product_id)} className='btn'><span className='text-3xl text-orange-600 '><TiDeleteOutline /></span></button>
    </div>
    
  </div>
</div>)
        }
      </div>
  )
}
