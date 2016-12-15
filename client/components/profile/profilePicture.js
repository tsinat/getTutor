import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';
import ProfilePic from '../common/commonProfilePicture';

const form =  reduxForm({
    form: 'profilePicture',
    fields: [ 'summary'],
    // validate
});

class ProfilePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
        this.toggleEditing = this.toggleEditing.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    getStyles() {
        return {
            ulStyles: {
                listStyle: "none"
            },
            listItem: {
                marginTop: "40px",
                borderRadius: 0,
                borderBottom: "2px solid #FAFAFA"
            },
            imageStyle: {
                width:"150px",
                height: "auto",
                borderRadius: "50%",
                border: "1px solid lightgrey",
            }
        }
    }
    handleUpdate(e) {
        e.preventDefault();
        this.props.updateProfile(this.state);
    }

    renderItemOrEditField() {
        const styles = this.getStyles();
        if(this.state.editing !== true){
            return (
                <ProfilePic
                    styles={styles}
                    toggleEditing={this.toggleEditing}
                    data={this.props.data}
                    />
            );
        } else {
            return (
                <div className="row ">
                    <div className="col-xs-10 col-xs-offset-1">
                        <form>
                            <ul className="list-group-item" style={styles.ulStyles}>
                                <li >
                                    <label><strong>Summary:</strong></label>
                                    <textarea
                                        className="form-control"
                                        rows='5'
                                        defaultValue={this.props.data.summary}></textarea>
                                </li><br />
                                <li className="btn-group">
                                    <button
                                        onClick={this.handleUpdate}
                                        action="submit"
                                        className="btn btn-primary">Update</button>
                                    <button
                                        className="btn btn-default"
                                        onClick={this.toggleEditing}>Cancel</button>
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

export default connect(null)(form(ProfilePicture));
