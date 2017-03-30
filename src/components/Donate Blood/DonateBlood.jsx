import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';



class DonateBlood extends Component {
    render() {
        return (
            <div>
                <TextField
                    hintText="First Name"
                /><br />
                <br />
                <TextField
                    hintText="Father Name"
                /><br />
                <TextField
                    id="text-field-default"
                    defaultValue="Default Value"
                /><br />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Floating Label Text"
                /><br />
                <TextField
                    defaultValue="Default Value"
                    floatingLabelText="Floating Label Text"
                /><br />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                /><br />
                <TextField
                    hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"
                /><br />
                <TextField
                    hintText="MultiLine with rows: 2 and rowsMax: 4"
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                /><br />
                <TextField
                    hintText="Message Field"
                    floatingLabelText="MultiLine and FloatingLabel"
                    multiLine={true}
                    rows={2}
                /><br />
                <TextField
                    hintText="Full width"
                    fullWidth={true}
                />
            </div>
        )
    }
}
export default DonateBlood