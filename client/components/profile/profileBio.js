import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';

import ProfileBio from '../common/commonProfileBio';

const form =  reduxForm({
    form: 'profileEdit',
    fields: [ 'firstName', 'lastName', 'email', 'educations'],
    // validate
});

class ProfileBioList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            firstName: this.props.data.bio.firstName ,
            lastName: this.props.data.bio.lastName,
            email: this.props.data.email
        };
        this.toggleEditing = this.toggleEditing.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    getStyles() {
        return {
            ulStyles: {
                listStyle: "none"
            },
            listItem: {
                borderRadius: 0,
                boxShadow: "1px 1px 1px lightgrey"
            }
        }
    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleUpdate(e) {
        e.preventDefault();
        this.props.updateProfile({bio:this.state});
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
                <div className="row ">
                    <div className="col-xs-10 col-xs-offset-1">
                        <form>
                            <ul className="list-group-item" style={styles.ulStyles}>
                                <li >
                                    <label>First Name:</label>
                                    <input
                                        name="firstName"
                                        type="text"
                                        className="form-control"
                                        value={this.state.firstName}
                                        onChange={this.onChange}/>
                                </li>
                                <li className="">
                                    <label className="">Last Name:</label>
                                    <input
                                        name="lastName"
                                        type="text"
                                        className="form-control"
                                        value={this.state.lastName}
                                        onChange={this.onChange}/>
                                </li>
                                <li className="">
                                    <label>Email:</label>
                                    <input
                                        name="email"
                                        type="text"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.onChange}/>
                                </li><br />
                                <li className="btn-group">
                                    <button
                                        onClick={this.handleUpdate}
                                        action="submit"
                                        className="btn btn-primary">Update</button>
                                    <button
                                        onClick={this.toggleEditing}
                                        className="btn btn-default">Cancel</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            );
        }
    }
    toggleEditing(e){
        e.preventDefault();
        this.setState({editing: !this.state.editing});
    }
    render(){
        return (
            <div>
                {this.renderItemOrEditField()}
            </div>
        );
    }
}

ProfileBioList.defaultProps = {
    data: {
        image: "https://avatars0.githubusercontent.com/u/11866441?v=3",
        bio: {
            firstName: "First Name",
            lastName: "Last Name"
        },
        summary: "Please fill summary here",
        education: {
            school: "school",
            field: "Field",
            degree: "degree"
        }
    }
}

export default connect(null)(form(ProfileBioList));
