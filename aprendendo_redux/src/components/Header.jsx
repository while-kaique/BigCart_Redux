
import { useState } from 'react'
import './Header.css'

const Header = () => {

    const [bar, setBar] = useState('initial')
    const [menu, setMenu] = useState('close')

    const toggleAnimationBar = () => {
        if (bar ==='open'){
            setBar('close')
            setMenu('close')
            return
        }
        setBar('open')
        setMenu('open')
    }



  return (
    <>
        <header>
            <div className="navbar">
                <div className="logo"><a href="/"></a></div>
                <div className="hamburguer" onClick={toggleAnimationBar}>
                    <div className={`bar1 ${bar}`}></div>
                    <div className={`bar2 ${bar}`}></div>
                </div>
            </div>

            
            <ul className={`menu ${menu}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Produtos</a></li>
                    <li><a href="#">Carrinho</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
        </header>
        
    </>
  )
}

export default Header