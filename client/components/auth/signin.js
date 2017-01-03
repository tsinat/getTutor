import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import Radium from 'radium';
import {connect} from 'react-redux';
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
            },
            jumbotronStyle: {
                borderRadius: 0,
                background: "white",
                marginTop: "40px",
                boxShadow: "5px 5px 5px 5px #ecf0f1"
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
                        <div className="col-xs-8 col-xs-offset-2 jumbotron" style={styles.jumbotronStyle}>
                            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                <fieldset className="form-group">
                                    <label>Email:</label>
                                    <Field name="email" component={InputField} type="email"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Password:</label>
                                    <Field name="password" component={InputField} type="password"/>
                                </fieldset>
                                {this.renderAlert()}
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
