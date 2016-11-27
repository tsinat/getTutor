import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';

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
    getStyles() {
        return {
            ulStyles: {
                listStyle: "none"
            }
        }
    }
    renderItemOrEditField() {
        const styles = this.getStyles();
        if(this.state.editing !== true){
            return (
                <div className="list-group-item col-xs-8 col-xs-offset-2">
                    <p className="">
                        <strong>First Name:</strong> {  this.props.data.firstName }
                    </p>
                    <p className="">
                        <strong>Last Name:</strong> {  this.props.data.lastName }
                    </p>
                    <p className="">
                        <strong>Education:</strong> {  this.props.data.education }
                    </p>
                    <p className="text-right">
                        <button className='btn btn-default' onClick={this.toggleEditing.bind(this)}>Edit</button>
                    </p>
                </div>
            );
        } else {
            return (
                <div className="row ">
                    <div className="col-xs-8 col-xs-offset-2">
                        <form>
                            <ul className="list-group-item" style={styles.ulStyles}>
                                <li >
                                    <label>First Name:</label>
                                    <input name="firstName" type="text" className="form-control" defaultValue={this.props.data.firstName}/>
                                </li>
                                <li className="">
                                    <label className="">Last Name:</label>
                                    <input name="lastName"  type="text" className="form-control" defaultValue={this.props.data.lastName}/>
                                </li>
                                <li className="">
                                    <label>Email:</label>
                                    <input name="email" type="text" className="form-control" defaultValue={this.props.data.education}/>
                                </li>
                                <li className="">
                                    <label>Mentor/Mentee:</label>
                                    <select name="status" className="form-control">
                                        <option></option>
                                        <option>Mentor</option>
                                        <option>Mentee</option>
                                    </select>
                                </li><br />
                                <li>
                                    <button action="submit" className="btn btn-primary">Update</button>
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
        console.log(this.props);
        return (
            <div>
                {this.renderItemOrEditField()}
            </div>
        );
    }
}

export default connect(null)(form(ProfileBioList));
