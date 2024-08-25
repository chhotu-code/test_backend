import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import Cards from './components/Cards';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="m-5">
      <div className='d-flex flex-wrap'>
          
          <Cards/>
      </div>

    </div>
    </>
  )
}

export default App
