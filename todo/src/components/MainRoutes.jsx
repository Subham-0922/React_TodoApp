import React from 'react'
import Box from './Box'
import TodoHead from './TodoHead'
import {Routes,Route} from "react-router-dom"

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Box/>}/>
        <Route path='/todo' element={<TodoHead/>}/>
    </Routes>
  )
}

export default MainRoutes