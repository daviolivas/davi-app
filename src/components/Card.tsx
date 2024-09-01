import daviProfile from '../assets/davi-profile.jpg'

function Card(){
    return <div className='flex flex-col'>
        <img src={daviProfile} className="rounded-full  h-60" alt="Vite logo" />
        <h1 className=' text-blue-800 font-bold'>Davi Silva Oliveira</h1>
    </div>    
}

export default Card