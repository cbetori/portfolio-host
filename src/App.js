import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SideNav from './components/SideNav'
import Content from './components/Content'
import './styles/app.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className='portfolio-wrapper'>
        <SideNav />
        <Content />
      </div>
    </BrowserRouter>
  )
}

export default App
