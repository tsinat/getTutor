import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import  * as actions from '../../actions';
import  { connect } from 'react-redux';

const form =  reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    // validate
});

class Signup extends Component {
    handleFormSubmit({ email, password, passwordConfirm}) {
        console.log(email, password);
        this.props.signupUser({ email, password });
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
        const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
        return (
            <div className="row">
                <div className="col-xs-6 col-xs-offset-3">
                    <form onSubmit={handleSubmit( this.handleFormSubmit.bind(this))}>
                        <fieldset className="form-group">
                            <label>Email:</label>
                            <Field name="email" component="input" type="text" className="form-control"/>
                            {/*{email.touched && email.error && <div className="error">{email.error}</div>}*/}
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Password:</label>
                            <Field name="password" component="input" type="password" className="form-control"/>
                            {}
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Confirm Password:</label>
                            <Field name="passwordConfirmation" component="input" type="password" className="form-control"/>
                        </fieldset>
                        { this.renderAlert() }
                        <button action="submit" className="btn btn-primary">Sign up</button>
                    </form>
                </div>
            </div>

        );
    }
}
function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
      errors.email = 'Please enter a email';
    }

    if (!formProps.password) {
      errors.password = 'Please enter a password';
    }

    if (!formProps.passwordConfirm) {
      errors.passwordConfirm = 'Please enter a passwordConfirm'
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
