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
            <a href="#funcionamento">Funcionamento</a>
            <a href='#servicos'>Serviços</a>
            <a
              href='https://wa.me/5519983789577?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20MYSO%20e%20gostaria%20de%20entender%20melhor%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20empresa.'
            >
              Preço
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
