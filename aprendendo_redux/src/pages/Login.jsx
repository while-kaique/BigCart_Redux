import './Login.css'
const Login = () => {
  return (
    <>
        <div className="user">
          <div className="camp username">
            <label htmlFor="name">Seu Nome</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="camp email">
            <label htmlFor="email">Número de Celular ou Email</label>
            <input type="text" name="emailNum" id="emailNum"/>
          </div>
          <div className="camp password">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" placeholder='Pelo menos 6 caracteres e um número' />
          </div>
          <div className="camp password2">
            <label htmlFor="password">Insira a senha mais uma vez</label>
            <input type="password" name="password2" id="password2"/>
          </div>
        </div>
    </>
  )
}

export default Login