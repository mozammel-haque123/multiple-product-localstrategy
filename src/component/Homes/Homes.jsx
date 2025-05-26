
import { useLoaderData } from 'react-router-dom';
import Benner from '../Bennar/Benner';
import Bennerpic from './../Bennerpic/Bennerpic';
import BtnFetch from '../BtnFetch/BtnFetch';

export default function Homes() {
  const btnData = useLoaderData() 
  return (
    <div>
    <div className='bg-purple-500 w-11/12 mx-auto'>
        
       <div className="text-white p-[48px] pb-74">
    <Benner hwan='Upgrade Your Tech Accessorize with' htow=' Gadget Heaven Accessories' ptag='Explore the latest gadgets that will take your experience to the next level. From smart devices to' ptagtow='the coolest accessories, we have it all!'></Benner>
            <div className="text-center my-4">
 <button className="btn rounded-full">Shop Now</button>
      </div>
         </div>
         <div className='absolute top-90 left-0 right-0 bottom-0'>
          <div>
            <Bennerpic></Bennerpic>
          </div>
       
         </div>
       </div>
       <BtnFetch btnData={btnData}></BtnFetch>
       </div>
    
  )
}
