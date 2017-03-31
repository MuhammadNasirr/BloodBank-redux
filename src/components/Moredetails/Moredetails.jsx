import React from 'react';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


class Moredetails extends React.Component {
    constructor(props) {
        super(props);

        // this.logout = this.logout.bind(this);
        this.state = { array: [], open: false, value: 1 };
        // this.state = {open: false};


    }
    render() {
        const style = {
            margin: 12,
        };
        const styles = {
            customWidth: {
                width: 200,

            },
        };
        return (
            <div>
                <MuiThemeProvider>
                    <div>

                        {/*<Link to="/MoreDetails"><RaisedButton label="More Details" secondary={true} style={style} onClick={this._search} /></Link>*/}
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Name</TableHeaderColumn>
                                    <TableHeaderColumn>Status</TableHeaderColumn>
                                    <TableHeaderColumn>Request</TableHeaderColumn>

                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {this.state.array.map((val, i) => {
                                    return (
                                        <TableRow>
                                            <TableRowColumn key={i}>{i + 1}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.username}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.blood}</TableRowColumn>
                                            <RaisedButton label="Request" secondary={true} style={style} />
                                        </TableRow>

                                    )


                                })}



                            </TableBody>
                        </Table>
                    </div>
                </MuiThemeProvider >

            </div>
        )
    }
}
export default Moredetails;