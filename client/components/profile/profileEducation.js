import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';

import ProfileEdu from '../common/commonProfileEducation';

const form =  reduxForm({
    form: 'profileEducation',
    fields: [ 'firstName', 'lastName', 'email', 'educations'],
    // validate
});

class ProfileEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            school: this.props.data.education.school,
            degree: this.props.data.education.degree,
            field: this.props.data.education.field
        };
        this.toggleEditing = this.toggleEditing.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    getStyles() {
        return {
            ulStyles: {
                listStyle: "none"
            }
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateProfile({ education:this.state });
        this.toggleEditing();
    }
    toggleEditing(){
        this.setState({editing: !this.state.editing});
    }
    renderItemOrEditField() {
        const styles = this.getStyles();
        if(this.state.editing !== true){
            return (
                <ProfileEdu
                    toggleEditing={this.toggleEditing}
                    data={this.props.data}
                    styles={styles}
                    />
            );
        } else {
            return (
                <div className="row ">
                    <div className="col-xs-10 col-xs-offset-1">
                        <form>
                            <ul className="list-group-item" style={styles.ulStyles}>
                                <li >
                                    <label>School:</label>
                                    <input
                                        name="school"
                                        type="text"
                                        className="form-control"
                                        onChange={this.onChange }
                                        value={this.state.school}/>
                                </li>
                                <li className="">
                                    <label className="">Degree:</label>
                                    <input
                                        name="degree"
                                        type="text"
                                        className="form-control"
                                        onChange={this.onChange }
                                        value={this.state.degree}/>
                                </li>
                                <li className="">
                                    <label>Field of Study:</label>
                                    <input
                                        name="field"
                                        type="text"
                                        className="form-control"
                                        onChange={this.onChange }
                                        value={this.state.field}/>
                                </li><br />
                                <li className="btn-group">
                                    <button
                                        onClick={this.handleUpdate}
                                        action="submit" className="btn btn-primary">Update</button>
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
    toggleEditing(){
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

export default connect(null)(form(ProfileEducation));
