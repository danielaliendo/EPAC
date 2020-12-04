import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme  from './components/configStyles';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// COMPONENTES
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import CursosCards from './components/CursosCards';
import CoursesDetails from './components/coursesDetails/CoursesDetails';
import Conferences from './components/Conferences';
import CharlasCards from './components/CharlasCards';
import Library from './components/Library';
import AboutUsHistory from './components/AboutUsHistory';
import AboutUsCommission from './components/AboutUsCommission';
import AboutUsValues from './components/AboutUsValues';
import Articles from './components/Articles';
import Legislation from './components/Legislation';
const url = '/EPAC/'

function App() {
    
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router exact basename={url}>
              <Header />
          <Switch>
            <Route basename={url} exact path="/">
              <Home />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/historia">
              <AboutUsHistory />
            </Route>
            <Route path="/comision">
              <AboutUsCommission />
            </Route>
            <Route path="/principios">
              <AboutUsValues />
            </Route>
            <Route path="/Contacto">
              <Contact />
            </Route>
            <Route basename={url} exact path="/Cursos">
              <CursosCards />
            </Route>
            <Route path="/Conferencias">
              <Conferences />
            </Route>
            <Route path="/charlas">
              <CharlasCards />
            </Route>
            <Route path="/Biblioteca">
              <Library />
            </Route>
            <Route path="/Articulos">
              <Articles />
            </Route>
            <Route path="/Legislación-y-reglamentaciones">
              <Legislation />
            </Route>
            <Route basename={url} exact path="/Cursos/:id">
              <CoursesDetails />
            </Route>
          </Switch>
          <Footer />
      </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
