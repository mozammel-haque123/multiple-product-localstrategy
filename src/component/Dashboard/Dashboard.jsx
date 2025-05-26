import { createContext, useContext, useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import icontsort from '../../assets/icon.png'
import Benner from '../Bennar/Benner'
import { removeAlldata, storegHendale } from '../Utilis/Utilitys'
import modalpic from '../../assets/group.png'
import { Nav } from '../Mainleyaut/Mainleyaut'
// import { TiDeleteOutline } from "react-icons/ti";
export const Sort = createContext()

export default function Dashboard() {
  const [local, setLocal] = useState([])
  const [price, setPrice] = useState(0)
  const [sort, setSort] = useState([])
  const {updateLocal} = useContext(Nav)
  const nabigat = useNavigate()
  const navigatHandle = ()=>{
    nabigat('/')
    removeAlldata()
      updateLocal()
  }

   useEffect(() => {
    const total = local.reduce((acc, item) => acc + parseFloat(item.price || 0), 0)
    setPrice(total)
  }, [local])

  useEffect(()=>{
   const storegLocal = storegHendale()
   setLocal(storegLocal)
   
  },[])



  const  handleSortPrice = (price)=>{
   if(price ==='sortPrice'){
     const rating = [...local].sort((a, b) => a.price - b.price)
     setSort(rating)
     console.log(rating)
   }
  }

//  const deletLocal = (productId) => {
//   // const updatedList = local.filter(item => item.product_id !== productId);
//   localStorage.setItem('product', JSON.stringify(updatedList));

//   setLocal(updatedList);
//   alert('Product deleted successfully!');
// };



  return (
      <div className=''>
        <div className=' bg-purple-500 flex flex-col justify-center items-center text-center gap-4 text-white p-4'>
      <Benner Dashboard='Dashboard' ptagdasbo='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></Benner>
      <div>
     
   
        <NavLink to={'/dashboard/'}> <button className='btn mr-2'>Cart</button></NavLink>
        <NavLink to={'wishlist'}> <button className='btn'>Wishlist</button></NavLink>
      </div>
        </div>

      <div className='flex justify-between items-center gap-4 w-11/12 mx-auto my-6'>
    <h1 className='text-1xl font-bold'>Total cost : {price}</h1>
    
    <div className='flex items-center gap-2'>

    <button onClick={()=> handleSortPrice('sortPrice')} href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
    <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
    <span className="relative px-6 py-3 transition-all ease-out bg-white btn rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-black"> Sort by Price</span>
        <span><img className='w-4' src={icontsort} alt="" /></span>
    </span>

</button>

<button onClick={()=>document.getElementById('my_modal_5').showModal()}  href="#_" className="px-10 py-3 font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
    Purchase
</button>
    </div>
       </div>


<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box text-center flex flex-col justify-center items-center">
    <img src={modalpic} alt="modal pic" />
    <h3 className="font-bold text-lg mt-2">Payment Successfully</h3>
    <p className="py-4">Thanks for purchasing.
Total: {price}</p>
    <div className="modal-action">
      <form method="dialog" className='block w-full'>
        {/* if there is a button in form, it will close the modal */}
        <button onClick={navigatHandle} className="btn w-[350px] rounded-full bg-gray-200">Close</button>
      </form>
    </div>
  </div>
</dialog>


       <Sort.Provider value={sort}>
       <Outlet></Outlet>
       </Sort.Provider>

{/* 


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

    <button onClick={()=>deletLocal(data.product_id)} className='btn'><span className='text-3xl text-orange-600 '><TiDeleteOutline /></span></button>
    </div>
  </div>
</div>)
        }
      </div> */}
    </div>
  )
}

