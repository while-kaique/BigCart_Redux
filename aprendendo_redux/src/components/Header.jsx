import { useState } from 'react'

import './Header.css'

const Header = () => {

    const [hamburguer, setHamburguer] = useState('close')
    const [menu, setMenu] = useState('close')

    function toggleMenu(){
        if (hamburguer === 'close'){
            setHamburguer('open')
            setMenu('open')
            return
        }
        setHamburguer('close')
        setMenu('close')
    }


  return (
    <>
        <header>
            <div className="navbar">
                <div className="logo"><a href="/"></a></div>  
                <div className={`hamburguer ${hamburguer}`} onClick={toggleMenu}>
                    <div className={`bar1`}></div>
                    <div className={`bar2`}></div>
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