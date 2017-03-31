
import React from 'react';
import AppBar from 'material-ui/AppBar';
import firebase from 'firebase';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


class AppBarExampleIcon extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogged: false,
            open: false,
        }
    }
    handleToggle = () => this.setState({ open: !this.state.open });

    componentWillMount() {
        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {
                // User is signed in.
                this.setState({ isLogged: true });
                console.log(this.state.isLogged);
                // ...
            } else {
                // User is signed out.
                this.setState({ isLogged: false });
                return console.log(this.state.isLogged);
            }
        }.bind(this));
    }

    logout(e) {
        e.preventDefault();
        firebase.auth().signOut().then(function () {
            console.log("Sign-out successful");
            browserHistory.push('/');
        }).catch(function (error) {
            // An error happened.
        });
    }




    render() {
        const styles = {
            title: {
                cursor: 'pointer',
            },
            headerButton: {
                // border: '2px solid red',
                marginTop: '5px',
            },
            button: {
                color: '#fafbfc',
                fontFamily: 'Verdana'
            },

        };
        return (
            <div>
                <center>
                    <div>

                        <MuiThemeProvider>

                            <AppBar
                                title="Blood Bank"
                                iconStyleLeft={this.state.isLogged === false ? { "display": "none" } : void 0}
                                style={{ "backgroundColor": "#af111c" }}
                                iconClassNameRight="muidocs-icon-navigation-expand-more" onTouchTap={this.handleToggle}

                                iconElementRight={
                                    <div style={styles.headerButton}>
                                        {this.state.isLogged === false ?
                                            <span>
                                                <Link to='/signup'>
                                                    <FlatButton style={styles.button} label="Sign Up" />
                                                </Link>
                                                <Link to='/Login'>
                                                    <FlatButton style={styles.button} label="Log In" />
                                                </Link>
                                            </span> : void 0}

                                        {this.state.isLogged === true ?
                                            <div>
                                               
                                                <Drawer open={this.state.open}>
                                                    <Link to="/Home"><MenuItem>Dashboard</MenuItem></Link>
                                                    <Link to="/RequiredBlood"><MenuItem>Available Blood</MenuItem></Link>
                                                </Drawer>
                                                <FlatButton label="Logout" style={styles.button} onClick={this.logout.bind(this)} /></div> : void 0}


                                    </div>
                                }
                            />

                        </MuiThemeProvider>
                    </div>

                    {this.props.children}
                </center>
            </div >
        )
    }
}



export default AppBarExampleIcon;