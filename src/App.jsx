import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <body>
    <Header/>
    <Outlet />
    <Footer />
    </body >
  )
}

export default App