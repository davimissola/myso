import './hero.css'
import ChaveiroMain from '../../assets/chaveiro-main.png'


export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
        <div className='hero-top'>
            <div className="hero-swing">
                <img src={ChaveiroMain} alt="Chaveiro personalizado." />
            </div>  
        </div>
        <div className="hero-content">
            <h1 id="hero-title">
                Sua empresa merece um time <span className="headline-accent">de tecnologia.</span>
            </h1>
            <p>
                A MYSO entende a sua empresa, encontra onde a tecnologia pode
                ajudar e reúne as pessoas certas para desenvolver soluções e
                acompanhar sua evolução.
            </p>
            <a 
              href="https://wa.me/5519983789577?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20MYSO%20e%20gostaria%20de%20entender%20melhor%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20empresa."
            >
                Crie com a Myso
            </a>
        </div>
    </section>
  )
}
