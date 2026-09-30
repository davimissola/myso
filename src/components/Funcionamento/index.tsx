import type { CSSProperties } from 'react';
import automacaoImagem from '../../assets/automaçao-imagem.webp'
import sistemasImagem from '../../assets/sistemas-imagem.webp'
import './funcionamento.css';

const sites = [
    'site-01.webp',
    'site-02.webp',
    'site-03.webp',
    'site-04.webp',
];
const COPIAS = 3;



export function Funcionamento() {
    return (
        <section className="section-funcionamento" id='servicos' aria-label="Sites desenvolvidos">
            <div className="mq">
                <div
                    className="mq__track"
                    style={{ '--qtd': sites.length } as CSSProperties}
                >
                    {Array.from({ length: COPIAS }, (_, copia) =>
                        sites.map((arquivo, i) => (
                            <div
                                className="mq__card"
                                key={`${copia}-${arquivo}`}
                                aria-hidden={copia > 0 ? true : undefined}
                            >
                                <img
                                    src={`/sites/${arquivo}`}
                                    alt={copia === 0 ? `Captura de tela do site ${i + 1}` : ''}
                                    draggable={false}
                                    decoding="async"
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>

            <h2>Sites que transmitem o tamanho da sua empresa antes do primeiro contato.</h2>

            <div className='div-automacoes'>
                <div className="div-automacoes__texto">
                    <span className="div-automacoes__categoria">
                        Faça mais. Trabalhe menos
                    </span>

                    <h3>
                        Dê à sua equipe tempo para fazer mais.
                    </h3>
                    <p>
                        Automatizamos tarefas repetitivas e conectamos suas ferramentas para reduzir erros e trabalho manual. Sua equipe ganha tempo para atender melhor os clientes e fazer a empresa crescer.
                    </p>
                </div>

                <div className="div-automacoes__visual">
                    <img
                        src={automacaoImagem}
                        alt="Ilustração de um fluxo de automação"
                    />
                </div>
            </div>

            <div className='div-automacoes'>
                <div className="div-automacoes__visual">
                    <img
                        src={sistemasImagem}
                        alt="Ilustração de um fluxo de sistema"
                    />
                </div>

                <div className="div-automacoes__texto">
                    <span className="div-automacoes__categoria">
                        Sistemas personalizados
                    </span>

                    <h3>
                        Organize seu negócio como empresa grande
                    </h3>
                    <p>
                        Menos informações espalhadas. Mais controle sobre toda a sua operação.
                    </p>
                </div>
            </div>
        </section>
    );
}