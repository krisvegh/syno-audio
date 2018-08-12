import * as React from 'react';
import './App.css';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Loginpage from './containers/LoginContainer';
import PlayerPage from './containers/PlayerContainer';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/login" component={Loginpage} />
          <Route exact={true} path="/player" component={PlayerPage} />
          <Redirect exact={true} from="*" to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
