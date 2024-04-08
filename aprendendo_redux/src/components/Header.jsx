import { useState } from 'react'
import { Link } from 'react-router-dom'

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

    function toggleCart(){
        alert('Clicou Carrinho!')
    }


  return (
    
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <header>
            <div className="navbar">
                <div className="logo"><a href="/"></a></div>  
                <div className="info">
                    <div className="cart" onClick={toggleCart}>
                        <span className="cart material-symbols-outlined">shopping_cart</span>
                        <div className="count">0</div>
                        <p>Carrinho</p>
                    </div>
                    <div className={`hamburguer ${hamburguer}`} onClick={toggleMenu}>
                        <div className={`bar1`}></div>
                        <div className={`bar2`}></div>
                    </div>
                </div>
                
            </div>

            
            <ul className={`menu ${menu}`}>
                    <Link to={'/'}>
                        <li>Home</li>
                        <div className="line"></div>
                    </Link>
                    <Link to={'/'}>
                        <li>Produtos</li>
                        <div className="line"></div>
                    </Link>
                    <Link to={'/'}>
                        <li>Carrinho</li>
                        <div className="line"></div>
                    </Link>
                    <Link to={'/'}>
                        <li>Contatos</li>
                        <div className="line last"></div>
                    </Link>
            </ul>
        </header>
        
    </>
  )
}

export default Header