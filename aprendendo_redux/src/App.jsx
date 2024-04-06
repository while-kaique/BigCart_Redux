import { Link } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {
  return (
    <>
      <Header />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/product/1'>Produto de Teste</Link>
        <Link to='/register'>Register</Link>
      </nav>
      <Footer />
      
    </>
  )
}

export default App
