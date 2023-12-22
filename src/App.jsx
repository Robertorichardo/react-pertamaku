
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
    <Route path="/"element={<Home />} />
    <Route path="/about"element={<About />} />
    <Route path="/cuaca"element={<Cuaca />} />
    <Route path="/portofolio"element={<Portofolio />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
