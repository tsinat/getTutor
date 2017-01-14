import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';

import ProfileBio from '../common/commonProfileBio';

const form =  reduxForm({
    form: 'profileEdit',
    fields: [ 'firstName', 'lastName', 'email', 'tel', 'specialization', 'website'],
});

class ProfileBioList extends Component {
    constructor(props) {
        super(props);
        const {
             bio: {
               firstName = '',
               lastName = '',
               tel = '',
               specialization = '',
               website = ''
             } = {},
             email = '',
         } = this.props.data;

        this.state = {
            editing: false,
            firstName: firstName,
            lastName: lastName,
            email: email,
            tel: tel,
            specialization: specialization,
            website: website
        };
        this.toggleEditing = this.toggleEditing.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getStyles() {
        return {
            btnGroup: {
                marginLeft: "14px"
            }
        }
    }

    onChange(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateProfile({bio:this.state});
        this.toggleEditing(e);
    }

    toggleEditing(e){
        e.preventDefault();
        this.setState({editing: !this.state.editing});
    }

    renderItemOrEditField() {
        const styles = this.getStyles();
        if(this.state.editing !== true){
            return (
                <ProfileBio
                    toggleEditing={this.toggleEditing}
                    data={this.props.data}
                    styles={styles}/>
            );
        } else {
            return (
                <div className="row list-group-item">
                    <form>
                        <div>
                            <fieldset className="form-group col-xs-12 col-md-6">
                                <label>First Name:</label>
                                <input
                                    name="firstName"
                                    type="text"
                                    className="form-control"
                                    value={this.state.firstName}
                                    onChange={this.onChange}/>
                            </fieldset>
                            <fieldset className="form-group col-xs-12 col-md-6">
                                <label className="">Last Name:</label>
                                <input
                                    name="lastName"
                                    type="text"
                                    className="form-control"
                                    value={this.state.lastName}
                                    onChange={this.onChange}/>
                            </fieldset>
                            <fieldset className="form-group col-xs-12 col-md-6">
                                <label>Email:</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChange}/>
                            </fieldset>
                            <fieldset className="form-group col-xs-12 col-md-6">
                                <label>Tel:</label>
                                <input
                                    name="tel"
                                    type="text"
                                    className="form-control"
                                    value={this.state.tel}
                                    onChange={this.onChange}/>
                            </fieldset>
                            <fieldset className="form-group col-xs-12 col-md-6">
                                <label>Website:</label>
                                <input
                                    name="website"
                                    type="url"
                                    className="form-control"
                                    value={this.state.website}
                                    onChange={this.onChange}/>
                            </fieldset>
                            <fieldset className="form-group col-xs-12 col-md-6">
                                <label>Specialization:</label>
                                <input
                                    name="specialization"
                                    type="text"
                                    className="form-control"
                                    value={this.state.specialization}
                                    onChange={this.onChange}/>
                            </fieldset>
                            <fieldset className="btn-group" style={styles.btnGroup}>
                                <button
                                    onClick={this.handleUpdate}
                                    action="submit"
                                    className="btn btn-primary">Update</button>
                                <button
                                    onClick={this.toggleEditing}
                                    className="btn btn-default">Cancel</button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            );
        }
    }

    render(){
        return (
            <div>
                {this.renderItemOrEditField()}
            </div>
        );
    }
}

export default connect(null)(form(ProfileBioList));
