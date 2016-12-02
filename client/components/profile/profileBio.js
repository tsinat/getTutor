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
        };
        this.toggleEditing = this.toggleEditing.bind(this);
    }
    getStyles() {
        return {
            ulStyles: {
                listStyle: "none"
            },
            listItem: {
                borderRadius: 0,
                // border: "none"
            }
        }
    }
    renderItemOrEditField() {
        const styles = this.getStyles();
        if(this.state.editing !== true){
            return (
                <div className="row">
                    <div className="list-group-item col-xs-10 col-xs-offset-1" onClick={this.toggleEditing} style={styles.listItem}>
                        <span className="pull-right">
                            <i className='glyphicon glyphicon-edit text-success' onClick={this.toggleEditing}></i>
                        </span>
                        <p className="">
                            <strong>First Name:</strong> {  this.props.data.firstName }
                        </p>
                        <p className="">
                            <strong>Last Name:</strong> {  this.props.data.lastName }
                        </p>
                        <p className="">
                            <strong>Email:</strong> {  this.props.data.email }
                        </p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row ">
                    <div className="col-xs-10 col-xs-offset-1">
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
                                    <input name="email" type="text" className="form-control" defaultValue={this.props.data.email}/>
                                </li><br />
                                <li className="btn-group">
                                    <button action="submit" className="btn btn-primary">Update</button>
                                    <button  className="btn btn-default">Cancel</button>
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

export default connect(null)(form(ProfileBioList));
