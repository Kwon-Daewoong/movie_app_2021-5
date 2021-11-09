import "./App.css"
import Home from "./routes/Home"
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Navigation from "./components/Navigation"
import Detail from './routes/Detail';
function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/About" component={About} />
            <Route path="/movie-detail" component={Detail} />
            {/* <Route path='/' component={Home}>
                <h1>Home</h1>
            </Route>
            { <Route path='/home/introduction' component={Introduction}>
                <h1>Introduction</h1>
            </Route> }
            <Route path='/About' component={About}>
                <h1>About</h1>
            </Route> */}
        </HashRouter>
    )
}
export default App