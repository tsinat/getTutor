import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as actions from '../../actions';
import InputField from '../common/inputField';
import validate from '../common/validation';

const form = reduxForm({
    form: 'signin',
    fields: [
        'email', 'password'
    ],
    validate
});

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = { showSignin: false };
    }

    handleFormSubmit({email, password}) {
        console.log('email and password:', {email, password});
        this.props.signinUser({email, password});
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Opps!</strong>
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    getStyles() {
        return {
            signinStyle: {
                background: "inherit",
                height: "100%",
                padding: "0 20px",
            },
            jumbotronStyle: {
                padding: "0 40px 40px",
                borderRadius: 0,
                background: "transparent",
                marginTop: "20px",
                // boxShadow:"12px 15px 20px 0px rgba(46,61,73,0.15)"
            },
            hrStyle: {
                borderColor: "#ffffff"
            }
        }
    }

    render() {
        const styles = this.getStyles();
        const {
            handleSubmit,
            fields: {
                email,
                password
            }
        } = this.props;
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppearTimeout={500}
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}>
                <div className="container">
                    <div className="row " style={styles.signinStyle}>
                        <div className="col-xs-12  col-md-10 col-md-offset-1 jumbotron" style={styles.jumbotronStyle}>
                            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                <div className="row">
                                    <div>
                                        <h3 className="text-center">Sign In</h3>
                                        <hr style={styles.hrStyle}/><br />
                                    </div>
                                    <fieldset className="form-group col-xs-12 col-md-6">
                                        <label>Email:</label>
                                        <Field name="email" component={InputField} type="email"/>
                                    </fieldset>
                                    <fieldset className="form-group col-xs-12 col-md-6">
                                        <label>Password:</label>
                                        <Field name="password" component={InputField} type="password"/>
                                    </fieldset>
                                </div>
                                {this.renderAlert()}
                                <br />
                                <button action="submit" className="btn btn-primary btn-block">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

function mapStateToProps(state) {
    return {errorMessage: state.auth.error, auth: state.auth.authenticated};
}

export default connect(mapStateToProps, actions)(form(Signin));
