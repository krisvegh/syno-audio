import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Authguard from 'src/components/Authguard';
import LoginContainer from './containers/LoginContainer';
import PlayerContainer from './containers/PlayerContainer';
import store from './store/configureStore';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/login" component={LoginContainer} />
            <Authguard
              exact={true}
              path="/player"
              component={PlayerContainer}
            />
            <Redirect exact={true} from="*" to="/login" />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
