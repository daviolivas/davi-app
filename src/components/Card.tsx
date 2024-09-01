import daviProfile from '../assets/davi-profile.jpg'

function Card(){
    return <>
        <div className='flex flex-col rounded items-center shadow-gray-800 shadow-lg h-min bg-gradient-to-tr from-slate-600 to-slate-500'>

            <div className='p-14'>
                <img src={daviProfile} className="rounded-full h-48" alt="Vite logo" />

                <div className='flex flex-col w-full gap-2 mt-5 items-center'>
                    <h1 className='text-black text-xl font-bold'>Davi Oliveira</h1>
                    <div className=' bg-white h-px rounded-full w-28'/>
                    <p className=''>JOVEM APRENDIZ</p>                
                </div>
            </div>

            <div className='bg-white rounded-b h-8 w-full'>
                LinkedIn
            </div>
        </div>
    </>
}

export default Card