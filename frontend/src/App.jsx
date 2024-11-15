import { useState } from 'react'
import './App.css'
import { Signin } from './pages/Signin'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Signup} from './pages/Signup'
import { Landing } from './pages/Landing'
import { Headerp } from './components/Headerp'
import { FileUpload } from './components/Fileupload'




function App() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
      <Route path='/demo' element={<Headerp/>}></Route>
      <Route path='/demo2' element={<FileUpload/>}></Route>
      
      
    </Routes>
    </BrowserRouter>

  )
}

export default App


