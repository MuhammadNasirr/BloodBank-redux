import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';


class Beforelogin extends Component {
    render() {
        return (
            <div>
                <Link to="/Signup"><RaisedButton label="Sign Up" secondary={true} style={{ margin: 12, backgroundColr: "pink" }} /></Link>
                <Link to="/Login"> <RaisedButton label="Log in" secondary={true} style={{ margin: 12, backgroundColr: "pink" }} /></Link>
            </div>
        )
    }
}
export default Beforelogin;