export const Sobre = () => {
    return (
        <>
            <h1 className="text-left">Sobre minhas experiências :</h1>
            <div className="container ">
                <h3>experiências:</h3>
                <p>Este é meu site pessoal, cujo intuito é ter um portfolio online aonde seja mais fácil de outras pessoas conhecerem meu trabalho,
                e minhas experiências na área de Desenvolvimento.</p>
                <p>neste site serão encontradas informações sobre minha experiência profissional e meus projetos e mine projetos que foram desenvolvidos até agora.</p>
            </div>
            <div className="background container">
                <div class="card-group card_margin border border-primary">
                <div class="card card_body border border-primary ">
                    <img src="../src/images/code1.jpg" class="card-img-top" alt="Code"></img>
                    <div class="card-body card_back">
                        <h5 class="card-title">Suporte Técnico</h5>
                        <p class="card-text">2 anos e meio de experiência trabalhando como suporte técnico.</p>
                        <p class="card-text"><small class="text-muted">2015 - 2017</small></p>
                    </div>
                </div>
                <div class="card card_body border border-primary">
                    <img src="../../images/code1.jpg" class="card-img-top" alt="Code"></img>
                    <div class="card-body card_back">
                        <h5 class="card-title">Estágio em T.I</h5>
                        <p class="card-text">1 ano de eperiência no setor de T.I</p>
                        <p class="card-text"><small class="text-muted">2017 - 2018</small></p>
                    </div>
                </div>
                <div class="card card_body border border-primary">
                    <img src="../../images/code1.jpg" class="card-img-top" alt="Code"></img>
                    <div class="card-body card_back">
                        <h5 class="card-title">Trabalho no Setor de T.I</h5>
                        <p class="card-text">Experiência profissional na área de T.I como auxiliar.</p>
                        <p class="card-text"><small class="text-muted">2020 - Atualmente</small></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}