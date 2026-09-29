import './problema.css'



export function Problema() {
    const empresas = [
        { nome: 'Google', arquivo: 'google.svg' },
        { nome: 'Netflix', arquivo: 'netflix.svg' },
        { nome: 'Mercado Livre', arquivo: 'mercado-livre.svg' },
        { nome: 'Apple', arquivo: 'apple.svg' },
        { nome: 'TikTok', arquivo: 'tiktok.svg' },
        { nome: 'Spotify', arquivo: 'spotify.svg' },
        { nome: 'Uber', arquivo: 'uber.svg' },
        { nome: 'Nubank', arquivo: 'nubank.svg' },
    ];

    return (
        <section className="section-problema">
            <h3>Todas as grandes empresas tem seu time de tecnologia</h3>

            <div className="empresas-marquee" role="group" aria-label="Exemplos de grandes empresas">
                <div className="empresas-marquee__track">
                    {[0, 1].map((copia) => (
                        <div className="empresas-marquee__group" key={copia} aria-hidden={copia === 1}>
                            {empresas.map((empresa) => (
                                <img
                                    key={empresa.nome}
                                    src={`/logos/${empresa.arquivo}`}
                                    alt={copia === 0 ? empresa.nome : ''}
                                    draggable={false}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <h2>Se a sua empresa crescesse amanhã, a tecnologia acompanharia?</h2>
        </section>
    )
}