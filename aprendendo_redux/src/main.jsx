import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateAccount from '../src/pages/CreateAccount.jsx'
import Home from '../src/pages/Home.jsx'
import Product from '../src/pages/Product.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/register" element={<CreateAccount />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
