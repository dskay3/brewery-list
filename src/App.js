import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Main from './pages/Main';

const App = () =>
  <Router>
    <Wrapper>
      <Route exact path="/" component={Main} />
    </Wrapper>
  </Router>;

export default App;