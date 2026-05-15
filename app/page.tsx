const coreSkills = [
    {
        title: "Full stack",
        description:
            "Aplicações web com React, Next.js, Node.js, TypeScript e integração entre front-end e back-end.",
    },
    {
        title: "Dados e BI",
        description:
            "ETL, SQL, Python, dashboards e visualizações interativas para explorar indicadores institucionais.",
    },
    {
        title: "IA aplicada",
        description:
            "Projetos com visão computacional, NLP, agentes, LangChain, TensorFlow, OpenCV e Dialogflow CX.",
    },
    {
        title: "Produto técnico",
        description:
            "Modelagem de dados, documentação, APIs, Git, Docker e evolução de sistemas internos.",
    },
];

const experiences = [
    {
        period: "Jan 2026 - atual",
        role: "Desenvolvedor Full Stack Pleno",
        company: "Cartório do 1º Ofício de Notas e Registro de Imóveis",
        summary:
            "Desenvolvimento de funcionalidades full stack, APIs, regras de negócio, ambientes Docker e modelagem de dados com MySQL.",
    },
    {
        period: "Fev 2025 - Fev 2026",
        role: "Bolsista de Análise de Dados e BI",
        company: "UFOPA",
        summary:
            "Processos ETL, análise de dados institucionais e dashboards interativos para a plataforma de inteligência de dados da universidade.",
    },
    {
        period: "Ago 2025 - Nov 2025",
        role: "Desenvolvedor Flutter para Aplicação com IA",
        company: "RioHacks",
        summary:
            "Aplicativo mobile de turismo e marketplace com Flutter, Dart e integração de IA conversacional.",
    },
    {
        period: "Out 2025 - Nov 2025",
        role: "Desenvolvedor React Native",
        company: "RioHacks",
        summary:
            "Aplicativo mobile de gestão financeira pessoal com React Native, Expo, Firebase e otimização de desempenho.",
    },
    {
        period: "Mai 2024 - Dez 2024",
        role: "Programador Python",
        company: "BeMaker360",
        summary:
            "Algoritmos de visão computacional com OpenCV, integração com hardware Arduino e análise de dados de vendas.",
    },
];

const research = [
    {
        period: "Ago 2023 - Dez 2024",
        title: "Desenvolvedor NetLogo - Projeto ECOSYS",
        description:
            "Modelos computacionais para simular ecossistemas de inovação, fluxos de conhecimento e processos de difusão em comunidades organizacionais.",
    },
    {
        period: "Set 2021 - Ago 2022",
        title: "Bolsista Desenvolvedor Python - Visão Computacional",
        description:
            "Sistema para apoiar ensino e aprendizagem de pessoas com deficiência visual, com transcrição de documentos em Braille para português brasileiro. Projeto reconhecido com Menção Honrosa.",
    },
];

const techGroups = [
    ["Linguagens", "Python, JavaScript, TypeScript, Dart, Node.js, SQL"],
    ["Front-end", "React, Next.js"],
    ["Mobile", "Flutter, React Native, Expo"],
    ["IA e dados", "OpenCV, NLP, Dialogflow CX, TensorFlow, LangChain"],
    ["Ferramentas", "Git, Docker, Linux, Google Cloud, N8N, Streamlit"],
];

const certifications = [
    "Python Impressionador - Hashtag Treinamentos",
    "JavaScript Impressionador - Hashtag Treinamentos",
    "Agentes de IA com Python, OpenAI e LangChain - Hashtag Treinamentos",
    "Desenvolvimento Web com Python, Flask e Django - Hashtag Treinamentos",
];

