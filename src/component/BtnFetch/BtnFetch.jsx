import { NavLink, Outlet } from "react-router-dom";


export default function BtnFetch({btnData}) {
  return (
    <div className="mt-[400px] w-11/12 mx-auto">
        <h1 className="text-4xl font-bold text-center my-6">Explore Cutting-Edge Gadgets</h1>
        
        <div className="flex flex-col lg:flex-row gap-18 ">

            <div className="lg:w-2/12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-2xl md:h-[500px]">
            
            <div className="flex md:flex-col flex-wrap justify-center gap-4 py-4 px-6">
                <NavLink to={'/'}   className={({isActive})=> `btn rounded-4xl px-8 ${isActive ? 'activProduct' : ''}` }> All Product </NavLink>
       
              {
            btnData.map((btn)=> <NavLink 
  key={btn.id} 
  to={`/btnproduct/${btn.category}`} 
  className={({ isActive }) => 
    `btn rounded-4xl px-8 ${isActive ? "activProduct" : ""}`
  }
>
  {btn.category}
</NavLink>)
            }   
            </div>
           
            </div>
            <div className="10/12">
            <Outlet></Outlet>
            
            </div>
        </div>

    </div>
  )
}
