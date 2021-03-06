import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import DoesNotExist from './pages/DoesNotExist';
import Credits from './pages/Credits';
import Home from './pages/Home';
import Login from './pages/Login';
import Help from './pages/Help';
import SignUp from './pages/SignUp';
import Threads from './pages/Threads';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    const className = document.body.className;
    document.body.classList.toggle('dark-theme')
    
    if(className === "light-theme") {
      
        this.idContent = "Dark";

    }
    else {
        this.idContent = "Light";
    }
});
// FontAwesome Icons

library.add(faExclamationTriangle, faMobile, faGithub)

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <Home main={0}/>
            </Route>
            <Route exact path="/Threads">
              <Threads />
            </Route>
            <Route exact path="/Threads/:id">
              <Home main={1} />
            </Route>
            <Route exact path="/About">
              <About />
            </Route >
            <Route exact path="/Credits">
              <Credits />
            </Route >
            <Route exact path="/Help">
              <Help />
            </Route >
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route path="*">
              <DoesNotExist />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
