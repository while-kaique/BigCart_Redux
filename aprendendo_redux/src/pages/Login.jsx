
import './styles_pages/Login.css'
import './media_queries_pages/Login.css'

import {Link, Navigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {Provider} from 'react-redux'
import store from '../redux/store'

import Footer from '../components/Footer'

import { loginUser } from '../redux/user/actions'

const Login = () => {

  useEffect(()=>{document.title = 'Entrar'},[])

  const dispatch = useDispatch()
  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer)
  console.log(currentUser)

  const [users, setUsers] = useState([])
  const [isDone, setIsDone] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    fetch('https://bigcart-ecommerce-8952.onrender.com/login',{
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      setUsers(data)
      return
    })
  }, [])

  function handleSubmit(e){
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    console.log(email, password)

    const isUser = users.some((user)=>{
      return user.email === email && user.password === password
    })


    if (isUser){
      console.log('Deu certo!!!')
      dispatch(loginUser(users.find(user => user.email === email && user.password === password)))
      console.log(currentUser)
      setIsDone(true)
    } else {
      setError(true)
      console.log(error)
    }
  }
    
  return (
    <Provider store={store}>
    <>
      <div className='ctAcc'>
      <Link className='logo2' to={'/'}>
        <div className="logo2"></div>
      </Link>

      <form onSubmit={handleSubmit} id='login'>
      <h1>Login</h1>
      {error && <p className="error">Algo deu errado, verifique se as informações estão corretas.</p>}
          <div className="login">
            <div className="camp email">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/>
            </div>
            <div className="camp password">
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password" />
            </div>
            <Link to="/register">
              <p className='register'>Novo por aqui? Crie sua conta BigCart</p>
            </Link>

            {
              isDone ? 
              <Navigate to={'/'}/> :
              <button type='submit'>Entrar</button>
            }
          </div>
          
      </form>

      <Footer></Footer>
      </div>
      </>
    </Provider>
  )
}

export default Login