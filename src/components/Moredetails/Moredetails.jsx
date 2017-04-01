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
import { connect } from 'react-redux';
import { check } from '../../actions/userdetailsactions'



class Moredetails extends React.Component {
    constructor(props) {
        super(props);

        // this.logout = this.logout.bind(this);
        this.state = { array: [], open: false, value: 1 };
        // this.state = {open: false};
           this.props.SignUp()


    }
    checkfunc() {
        this.props.SignUp()
        console.log(this.props.donorInfo)
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
                      
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Country</TableHeaderColumn>
                                    <TableHeaderColumn>age</TableHeaderColumn>
                                    <TableHeaderColumn>area</TableHeaderColumn>
                                    <TableHeaderColumn>blood</TableHeaderColumn>
                                    <TableHeaderColumn>city</TableHeaderColumn>
                                    <TableHeaderColumn>Mobile Number</TableHeaderColumn>
                                    <TableHeaderColumn>weight</TableHeaderColumn>

                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {this.props.donorInfo.map((val, i) => {
                                    return (
                                        <TableRow>
                                            <TableRowColumn key={i}>{i + 1}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.Country}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.age}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.area}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.blood}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.city}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.mobilenum}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.weight}</TableRowColumn>
                                            {/*<RaisedButton label="Request" secondary={true} style={style} />*/}
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
const mapStateToProps = (state) => {
    return {
        donorInfo: state.donatedetailsreducer.donor,
       
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignUp: () => {
            dispatch(check());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Moredetails);