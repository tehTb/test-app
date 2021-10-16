import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Head } from './components/Head';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Wow } from './pages/Wow';
import { Pokemon } from "./pages/Pokemon";

const AppTsx = () => {

  return(
    <>
    <Router>
      <div id="navbar">
        <Navbar />
      </div>
      <div id="head">
        <Head />
      </div>
      <div id="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/wow">
            <Wow />
          </Route>
          <Route exact path="/pokemon">
            <Pokemon />
          </Route>
        </Switch>
      </div>
      <div id="footer">
        {/* <Footer /> */}
      </div>
    </Router>
    </>
  )
}

export default AppTsx;
