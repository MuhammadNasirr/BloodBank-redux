import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppBarExampleIcon, Main, Signup, Login, Home, RequiredBlood, DonateBlood, Beforelogin, Moredetails } from './components';
import './index.css';


// import configureStore from './store/configureStore';
import store from './store/configureStore'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';


// const store = configureStore();

injectTapEventPlugin();

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBYYIbAaPYbWsSgeKM0Muek-cK8lc9gGv4",
    authDomain: "todo-list-app-dd6f1.firebaseapp.com",
    databaseURL: "https://todo-list-app-dd6f1.firebaseio.com",
    projectId: "todo-list-app-dd6f1",
    storageBucket: "todo-list-app-dd6f1.appspot.com",
    messagingSenderId: "291723151868"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>

      <Router history={browserHistory}>
        <Route path="/" component={AppBarExampleIcon} >
          <IndexRoute component={Beforelogin} />
          <Route path="/main" component={Main} />
          <Route path="/Signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/requiredBlood" component={RequiredBlood} />
          <Route path="/donateblood" component={DonateBlood} />
          <Route path="/Moredetails" component={Moredetails} />
        </Route>


      </Router>

    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
