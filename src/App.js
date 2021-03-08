import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/configStyles';
import './styles/App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

// COMPONENTES
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import CursosCards from './components/courses/CursosCards';
import CoursesDetails from './components/coursesDetails/CoursesDetails';
import Conferences from './components/Conferences';
import CharlasCards from './components/CharlasCards';
import Library from './components/Library';
import AboutUsHistory from './components/AboutUsHistory';
import AboutUsCommission from './components/AboutUsCommission';
import AboutUsValues from './components/AboutUsValues';
import Articles from './components/Articles';
import Legislation from './components/Legislation';
import ScrollToToP from './components/ScrollToTop';

import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router history={ history }>
          <ScrollToToP />
          <Header />
          <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/historia">
              <AboutUsHistory />
            </Route>
            <Route exact path="/comision">
              <AboutUsCommission />
            </Route>
            <Route exact path="/principios">
              <AboutUsValues />
            </Route>
            <Route exact path="/contacto">
              <Contact />
            </Route>
            <Route exact path="/cursos">
              <CursosCards />
            </Route>
            <Route exact path="/conferencias">
              <Conferences />
            </Route>
            <Route exact path="/charlas">
              <CharlasCards />
            </Route>
            <Route exact path="/biblioteca">
              <Library />
            </Route>
            <Route exact path="/articulos">
              <Articles />
            </Route>
            <Route exact path="/legislación-y-reglamentaciones">
              <Legislation />
            </Route>
            <Route exact path="/cursos/:id">
              <CoursesDetails />
            </Route>
          </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
