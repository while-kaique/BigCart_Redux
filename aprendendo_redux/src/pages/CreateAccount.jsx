import { useEffect, useState } from 'react'
import './CreateAccount.css'
import Footer from '../components/Footer'

const CreateAccount = () => {

  const [canName, setCanName] = useState(true)
  const [canEmailNum, setCanEmailNum] = useState(true)
  const [canPassword, setCanPassword] = useState(true)
  const [canPassword2, setCanPassword2] = useState(true)

  const [canPass, setCanPass] = useState(false)
  
  useEffect(()=>{document.title = 'Criar Conta'},[])

  function verifyName(name){
    if (name.length <= 0) {
      setCanName(false)
      return false
    }
    return true
  }
  function verifyEmailNum(email){
    // TESTE DE TIPO (email / número)
    var isNumber = true;
    if (email.indexOf('@') > -1 && email.indexOf('.com') > -1 && email.length >= 14){
      isNumber = false
    } else if (!isNaN(email) && email.length == 8) {
      isNumber = true
    } else {
      setCanEmailNum(false)
      return false;
    }

    return {verify: true, isNumber}
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
  return pass
  }
  function verifyPassword2(password,password2){
    if (password === password2){ 
      return true
    } else {
      setCanPassword2(false)
      return false
    }
  }




  function handleSubmit(e){
    e.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector('#emailNum').value
    const password = document.querySelector('#password').value
    const password2 = document.querySelector('#password2').value

    const nameStep = verifyName(name)

    const emailNumStep = verifyEmailNum(email)

    const passwordStep = verifyPassword(password)

    const password2Step = verifyPassword2(password, password2)

    if (nameStep&&emailNumStep.verify&&passwordStep&&password2Step){
      console.log('opa')
      setCanPass(true)
    }

  }

  return (

    <div className='ctAcc'>
      <div className="logo2"></div>

    <form onSubmit={handleSubmit}>
      <h1>Criar Conta</h1>
      {!canPass &&
        <div className="user">
          <div className="camp username">
            <label htmlFor="name">Seu Nome</label>
            <input type="text" name="name" id="name"/>
            {!canName && <p>Seu nome precisa conter ao menos um caractere!</p>}
          </div>
          <div className="camp email">
            <label htmlFor="email">Número de Celular ou Email</label>
            <input type="text" name="emailNum" id="emailNum"/>
            {!canEmailNum && <p>Adicione um número/email válido!</p>}
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
          </div>

          <button type='submit' onSubmit={handleSubmit}>Criar Conta</button>
        </div>
        }
    </form>
      
      <Footer />
    </div>
  )
}

export default CreateAccount