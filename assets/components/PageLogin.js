import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
export class PageLogin extends Component {
    constructor() {
      super();
    }
    submit = (e) => {
        e.preventDefault();
        console.log('kamam');
        // gather your data/credentials here
        const credentials = { };

        // Dispatch the userLogin action (injected by connect)
        this.props.userLogin(credentials);
    }

    render() {
        return (
            <MuiThemeProvider theme={this.props.theme}>
                <form onSubmit={this.submit}>
                    <TextField id="standard-disabled" label="Disabled" defaultValue="login" />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </form>
            </MuiThemeProvider>
    );
    }
};

// export PageLogin // connect(undefined, { userLogin })();