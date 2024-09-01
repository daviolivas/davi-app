import './index.css'
import Card from './components/Card'
import WhoIAm from './components/WhoIAm'

function App() {
  return <>
    <div className='flex items-center justify-center gap-5 bg-slate-700 h-screen'>
      <Card></Card>
      <WhoIAm></WhoIAm>
    </div>
  </>
}

export default App
