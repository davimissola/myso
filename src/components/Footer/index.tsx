import './footer.css'
import MysoPreto from '../../assets/myso-preto.webp'



export function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-top'>
                <div>
                    <h3>Explorar</h3>
                    <a href="#funcionamento">Funcionamento</a>
                    <a href="#servicos">Serviços</a>
                    <a 
                      href="https://wa.me/5519983789577?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20MYSO%20e%20gostaria%20de%20entender%20melhor%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20empresa."
                    >
                        Preço
                    </a>
                </div>
                <div>
                    <h3>Social</h3>
                    <a href="https://www.instagram.com/mysobrasil/">Instagram</a>
                    <a href="https://www.tiktok.com/@dammas.ai">TikTok</a>
                </div>
                <div>
                    <h3>Fale conosco</h3>
                    <a 
                      href="https://wa.me/5519983789577?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20MYSO%20e%20gostaria%20de%20entender%20melhor%20como%20voc%C3%AAs%20podem%20ajudar%20minha%20empresa."
                    >
                        WhatsApp
                    </a>
                    <a href="#">Email</a>
                </div>
            </div>

            <div className="footer-bottom">
                <img src={MysoPreto} alt="Logo da myso preto" />
            </div>
        </footer>
    )
}