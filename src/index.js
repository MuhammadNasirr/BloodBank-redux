import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AppBarExampleIcon,Main,Signup,Login, Home, DonateBlood, RequiredBlood } from './components';
import './index.css';


import configureStore from './store/configureStore';

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';


const store = configureStore();

injectTapEventPlugin();

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyBYYIbAaPYbWsSgeKM0Muek-cK8lc9gGv4",
    authDomain: "todo-list-app-dd6f1.firebaseapp.com",
    databaseURL: "https://todo-list-app-dd6f1.firebaseio.com",
    storageBucket: "todo-list-app-dd6f1.appspot.com",
    messagingSenderId: "291723151868"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>

      <Router history={browserHistory}>
        <Route path="/" component={AppBarExampleIcon} >
          <IndexRoute component={Signup} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/DonateBlood" component={DonateBlood} />
          <Route path="/RequiredBlood" component={RequiredBlood} />
          
        </Route>
        

      </Router>

    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
