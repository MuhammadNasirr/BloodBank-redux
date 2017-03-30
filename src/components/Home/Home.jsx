import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';


class Home extends Component {

    render() {
        const style = {
            margin: 12,
        }
        return (
            <div>
               <Link to="/DonateBlood"> <RaisedButton label="Donate Blood" secondary={true} style={style} /></Link>
              <Link to="/RequiredBlood">  <RaisedButton label="Required Blood" secondary={true} style={style} /></Link>
            </div>
        )
    }
}
export default Home;