import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import  { connect } from 'react-redux';
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import  * as actions from '../../actions';
import InputField from './inputField';
import SelectField from './selectField';

const form =  reduxForm({
    form: 'signup',
    fields: [ 'firstName', 'lastName', 'email', 'password', 'passwordConfirm'],
    validate
});

class Signup extends Component {
    handleFormSubmit(formProps) {
        this.props.signupUser(formProps);
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
    getStyles() {
        return {
            signupStyle: {
                borderRadius: 0
            },
            jambotronStyle: {
                borderRadius: 0,
                background: "white"
            }
        }
    }
    render() {
        const styles = this.getStyles();
        const { handleSubmit, fields: { firstName, lastName, email, status, category, password, passwordConfirm }} = this.props;
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppearTimeout={500}
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}>
                <div className="row " style={styles.signupStyle}>
                    <div className="col-xs-6 col-xs-offset-3 jumbotron" style={styles.jambotronStyle}>
                        <form onSubmit={handleSubmit( this.handleFormSubmit.bind(this))}>
                            <fieldset className="form-group">
                                <label>First Name:</label>
                                <Field name="firstName" component={InputField} type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Last Name:</label>
                                <Field name="lastName" component={InputField} type="text" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Email:</label>
                                <Field name="email" component={InputField} type="email" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Mentor/Mentee:</label>
                                <Field name="status" component={SelectField}>
                                    <option></option>
                                    <option>Mentor</option>
                                    <option>Mentee</option>
                                </Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Category:</label>
                                <Field name="cateogry" component={SelectField}>
                                    <option></option>
                                    <option>Web Development</option>
                                    <option>Networking</option>
                                    <option>Graphic Design</option>
                                    <option>Academic Tutor</option>
                                    <option>Language Mentor</option>
                                    <option>Vocational Training</option>
                                </Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Password:</label>
                                <Field name="password" component={InputField} type="password" />
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Confirm Password:</label>
                                <Field name="passwordConfirm" component={InputField} type="password"/>
                            </fieldset>
                            { this.renderAlert() }
                            <button action="submit" className="btn btn-primary">Sign up</button>
                        </form>
                    </div>
                </div>
        </ReactCSSTransitionGroup>

        );
    }
}
function validate(formProps) {
    const errors = {};

    if (!formProps.firstName) {
      errors.firstName = 'Please enter a first name';
    }
    if (!formProps.lastName) {
      errors.lastName = 'Please enter a last name';
    }
    if (!formProps.email) {
      errors.email = 'Please enter a email';
    }

    if (!formProps.password) {
      errors.password = 'Please enter a password';
    }

    if (!formProps.status) {
      errors.status = 'Please select a status';
    }

    if (!formProps.category) {
      errors.category = 'Please select a category';
    }

    if (!formProps.passwordConfirm) {
      errors.passwordConfirm = 'Please enter a password Confirmation'
    }

    if(formProps.password !== formProps.passwordConfirm) {
        errors.password = "Password must match"
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        auth: state.auth.authenticated
    };
}

export default connect(mapStateToProps, actions)(form(Signup));
