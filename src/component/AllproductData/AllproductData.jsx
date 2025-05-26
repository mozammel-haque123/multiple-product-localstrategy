import { useNavigate } from "react-router-dom"


export default function AllproductData({product}) {
  const navigate = useNavigate()
   const productDataDitails = () => {
    navigate(`/productDitails/${product.product_id}`);
  };
        const {product_title,product_image,price} = product
  return (
      <div>
        <div className="card bg-base-100 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
  <figure>
    <img className="md:w-[282px] md:h-[200px] w-full h-[300px] rounded-lg"
      src={product_image}
      alt="Shoes" />
  </figure>
  <div className="">
    <h2 className="card-title my-1">{product_title}</h2>
    <p>Price: {price}k</p>
    <div className="card-actions">

<button onClick={productDataDitails}
  className="group inline-block rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden my-2"
  href="#"
>
  <span className="block rounded-xs bg-white px-6 py-2 text-[18px] smgroup-hover:bg-transparent text-purple-700 font-black">
    View Details
  </span>
</button>




    </div>
  </div>
</div>
    </div>
  )
}
