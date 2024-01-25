import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home.jsx'
import Store from './components/Store/Store.jsx'
import Iphone from './components/Iphone/Iphone.jsx'
import AppStore from './components/AppStore/AppStore.jsx'
import TV from './components/TV/Tv.jsx'
import Accessories from './components/Accessories/Accessories.jsx'
import Support from './components/Support/Support.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/store' element={<Store />} />
      <Route path='/iphone' element={<Iphone />} />
      <Route path='/app-store' element={<AppStore />} />
      <Route path='/tv' element={<TV />} />
      <Route path='/accessories' element={<Accessories />} />
      <Route path='/support' element={<Support />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
