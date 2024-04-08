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