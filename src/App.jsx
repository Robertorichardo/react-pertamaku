
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Peges/Home'
import About from './Peges/About'
import Cuaca from './Peges/Cuaca'
import Portofolio from './Peges/Portofolio'

function App() {
  

  return (   
   <BrowserRouter>
   <Routes>
    <Route path="/react-pertamaku/"element={<Home />} />
    <Route path="/react-pertamaku/"element={<About />} />
    <Route path="/react-pertamaku/"element={<Cuaca />} />
    <Route path="/react-pertamaku/"element={<Portofolio />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
