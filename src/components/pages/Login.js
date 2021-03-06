/*
This component renders the log in form and handles firebase sign in.
*/

import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import firebase from "firebase";
import { Grid, Row, Col } from "react-flexbox-grid";
// material ui components
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    // firebase sign in
    handleSignIn(email, password) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                console.log(err);
                this.setState({ errorMessage: err.message });
            });
    }
    // handle user input change
    handleChange(event) {
        let value = event.target.value;
        let field = event.target.name;
        let changes = {};
        changes[field] = value;
        this.setState(changes);
    }
    //render the log in form
    render() {
        return (
            <div>
                {this.props.firebaseUser !== null && (
                    <Redirect to="/userhome/overview" />
                )}
                <Grid fluid>
                    <Row>
                        <Col xsOffset={1} mdOffset={2} lgOffset={3} xs={10} md={8} lg={6}>
                            <h1 className="page-header">Log In</h1>
                            <p className="highlight">{this.state.errorMessage}</p>
                            {["email", "password"].map((d, i) => {
                                return (
                                    <TextField
                                        className="auth-input"
                                        key={i}
                                        name={d}
                                        hintText={d}
                                        floatingLabelText={d}
                                        type={d}
                                        onChange={event => {
                                            this.handleChange(event);
                                        }}
                                        fullWidth={true}
                                    />
                                );
                            })}
                            <RaisedButton
                                className="auth-button"
                                primary={true}
                                onClick={() =>
                                    this.handleSignIn(this.state.email, this.state.password)
                                }
                                label="Sign In"
                            />
                            <Link className="nav-title" to="/">
                                <RaisedButton
                                    className="back-button"
                                    secondary={true}
                                    label="Back"
                                />
                            </Link>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Login;
