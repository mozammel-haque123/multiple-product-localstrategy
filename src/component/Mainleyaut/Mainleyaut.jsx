
import { Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import { storegHendale } from "../Utilis/Utilitys";
import Footer from "../Footer/Footer";
export const Nav = createContext();

export default function Mainleyaut() {
const [data, setData] = useState(0)
const [card,setCard] = useState(null)
const [item, setItem] = useState(0)
const [local ,setLocal] = useState([])
  // const loderNav = useLoaderData()
useEffect(() => {
  const locacalAllDAta = storegHendale()

  const dataPraice = locacalAllDAta.filter((fin) => fin.product_id === data)
  setCard(dataPraice)
  setLocal(locacalAllDAta)

  setItem(locacalAllDAta.length) // ✅ এখানেই সব গুনে ফেলুন
}, [data])



 const updateLocal = () => {
  const newLocalData = storegHendale()
  setLocal(newLocalData)
  setItem(newLocalData.length)
}

  return (
    <div>
  
        <Nav.Provider value={{setData,data,updateLocal}}>
        <div  className="w-11/12 mx-auto">
    
    <Navbar cards={card} items={item} locals={local}></Navbar>  
        </div>
       <Outlet></Outlet>
        </Nav.Provider>

        <Footer></Footer>
    </div>
  )
}
