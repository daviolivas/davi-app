import daviProfile from '../assets/davi-profile.jpg'
import instagramLogo from '../assets/instagram-black-logo.png'
import linkedinLogo from '../assets/linkedin-black-logo.png'
import xLogo from '../assets/x-black-logo.png'
import githubLogo from '../assets/github-black-logo.png'

function Card(){
    return <>
        <div className='flex flex-col rounded items-center shadow-gray-400 shadow-lg h-min bg-gradient-to-tr from-slate-600 to-slate-500'>

            <div className='p-14'>
                <img src={daviProfile} className="rounded-full h-48" alt="Vite logo" />

                <div className='flex flex-col w-full gap-2 mt-5 items-center'>
                    <h1 className=' text-slate-100 text-xl font-bold'>Davi Oliveira</h1>
                    <div className=' bg-slate-100 h-px rounded-full w-36'/>
                    <p className='text-slate-100 text-center w-48'>Estudante de Ciência da Computação</p>                
                </div>
            </div>

            <div className='flex gap-5 items-center justify-center bg-white rounded-b h-8 w-full'>
                <a href='https://linkedin.com/in/davisilvaoliveira' target='_blanket'>
                    <img src={linkedinLogo} className='h-6'/>
                </a>
                <a href='https://github.com/daviolivas' target='_blanket'>
                    <img src={githubLogo} className='h-5'/> 
                </a>
                <a href='https://instagram.com/daviolivas' target='_blanket'>
                    <img src={instagramLogo} className='h-6'/>
                </a>
                <a href='https://x.com/daviolivas' target='_blanket'>
                    <img src={xLogo} className='h-4'/>
                </a>
            </div>
        </div>
    </>
}

export default Card