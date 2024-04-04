import { Link } from "react-router-dom"
import Footer from "./components/Footer"


function App() {
  return (
    <>

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
