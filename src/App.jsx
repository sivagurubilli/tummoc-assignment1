import { useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from "axios"
import './App.css'
import AllRoutes from './Components/AllRoutes'
axios.defaults.baseURL ="http://localhost:2000"



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
     
       
     <AllRoutes />
   
    </div>
  )
}

export default App
