import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import logo from '../AppBar/Images/logo.jpg'



class Beforelogin extends Component {
    render() {
        return (
            <div>
                <img src={logo} style={{width:"300",height:"600", alignContent:"left" , margin:"20px"}} alt="Blood Bank"/>
                </div>
        )
    }
}
export default Beforelogin;