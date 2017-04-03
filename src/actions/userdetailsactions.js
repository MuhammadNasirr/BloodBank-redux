import * as firebase from 'firebase';
import actionTypes from '../reducers/actionTypes';

export function allBlood(blood) {
  return dispatch=>{
    var array=[];
    // alert("asdhjfajklhf")
     firebase.database().ref().child('Bloodgroup/').on('value', (data) => {
            var obj = data.val();

            // console.log(obj)

            for (var prop in obj) {

              array.push(obj[prop]);
              // console.log("asdasd");
// console.log(array)
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
    }
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
  console.log(allinfo)
}
function newdonoraction(donorinfo) {
  return {
    type: actionTypes.AllDonorInfo,
    donorinfo
  }
}