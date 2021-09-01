import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-gradient ">
                <Link to={'/home'}
                className="navbar-brand">
                </Link>
                    <div id="menu" className="collapse navbar-collapse">
                    <ul className="nav nav-tabs ml-auto">
                        <li className="nav-item">
                            <Link to={'/'}
                            className="nav-link">Home
                            </Link>
                        </li>
                        <li> 
                            <Link to={'/sobre'}
                            className="nav-link">Sobre
                            </Link>
                        </li>
                        <li>
                            <Link to={'/hobbies'}
                            className="nav-link">Hobbies
                            </Link>
                        </li>
                        <li>
                           <Link to={'/curriculo'}
                           className="nav-link">Currículo
                           </Link> 
                        </li>
                        <li>
                            <Link to={'/contato'}
                            className="nav-link">Contato
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-name">
                    <h4>Pedro H. Alarcon</h4>
                </div>
            </nav>
        </>
    )
}

export const Footer = () => {
    return(
        <>
            <footer className="text-center bg-gradient bg-black">
                <p>Desenvolvido por Alarcon</p>
            </footer>
        </>
    )
}

export const Imagem = props => {
    return(
        <>
            <div id="imagem">
                <img src={props.imagem} alt={props.titulo} title={props.title} className="w-100"/>
            </div>
        </>
    )
}