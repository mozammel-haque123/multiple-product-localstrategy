import bennerpic from '../../assets/banner.jpg'

export default function Bennerpic() {
  return (
    <div className='lg:my-10 flex justify-center items-center mt-[400px] md:mt-[300px]'>  
    <div className='border-2 border-white rounded-lg w-[400px] h-[300px] lg:w-[840px] lg:h-[540px] flex justify-center items-center backdrop-blur-xl bg-white/30 bg-opacity-10'>  
           <div
      className='lg:w-[800px] lg:h-[500px] w-[340px] h-[250px] bg-cover bg-center rounded-xl '
      style={{ backgroundImage: `url(${bennerpic})` }}
    >
    </div>
        </div> 
   
    </div>

  )
}

