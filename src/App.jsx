import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import  Home  from './components/Home'
import Profile from './components/Profile'
import Loing from './components/Loing'

export default function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/Loing'element={<Loing/>}/>
      <Route path='/Profile'element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
