import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import DoesNotExist from './pages/DoesNotExist';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Login from './pages/Login';
import Rules from './pages/Rules';
import SignUp from './pages/SignUp';
import Threads from './pages/Threads';



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
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faExclamationTriangle, faMobile, faGithub)

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Threads">
              <Threads />
            </Route>
            <Route exact path="/Threads/:id">
              <Home />
            </Route>
            <Route exact path="/About">
              <About />
            </Route >
            <Route exact path="/FAQ">
              <FAQ />
            </Route >
            <Route exact path="/Rules">
              <Rules />
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
