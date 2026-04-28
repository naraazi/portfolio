const highlights = [
    "Projetos em software",
    "Experimentos de produto",
    "Casos e aprendizados",
];

export default function Home() {
    return (
        <main className="page-shell">
            <section className="hero" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <p className="eyebrow">Portfólio profissional</p>
                    <h1 id="hero-title">Lorenzo Alberto</h1>
                    <p className="intro">
                        Estou preparando este espaço para reunir meus projetos,
                        estudos e coisas que estou construindo.
                    </p>
                    <div className="actions" aria-label="Ações principais">
                        <a
                            href="mailto:lorenzoalberto02@gmail.com"
                            className="button primary"
                        >
                            Entrar em contato
                        </a>
                        <a
                            href="https://github.com/naraazi"
                            className="button secondary"
                        >
                            Ver próximos projetos
                        </a>
                    </div>
                </div>

                <div className="signal-card" aria-label="Status do portfólio">
                    <div className="status-row">
                        <span className="status-dot" aria-hidden="true" />
                        <span>Online em construção</span>
                    </div>
                    <div className="monogram" aria-hidden="true">
                        L
                    </div>
                </div>
            </section>

            <section
                className="project-strip"
                id="projetos"
                aria-label="Próximos blocos"
            >
                {highlights.map((item) => (
                    <article key={item}>
                        <span />
                        <h2>{item}</h2>
                        <p>Em breve</p>
                    </article>
                ))}
            </section>
        </main>
    );
}
