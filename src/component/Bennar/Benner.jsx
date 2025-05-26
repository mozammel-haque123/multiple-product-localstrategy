
export default function Benner({hwan,ptag,htow,ptagtow,Dashboard,ptagdasbo,ptagstatic}) {
  return (
    <div>
        <div className=""> 
    <h1 className="text-6xl font-bold text-center">{hwan}</h1>
        <h1 className="text-6xl font-bold text-center">{htow}</h1>  
        </div>
       
       <div className="text-center px-2 my-6">
     <p>{ptag}</p>
     <p>{ptagtow}</p>
       </div>

       <div>
        <h1 className="text-2xl font-bold">{Dashboard}</h1>
        <p>{ptagdasbo}</p>
        <p>{ptagstatic}</p>

       </div>
    </div>
  )
}
