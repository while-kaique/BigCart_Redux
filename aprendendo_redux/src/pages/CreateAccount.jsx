import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import './styles_pages/CreateAccount.css'
import './media_queries_pages/CreateAccount.css'

import Footer from '../components/Footer'

const CreateAccount = () => {

  const [canName, setCanName] = useState(true)
  const [canEmail, setCanEmail] = useState(true)
  const [canPassword, setCanPassword] = useState(true)
  const [canPassword2, setCanPassword2] = useState(true)

  const [canPass, setCanPass] = useState(false)
  
  useEffect(()=>{document.title = 'Criar Conta'},[])

  function verifyName(name){
    if (name.length <= 0) {
      setCanName(false)
      return false
    }
    console.log('name passou')
    setCanName(true)
    return true
  }
  function verifyEmail(email){
    // TESTE DE TIPO (email / número)
    if (email.indexOf('@') > -1 && email.indexOf('.com') > -1 && email.length >= 14){
      setCanEmail(true)
      console.log('email passou')
      return true
    } else {
      setCanEmail(false)
      return false;
    }

  }
  function verifyPassword(password){
    var rules = [{
        exp: /[0-9]/
      }, {
        exp: /[a-z]/
      }, {
        exp: /^.{6,16}$/
      }];

    var pass = true
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (!rule.exp.test(password)) {
        setCanPassword(false)
        pass = false
        break
      }
    }
    console.log('password1 passou')
    return pass
  }


  function verifyPassword2(password,password2){
    if (password === password2){ 
      setCanPassword2(true)
      console.log('password2 passou')
      return true
    } else {
      setCanPassword2(false)
      console.log(canPassword2)
      return false
    }
  }




  function handleSubmit(e){
    e.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const password2 = document.querySelector('#password2').value
    console.log([name, email, password, password2])

    const nameStep = verifyName(name)
    const emailStep = verifyEmail(email)
    const passwordStep = verifyPassword(password)
    const password2Step = verifyPassword2(password, password2)

    console.log(nameStep&&emailStep&&passwordStep&&password2Step)

    var userObj;
    if (nameStep&&emailStep&&passwordStep&&password2Step){

      userObj = {name, email, password}
      
      fetch('https://bigcart-ecommerce-8952.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
      })

      setCanPass(true)
    }
    }

  return (

    <div className='ctAcc'>
      <Link to={'/'}>
        <div className="logo2"></div>
      </Link>

    <form onSubmit={handleSubmit}>
    {!canPass && <h1>Criar Conta</h1>}
      {!canPass ?
        <div className="user">
          <div className="camp username">
            <label htmlFor="name">Seu Nome</label>
            <input type="text" name="name" id="name"/>
            {!canName && <p>Seu nome precisa conter ao menos um caractere!</p>}
          </div>
          <div className="camp email">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"/>
            {!canEmail && <p>Adicione um email válido!</p>}
          </div>
          <div className="camp password">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" placeholder='Pelo menos 6 caracteres e um número' />
            {!canPassword && <p>Sua senha deve conter entre 6-12 caracteres e ao menos uma letra!</p>}
          </div>
          <div className="camp password2">
            <label htmlFor="password">Insira a senha mais uma vez</label>
            <input type="password" name="password2" id="password2"/>
            {!canPassword2 && <p>Sua senha deve idêntica a anterior!</p>}
            
            <Link to="/login">
              <p className='register'>Já possuo uma conta na BigCart</p>
            </Link>
          </div>

          <button type='submit' onSubmit={handleSubmit}>Criar Conta</button>
        </div>
        :
        <div className="final">
          <h1>Conta criada com sucesso!</h1>
          <p>Faça login para entrar em sua conta agora mesmo.</p>
          <Link to={'/'} >
            <p id='back'>Voltar à tela inicial</p>
          </Link>
        </div>
        }
    </form>
      
      <Footer />
    </div>
  )
}

export default CreateAccount