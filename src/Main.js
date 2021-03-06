import React, { Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import About from './components/About';
import NavBar from "./components/NavBar";


const App = () => (
  <Fragment>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
  )

export default App;