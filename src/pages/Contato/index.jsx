export const Contato = () => {
    return(
        <>
            <h1>Contato :</h1>
            <div className="container-fluid">
                <h3>experiências:</h3>
                <p>Este é meu site pessoal, cujo intuito é ter um portfolio online aonde seja mais fácil de outras pessoas conhecerem meu trabalho,
                e minhas experiências na área de Desenvolvimento.</p>
                <p>neste site serão encontradas informações sobre minha experiência profissional e meus projetos e mine projetos que foram desenvolvidos até agora.
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <p>Este é meu site pessoal, cujo intuito é ter um portfolio online aonde seja mais fácil de outras pessoas conhecerem meu trabalho,
                e minhas experiências na área de Desenvolvimento.</p>
            </div>
            <div className="container-fluid row">
                <div className="input-group mb-3 col 12">
                    <div class="wd col col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">Nome :</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Digite seu nome..."></input>
                    </div>
                    <div class="wd col col-md-5,5">
                        <label for="exampleFormControlInput1" class="form-label">Email :</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@exemplo.com"></input>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Texto para envio :</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </>
    )
}