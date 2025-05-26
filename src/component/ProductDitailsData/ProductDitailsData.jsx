import { MdAddShoppingCart } from "react-icons/md";
import { addProduct } from "../Utilis/Utilitys";
import { GiSelfLove } from "react-icons/gi";
import { useContext, useState } from "react";
import { Nav } from "../Mainleyaut/Mainleyaut";
import { NavLink } from "react-router-dom";


export default function ProductDitailsData({product,id}) {
const [isCartClicked, setIsCartClicked] = useState(false);


     const {product_title,product_image,category,price,description,specification,rating} = product

        const specArray = Array.isArray(specification)
    ? specification
    : typeof specification === "string"
      ? specification.split(',').map(item => item.trim())
      : [];

      const {setData} = useContext(Nav)
      const bookMarkHandleCards = (product)=>{
        addProduct(product)
        setData(id)
        setIsCartClicked(true);
      }
      const bookMarkHandleWishlist = (product)=>{
        addProduct(product)
        setData(id)
        setIsCartClicked(true);
      }

  


  return (
     <div className="w-11/12 mx-auto absolute top-55 left-0 right-0 bottom-0">
       <div className="bg-base-200 w-10/12 mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-4xl">
  <div className="flex flex-col lg:flex-row justify-between rounded-lg p-4 bg-white gap-4">
   <div className="md:w-6/12 w-full">
     <img
      src={product_image}
      className="w-full h-full rounded-lg shadow-2xl"
    />
   </div>
    <div className="w-6/12">
      <h1 className="text-3xl font-bold">{product_title} {category}</h1>
      <h3 className="font-semibold text-[20px] text-gray-600 my-3">price: ${price}</h3>
      <button className="btn bg-emerald-50 text-emerald-600 border border-emerald-600">in Stock</button>
     <p className="text-gray-500 my-2">{description}</p>
    <h3 className="font-bold text-[18px]">Specification:</h3>
    
    <div className="my-3 text-gray-700">
        {
    specArray.map((spe,idx)=> <li className="list-decimal font-normal text-[18px]" key={idx}>{spe}</li>)
        }
    </div>

    <p className="font-bold text-[18px]">Rating:</p>

<div className="flex items-center gap-4 my-3">
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
  <button className="bg-gray-100 btn rounded-full">{rating}</button>
</div>

<div className="flex gap-4">
<button onClick={()=>bookMarkHandleCards(product)}  disabled={isCartClicked}  className={ `btn bg-purple-600`}><span className="text-white">Add To Card </span> <span className="text-white"><MdAddShoppingCart />
</span></button>
<button  onClick={()=>bookMarkHandleWishlist(product)}
 disabled={isCartClicked}
className="bg-white btn border border-gray-300 rounded-full"><span><GiSelfLove /></span></button>
</div>
   

    </div>
  </div>
</div>
    </div>
  )
}
