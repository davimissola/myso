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
            <a href="#">
                Crie com a Myso
            </a>
        </div>
    </section>
  )
}
