import '../components/Footer.css'
const Footer = () => {
  return (
    <div className='foot'>
        <footer className='footer'>
            <ul id="ul1">
                <h1>Sobre Nós</h1>
                <a href="#">
                    <li>Quem Somos?</li>
                </a>
                <a href="#">
                    <li>Política de Privacidade</li>
                </a>
                <a href="#">
                    <li>Termos de Serviço</li>
                </a>
                <a href="#">
                    <li>Contatos</li>
                </a>
            </ul>
            
            <div id='e'>
                <div id="logo"></div>
            </div>
            
            <ul id="ul2">
                <h1>Links Úteis</h1>
                <a href="https://github.com/while-kaique">
                    <li>Github</li>
                </a>
                <a href="https://www.linkedin.com/in/kaique-breno/">
                    <li>LinkedIn</li>
                </a>
                <a href="whilekaique@alu.ufc.br">
                    <li>Email</li>
                </a>
                <a href="https://w.app/KaiCode">
                    <li>Whatsapp</li>
                </a>
            </ul>
        </footer>
        <a href="https://w.app/KaiCode">
            <p>Este site lhe gerou interesse? Entre em contato usando uma das formas descritas acima!</p>
        </a>
    </div>
  )
}

export default Footer