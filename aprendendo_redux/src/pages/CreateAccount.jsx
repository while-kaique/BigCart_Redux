import { useEffect } from 'react'
import './CreateAccount.css'
import Footer from '../components/Footer'

const CreateAccount = () => {
  
  useEffect(()=>{document.title = 'Criar Conta'},[])

  function handleSubmit(e){
    e.preventDefault()
    console.log('submit')
  }

  return (

    <div className='ctAcc'>
      <div className="logo2"></div>

    <form onSubmit={handleSubmit}>
      <h1>Criar Conta</h1>

      <div className="user">
        <div className="camp username">
          <label htmlFor="name">Seu Nome</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="camp email">
          <label htmlFor="email">Número de Celular ou Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="camp password">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" placeholder='Pelo menos 6 caracteres' />
        </div>
        <div className="camp password2">
          <label htmlFor="password">Insira a senha mais uma vez</label>
          <input type="password" name="password2" id="password2"/>
        </div>

        <button type='submit'>Criar Conta</button>
      </div>
    </form>
      
      <Footer />
    </div>
  )
}

export default CreateAccount