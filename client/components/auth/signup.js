import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import  * as actions from '../../actions';
import  { connect } from 'react-redux';

const form =  reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
});

class Signup extends Component {
    handleFormSubmit({ email, password, passwordConfirm}) {
        console.log(email, password);
        this.props.signinUser({ email, password, passwordConfirm });
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
            <form onSubmit={handleSubmit( this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name="email" component="input" type="text" className="form-control"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field name="password" component="input" type="password" className="form-control"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <Field name="passwordConfirmation" component="input" type="password" className="form-control"/>
                </fieldset>
                { this.renderAlert() }
                <button action="submit" className="btn btn-primary">Sign up</button>
            </form>

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
