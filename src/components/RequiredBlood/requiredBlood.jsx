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
import { takeBlood } from '../../actions/userdetailsactions'
import { allBlood } from '../../actions/userdetailsactions'


import { connect } from 'react-redux';



class RequiredBlood extends React.Component {
    constructor(props) {
        super(props);

        // this.logout = this.logout.bind(this);
        this.state = {
              open: false,
               value: 1
        };
        this.handleallblood = this.handleallblood.bind(this)
        //    this.props.SignUp()

    }
    handleBgroup(e, key) {
        e.preventDefault();
        this.setState({
            value: key + 1,
        })
        var   bloodg = e.target.childNodes[0].nodeValue;
        // console.log(bloodg)
        this.props.TakeBlood(bloodg)

        console.log(this.state.blood)
        // this.props.SignUp(this.state.blood)
    }
    handleallblood() {
        // e.preventDefault();
        this.props.AllBlood()
        // console.log(this.props.allBlood())
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
                     
                        {/*<Link to="/MoreDetails"><RaisedButton label="More Details" secondary={true} style={style} onClick={this.handleallblood} /></Link>*/}
                        <center>
                            <DropDownMenu value={this.state.value} className="style" onChange={this.handleBgroup.bind(this)} style={styles.customWidth}>
                                <MenuItem value={1} primaryText="O+" />
                                <MenuItem value={2} primaryText="O-" />
                                <MenuItem value={3} primaryText="A+" />
                                <MenuItem value={4} primaryText="A-" />
                                <MenuItem value={5} primaryText="B+" />
                                <MenuItem value={6} primaryText="B-" />
                                <MenuItem value={7} primaryText="AB+" />
                                <MenuItem value={8} primaryText="AB-" />
                            </DropDownMenu>
                        </center>
                        <br />
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>ID</TableHeaderColumn>
                                    <TableHeaderColumn>Name</TableHeaderColumn>
                                    <TableHeaderColumn>Blood</TableHeaderColumn>
                                    <TableHeaderColumn>Request</TableHeaderColumn>

                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {this.props.donorInfo.map((val, i) => {
                                    return (
                                        <TableRow>
                                            <TableRowColumn key={i}>{i + 1}</TableRowColumn>
                                            <TableRowColumn key={i}>{val.Name}</TableRowColumn>
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
const mapStateToProps = (state) => {
    return {
        donorInfo: state.donatedetailsreducer.donor,
        // alldonorInfo: state.donatedetailsreducer.donors,
       
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
         TakeBlood: (userSignin) => {
            console.log(userSignin)
            dispatch(takeBlood(userSignin));
            },
            AllBlood: () => {
            dispatch(allBlood());
            }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(RequiredBlood);