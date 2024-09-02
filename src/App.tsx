import './index.css'
import Card from './components/Card'
import WhoIAm from './components/WhoIAm'

function App() {
  return <>
    <div className='flex flex-col items-center min-h-screen bg-gradient-to-bl from-white bg-slate-200 justify-center'>
      <div className='flex flex-col lg:flex-row gap-16 mt-7 mb-7 grow justify-center items-center'>
        <Card></Card>
        <WhoIAm></WhoIAm>
      </div>      
      {/* <Footer></Footer> */}
    </div>
  </>
}

export default App
