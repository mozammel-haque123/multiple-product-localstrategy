import { MdAddShoppingCart } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
export default function Navbar({items,locals}) {
  const navigat = useNavigate()
  const location = useLocation()
  const jog = locals.reduce((acc, item) => acc + parseFloat(item.price || 0), 0)

  const praicHisab = ()=>{
    navigat('/dashboard')
  }

  
  return (
    <div className={
  location.pathname === '/dashboard' ||  location.pathname === '/statistics' || location.pathname === '/dashboard/' || location.pathname === '/dashboard/wishlist' || location.pathname.startsWith('/productDitails/')  ? 'bg-white': 'bg-purple-500 text-white rounded-t-lg'}>
     <div className="flex justify-between items-center px-4 py-3">
        <div><h1 className="font-bold text-[20px]">Gadget Heaven</h1></div>
        <div className="flex gap-4">
        <NavLink to={'/'}   className={({ isActive }) => isActive ? "alradiActive" : ""} >Home</NavLink>
        <NavLink to={'/statistics'}   className={({ isActive }) => isActive ? "active" : ""} >Statistics</NavLink>
        <NavLink to={'/dashboard'}   className={({ isActive }) => isActive ? "active" : ""} >Dashboard</NavLink></div>

  <div className="flex gap-3 text-black items-center">
<div className="dropdown dropdown-hover">

 <span className="absolute left-10 bottom-7">  {location.pathname === '/dashboard' || location.pathname.startsWith('/productDitails/')  ? items : ''}</span>

 <span className="absolute left-10 bottom-7 font-bold">{location.pathname === '/dashboard/' && items || locals.pathname === '/dashboard/' && items}</span>

  <div tabIndex={0} role="button" className="bg-white rounded-full py-5 px-3 btn border border-gray-400 text-xl">
    <MdAddShoppingCart />
  </div>
  <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10  p-2 shadow-sm w-[150px] ml-[-60px]">
    <h1 className="text-[15px] font-bold"> {items} Items in Cart</h1>
    <hr />
     <div className="my-2">
      {
        <p className="text-purple-500 font-bold">Price {jog}</p>
      }
      <button onClick={praicHisab} className="btn bg-purple-600 text-white my-4">Dashboard</button>
     </div>
  </div>
</div>


         <div className="bg-white rounded-full">
          
          <div className="dropdown dropdown-hover">

 <span className="absolute left-10 bottom-7 font-bold">  {location.pathname === '/dashboard' || location.pathname.startsWith('/productDitails/') || locals.pathname === '/dashboard/carts' || location.pathname === '/dashboard/wishlist' ? items : ''}</span>
  <div tabIndex={0} role="button" className="bg-white rounded-full py-5 px-3 btn borde border-gray-400 text-xl">
   <GiSelfLove />
  </div>
  <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10  p-2 shadow-sm w-[150px] ml-[-60px]">
    <h1 className="text-[15px] font-bold"> {items} Items in Wishlist</h1>
    <hr />
     <div className="my-2">
      {
        <p className="text-purple-500 font-bold">Price {jog}</p>
      }
      <button onClick={praicHisab} className="btn bg-purple-600 text-white my-4">Dashboard</button>
     </div>
  </div>
</div>
         </div>
        </div>
     </div>
 <div>
 </div>
    </div>
  )
}
