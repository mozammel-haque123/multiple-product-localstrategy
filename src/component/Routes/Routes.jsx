import { createBrowserRouter } from "react-router-dom";
import Mainleyaut from "../Mainleyaut/Mainleyaut";
import Homes from "../Homes/Homes";
import Statistics from "../Statistics/Statistics";
import Dashboard from "../Dashboard/Dashboard";
import BtnProduct from "../BtnProduct/BtnProduct";
import Allproduct from "../Allproduct/Allproduct";
import ProductDitails from "../ProductDitails/ProductDitails";
import Carts from "../Carts/Carts";
import Wishlist from "../Wishlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainleyaut,
    loader:()=> fetch('../datalpwm.json'),
    children:[
    {
    path:'/',
    Component: Homes,
    loader:()=> fetch('../btnData.json'),
    children:[
    {
   path:'/',
   Component:Allproduct,
    loader:()=> fetch('../datalpwm.json')
   },

    {
    path:'/btnproduct/:category',
    Component: BtnProduct,
     loader:()=> fetch('../datalpwm.json'),
    }
    ]
    },
    {
    path:'/statistics',
    Component:Statistics,
    },
    {
    path:'/dashboard',
    Component:Dashboard,
    children:[
    {
    index:true,
    Component:Carts
    },
    {
    path:'wishlist',
    Component: Wishlist
    }
    ]
    },
    {
    path:'/productDitails/:id',
    Component:ProductDitails,
    loader:()=> fetch('../datalpwm.json')
  }
    ]
  }
]);

export default router;