import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import  { connect } from 'react-redux';
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import  * as actions from '../../actions';
import InputField from '../common/inputField';
import SelectField from '../common/selectField';
import validate from '../common/validation';

const form =  reduxForm({
    form: 'signup',
    fields: [ 'firstName', 'lastName', 'email', 'password', 'passwordConfirm'],
    validate
});

class Signup extends Component {

    getStyles() {
        return {
            signupStyle: {
                borderRadius: 0,
                height: "100%",
                padding: "0 20px",
            },
            jambotronStyle: {
                padding: "0 40px 40px",
                borderRadius: 0,
                background: "transparent",
                marginTop: "20px",
            }
        }
    }

    handleFormSubmit(formProps) {
        const newUser = {
            bio: { firstName: formProps.firstName, lastName: formProps.lastName },
            email: formProps.email,
            status: formProps.status,
            category: formProps.category,
            password: formProps.password
        }
        this.props.signupUser(newUser);
    }

    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Opps!</strong> {this.props.errorMessage }
                </div>
            );
        }
    }

    render() {
        const styles = this.getStyles();
        const { handleSubmit,
            fields: { firstName,
                lastName,
                email,
                status,
                category,
                password,
                passwordConfirm }} = this.props;

        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppearTimeout={500}
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}>
                <div className="container">
                    <div className="row " style={styles.signupStyle}>
                        <div className="col-xs-12  col-md-10 col-md-offset-1 jumbotron" style={styles.jambotronStyle}>
                            <form onSubmit={handleSubmit( this.handleFormSubmit.bind(this))}>
                                <div className="row">
                                    <div>
                                        <h3 className="text-center">Sign Up</h3>
                                        <hr /><br />
                                    </div>
                                    <fieldset className="form-group col-xs-12 col-md-6">
                                        <label>First Name:</label>
                                        <Field name="firstName" component={InputField} type="text" />
                                    </fieldset>
                                    <fieldset className="form-group col-xs-12 col-md-6">
                                        <label>Last Name:</label>
                                        <Field name="lastName" component={InputField} type="text" />
                                    </fieldset>
                                </div>
                                <fieldset className="form-group">
                                    <label>Email:</label>
                                    <Field name="email" component={InputField} type="email" />
                                </fieldset>
                                <div className="row">
                                    <fieldset className="form-group col-xs-12 col-md-6">
                                        <label>Mentor/Mentee:</label>
                                        <Field name="status" component={SelectField}>
                                            <option></option>
                                            <option>Mentor</option>
                                            <option>Mentee</option>
                                        </Field>
                                    </fieldset>
                                    <fieldset className="form-group col-xs-12 col-md-6">
                                        <label>Category:</label>
                                        <Field name="category" component={SelectField}>
                                            <option></option>
                                            <option>Web Development</option>
                                            <option>Networking</option>
                                            <option>Graphic Design</option>
                                            <option>Academic Tutor</option>
                                            <option>Language Mentor</option>
                                            <option>Vocational Training</option>
                                        </Field>
                                    </fieldset>
                                </div>
                                <fieldset className="form-group ">
                                    <label>Password:</label>
                                    <Field name="password" component={InputField} type="password" />
                                </fieldset>
                                <fieldset className="form-group ">
                                    <label>Confirm Password:</label>
                                    <Field name="passwordConfirm" component={InputField} type="password"/>
                                </fieldset>
                                { this.renderAlert() }
                                <br />
                                <button action="submit" className="btn btn-primary btn-block">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        auth: state.auth.authenticated
    };
}

export default connect(mapStateToProps, actions)(form(Signup));
