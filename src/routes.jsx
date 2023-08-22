import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Feed from './pages/feed'
import Cadastrar from './pages/cadastrar'

export default function Rotas(){
    return (
     <Router>
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/feed" element={ <Feed />} />
            <Route path="/cadastrar" element={ <Cadastrar />} />
        </Routes>
     </Router>
    )
}