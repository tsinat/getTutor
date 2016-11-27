import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';

const form =  reduxForm({
    form: 'profileEducation',
    fields: [ 'firstName', 'lastName', 'email', 'educations'],
    // validate
});

class ProfileEducation extends Component {
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
            }
        }
    }
    renderItemOrEditField() {
        const styles = this.getStyles();
        if(this.state.editing !== true){
            return (
                <div className="row">
                    <div className="list-group-item col-xs-8 col-xs-offset-2" onClick={this.toggleEditing}>
                        <span className="pull-right">
                            <i className='glyphicon glyphicon-edit text-success' onClick={this.toggleEditing}></i>
                        </span>
                        <h4>Education</h4>
                        <p className="">
                            <strong>School:</strong> {  this.props.data.education.school }
                        </p>
                        <p className="">
                            <strong>Degree:</strong> {  this.props.data.education.degree }
                        </p>
                        <p className="">
                            <strong>Field of Study:</strong> {  this.props.data.education.field}
                        </p><br />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row ">
                    <div className="col-xs-8 col-xs-offset-2">
                        <form>
                            <ul className="list-group-item" style={styles.ulStyles}>
                                <li >
                                    <label>School:</label>
                                    <input name="firstName" type="text" className="form-control" defaultValue={this.props.data.education.school}/>
                                </li>
                                <li className="">
                                    <label className="">Degree:</label>
                                    <input name="lastName"  type="text" className="form-control" defaultValue={this.props.data.education.degree}/>
                                </li>
                                <li className="">
                                    <label>Field of Study:</label>
                                    <input name="email" type="text" className="form-control" defaultValue={this.props.data.education.field}/>
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

export default connect(null)(form(ProfileEducation));
