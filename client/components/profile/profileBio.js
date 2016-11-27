import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const form =  reduxForm({
    form: 'profileEdit',
    fields: [ 'firstName', 'lastName', 'email', 'educations'],
    // validate
});

class ProfileBioList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }
    renderItemOrEditField() {
        if(this.state.editing !== true){
            return (
                <div className="list-group">
                    <p className="list-group-item">
                        <strong>First Name:</strong> {  this.props.data.firstName }
                    </p>
                    <p className="list-group-item">
                        <strong>Last Name:</strong> {  this.props.data.lastName }
                    </p>
                    <p className="list-group-item">
                        <strong>Education:</strong> {  this.props.data.education }
                    </p>
                    <button className='btn btn-default' onClick={this.toggleEditing.bind(this)}>Edit</button>
                </div>
            );
        } else {
            return (
                <div className="row ">
                    <div className="col-xs-6 col-xs-offset-3 ">
                        <form>
                            <fieldset className="form-group">
                                <label>First Name:</label>
                                <input name="firstName" type="text" className="form-control" defaultValue={this.props.data.firstName}/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Last Name:</label>
                                <input name="lastName"  type="text" className="form-control" defaultValue={this.props.data.lastName}/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Email:</label>
                                <input name="email" type="text" className="form-control" defaultValue={this.props.data.education}/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Mentor/Mentee:</label>
                                <select name="status" className="form-control">
                                    <option></option>
                                    <option>Mentor</option>
                                    <option>Mentee</option>
                                </select>
                            </fieldset>
                            <button action="submit" className="btn btn-primary">Update</button>
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
        console.log(this.props);
        return (
            <div>
                {this.renderItemOrEditField()}
            </div>
        );
    }
}

export default connect(null)(form(ProfileBioList));
