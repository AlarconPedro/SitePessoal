import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-secondary bg-gradient">
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
            </nav>
        </>
    )
}

export const Footer = () => {
    return(
        <>
            <footer className="text-center bg-black">
                <p>Desenvolvido por Alarcon</p>
            </footer>
        </>
    )
}

export const Video = props => {
    return(
        <>  <div className="col-12 col-md-4">
                <div className="card">
                    <iframe width="100%" height="320"
                    src={`https://youtube.com/embed/${props.Videos}`}></iframe>
                    <div className="card-body">
                        <h3>{props.titulo}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}