import * as firebase from 'firebase';
import actionTypes from '../reducers/actionTypes';

export function allBlood(blood) {
  return dispatch => {
    var array = [];
      firebase.database().ref().child('Bloodgroup/').on('value', (data) => {
            var obj = data.val()
            // console.log(obj)
            for(var a in obj){
      for(var b in obj[a]){
        array.push(obj[a][b]);
        //  array.push(obj)
      }    
  console.log(array)
  }
          })
      dispatch(newalldonoraction(array))
  }
}
export function takeBlood(bloodgroup) {
  return dispatch => {
    console.log("your userdetatilaction is working properly")
    console.log(bloodgroup)
    var arr = [];
    var donors = []
    switch (bloodgroup) {
      case "A+":
        donors.push(['A+', 'O+', 'A-', 'O-']);

        break;

      case "B+": {
        donors.push(['B+', 'O+', 'B-', 'O-']);
        break;
      }
      case "AB+": {
        donors.push(['AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-']);
        break;
      }
      case "O+": {
        donors.push(['O+', 'O-']);
        break;
      }
      case "A-": {
        donors.push(['A-', 'O-']);
        break;
      }
      case "B-": {
        donors.push(['B-', 'O-']);
        break;
      }
      case "AB-": {
        donors.push(['AB-', 'O-', 'A-', 'B-']);
        break;
      }
      case "O-": {
        donors.push(['O-']);
        break;
      }
      default: {
        return bloodgroup
      }
    }
      // setTimeout(takeBlood(),3000)
    donors.map((val, index) => {
      return val.map((v, i) => {
        return (
          firebase.database().ref().child('Bloodgroup/' + v + '/').on('value', (data) => {
            var obj = data.val();
            console.log(obj)
            for (var prop in obj) {
              arr.push(obj[prop]);
              console.log(arr);
            }
          })
        )
      })
    })
    dispatch(newdonoraction(arr)) 
  }
}
function newalldonoraction(allinfo) {
  return {
    type: actionTypes.AllGetDonorInfo,
    allinfo
  }
}
function newdonoraction(donorinfo) {
  return {
    type: actionTypes.AllDonorInfo,
    donorinfo
  }
}