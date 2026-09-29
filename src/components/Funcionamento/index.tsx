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
        <section className="section-funcionamento" aria-label="Sites desenvolvidos">
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
                        Tecnologia no seu negócio
                    </span>

                    <h3>
                        Menos tempo em tarefas manuais. Mais foco no que faz sua empresa avançar.
                    </h3>
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
                        Menos informações espalhadas. Mais controle sobre toda a sua operação.
                    </h3>
                </div>
            </div>
        </section>
    );
}