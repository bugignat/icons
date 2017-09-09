import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Store from './store';
import Home from './routes/home/home';

const store = Store();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={Home}/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
