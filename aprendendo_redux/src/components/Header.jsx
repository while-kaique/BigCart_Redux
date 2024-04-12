import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './Header.css'
import Product from '../components/Product.jsx'

import { loginUser, logoutUser } from '../redux/user/actions.js'


const Header = () => {
    const [hamburguer, setHamburguer] = useState('close')
    const [menu, setMenu] = useState('close')

    const [cart, setCart] = useState('close')
    const [cartMenu, setCartMenu] = useState('close')

    const {currentUser} = useSelector(rootReducer => rootReducer.userReducer)
    const {products, productsCount, productsTotalPrice} = useSelector(rootReducer => rootReducer.cartReducer)

    const dispatch = useDispatch()

    function toggleMenu(){
        if (hamburguer === 'close'){
            setHamburguer('open')
            setMenu('open')
            return
        }
        setHamburguer('close')
        setMenu('close')
    }

    function openCart(){
        setHamburguer('close')
        setMenu('close')
        setCartMenu('open')
        setCart('open')
    }

    function toggleCart(){
        if (cartMenu === 'open'){
            setCartMenu('close')
            setCart('close')
            return
        }
    }

    function handleLoginClick(){
        dispatch(loginUser())
    }
    function handleLogoutClick(){
        dispatch(logoutUser())
    }


  return (
    
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

        <header>
            <div className="navbar">
                <div className="logo"><a href="/"></a></div>  
                <div className="info">
                    {currentUser ? <div className='login' onClick={handleLogoutClick}>Sair</div> : <div className='login' onClick={handleLoginClick}>Login</div>}
                    <div className="cart" onClick={openCart}>
                        <span className="cart material-symbols-outlined">shopping_cart</span>
                        <div className="count">{productsCount}</div>
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
            <section>
                <div className={`cartMenu ${cartMenu}`}  onClick={toggleCart}></div>
                <div className={`cartP ${cart}`}>
                    <h1>Seu Carrinho</h1>
                    <p>Custo total: R${productsTotalPrice}</p>
                    {products.map((element, idx)=>{
                        const {name, src, value, index} = element
                        return <Product name={name} value={value} src={src} index={index} key={idx}/>
                    })}
                </div>
            </section>
        </header>
        
    </>
  )
}

export default Header