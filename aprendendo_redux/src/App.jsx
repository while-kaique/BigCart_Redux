import { Outlet } from 'react-router-dom'

import Footer from "./components/Footer"
import Header from "./components/Header"


import {Provider} from 'react-redux'
import store from './redux/store.js'


function App() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer /> 
    </>
  )
}

export default App
