import './header.css'
import mysoVerdePNG from '../../assets/myso-verde.png'


export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="header-pill" aria-label="Navegação principal">
          <a className="brand" href="#top" aria-label="MYSO, voltar ao início">
            <img src={mysoVerdePNG} alt="" />
          </a>
          <div className="header-links">
            <a href="#">Funcionamento</a>
            <a href='#'>Serviços</a>
            <a href='#'>Sobre</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
