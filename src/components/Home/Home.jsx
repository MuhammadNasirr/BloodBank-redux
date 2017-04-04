import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import firebase from 'firebase';
// import {connect}from 'react-redux';
import { connect } from 'react-redux'
// import { signup } from '../../actions/authaction'
import logo from '../AppBar/Images/logo.jpg'
import { Link } from 'react-router';
import { check } from '../../actions/userdetailsactions'

class Home extends Component {
  
  componentWillMount() {
    
  }
 
  
  render() {
    console.log('auht------------', this.props.authAtatus.name)
    return (
      <div className="App">
        <Link to="/donateblood"><RaisedButton  label="Donate Blood" secondary={true} style={{ margin: 12, backgroundColor: "#af111c" }} /></Link>
        <Link to="/Requiredblood"> <RaisedButton  label="Required Blood" secondary={true}   style={{ margin: 12,}} /></Link>
        <br />
                       <img src={logo} style={{ width: "300", height: "600", alignContent: "left" , margin: "20px", opacity: 0.5 }} alt="Blood Bank" />

        {/*{this.props.authAtatus.name}     */}
      </div>
    );
  }
}

// function mapStateToProps(state){
//   return{
//     auth: state.AuthReducer
//   }
// }
// function mapDispatchToProps(dispatch){
// return{
//   signin:(userSignin)=>{
//    dispatch(SignIn(userSignin));
//   }
// }
// }

const mapStateToProps = (state) => {
    return {
        authAtatus: state.AuthReducer.authSignInData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        SignUp: () => {
            dispatch(check());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