export default function Home() {
    return (
        <main className="page-shell">
            <nav className="topbar" aria-label="Navegação principal">
                <a href="#inicio" className="brand" aria-label="Início">
                    LA
                </a>
                <div className="nav-links">
                    <a href="#experiencia">Experiência</a>
                    <a href="#pesquisa">Pesquisa</a>
                    <a href="#stack">Stack</a>
                </div>
            </nav>

            <section className="hero" id="inicio" aria-labelledby="hero-title">
                <div className="hero-copy">
                    <p className="eyebrow">Full stack · dados · IA aplicada</p>
                    <h1 id="hero-title">Lorenzo Alberto</h1>
                    <p className="intro">
                        Desenvolvedor Full Stack.
                        <br />
                        Criando plataformas, automações e visualizações que
                        transformam dados em decisões melhores.
                    </p>
                    <div className="actions" aria-label="Ações principais">
                        <a
                            href="mailto:lorenzoalberto02@gmail.com"
                            className="button primary"
                        >
                            Entrar em contato
                        </a>
                        <a
                            href="/files/curriculo.pdf"
                            className="button primary"
                            download="Curriculo - Lorenzo Alberto.pdf"
                        >
                            Baixar currículo
                        </a>
                    </div>
                </div>

                <aside
                    className="profile-panel"
                    aria-label="Resumo profissional"
                >
                    <p className="panel-label">Situado em Santarém, Brasil</p>
                    <strong>
                        Desenvolvimento de software com base sólida em dados.
                    </strong>
                    <p>
                        Experiência com produtos web, BI, integração de
                        sistemas, visão computacional e documentação técnica
                        para diferentes perfis de usuários.
                    </p>
                    <div
                        className="contact-list"
                        aria-label="Links profissionais"
                    >
                        <p>Links oficiais:</p>
                        <a href="https://github.com/naraazi">
                            Meu repositório de projetos: github.com/naraazi
                        </a>
                        <a href="https://www.linkedin.com/in/lorenzoalberto-dev">
                            Meu LinkedIn: linkedin.com/in/lorenzoalberto-dev
                        </a>
                    </div>
                </aside>
            </section>

            <section
                className="section skills-section"
                aria-labelledby="skills-title"
            >
                <div className="section-heading">
                    <p className="eyebrow">Competências</p>
                    <h2 id="skills-title">O que eu construo bem</h2>
                </div>
                <div className="skill-grid">
                    {coreSkills.map((skill) => (
                        <article className="skill-card" key={skill.title}>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section
                className="section timeline-section"
                id="experiencia"
                aria-labelledby="experience-title"
            >
                <div className="section-heading">
                    <p className="eyebrow">Experiência</p>
                    <h2 id="experience-title">Trajetória profissional</h2>
                </div>
                <div className="timeline">
                    {experiences.map((item) => (
                        <article
                            className="timeline-item"
                            key={`${item.period}-${item.role}`}
                        >
                            <time>{item.period}</time>
                            <div>
                                <h3>{item.role}</h3>
                                <p className="company">{item.company}</p>
                                <p>{item.summary}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section
                className="section split-section"
                id="pesquisa"
                aria-labelledby="research-title"
            >
                <div className="section-heading">
                    <p className="eyebrow">Pesquisa e extensão</p>
                    <h2 id="research-title">
                        Projetos acadêmicos com entrega real
                    </h2>
                </div>
                <div className="research-list">
                    {research.map((item) => (
                        <article className="research-item" key={item.title}>
                            <time>{item.period}</time>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section
                className="section stack-section"
                id="stack"
                aria-labelledby="stack-title"
            >
                <div className="section-heading">
                    <p className="eyebrow">Stack</p>
                    <h2 id="stack-title">Ferramentas e formação</h2>
                </div>
                <div className="stack-layout">
                    <div className="tech-list">
                        {techGroups.map(([label, value]) => (
                            <div className="tech-row" key={label}>
                                <span>{label}</span>
                                <p>{value}</p>
                            </div>
                        ))}
                    </div>
                    <div className="education-block">
                        <h3>Ciência da Computação</h3>
                        <p>
                            Bacharelado na Universidade Federal do Oeste do Pará
                            (UFOPA), em Santarém. Previsão de conclusão: junho
                            de 2026.
                        </p>
                        <h3>Certificações</h3>
                        <ul>
                            {certifications.map((certification) => (
                                <li key={certification}>{certification}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
