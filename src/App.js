import React from 'react'
import Homes from './pages/Homes'
import Create from './pages/Create'
import Update from './pages/Update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homes/>} ></Route>
            <Route path='/create' element={<Create />} ></Route>
            <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App