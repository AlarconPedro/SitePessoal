import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components/Main';

import { Sobre } from './pages/Sobre';
import { Home } from './pages/Home';
import { Contato } from './pages/Contato';    
import { Curriculo } from './pages/Curriculo';
import { Hobbies } from './pages/Hobbies';

export const Router = () => {
    return(
        <>
        <BrowserRouter>
            <Header></Header>   
            <Switch>
                <Route path = {['/', '/home']} exact component = { Home }></Route>
                <Route path = '/sobre'         component       = { Sobre }></Route>
                <Route path = '/contato'       component       = { Contato }></Route>
                <Route path = '/curriculo'     component       = { Curriculo }></Route>
                <Route path = '/hobbies'       component       = { Hobbies }></Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
        </>
    )
}