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
import { allBlood } from '../../actions/userdetailsactions'



class Moredetails extends React.Component {
    constructor(props) {
        super(props);

        // this.logout = this.logout.bind(this);
        // this.state = { array: [], 
        //     open: false,
        //       };
        // this.state = {open: false};
          }
    
    handleData(e) {
        e.preventDefault();
        
        // var   bloodg = e.target.childNodes[0].nodeValue;
        this.props.AllBlood()
        // console.log(this.props.allinfo)
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
                        <RaisedButton label="Request" secondary={true} onClick={this.handleData.bind(this)} />
                <MuiThemeProvider>
                    <div>
                    
                        <Table>

                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Name</TableHeaderColumn>
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
                                {/*{console.log(this.props.allinfo)}*/}
                                {this.props.allinfo.map((val, i) => {
                                    console.log(this.props.allinfo)
                                    return (
                                        <TableRow>
                                            <TableRowColumn key={i}>{i + 1}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.Name}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.Country}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.age}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.area}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.blood}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.city}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.mobilenum}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.weight}</TableRowColumn>
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
        allinfo: state.donatedetailsreducer.donors,
       
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        AllBlood: () => {
            dispatch(allBlood());
        }
    
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Moredetails);