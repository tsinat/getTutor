import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';

import ProfileSum from '../common/commonProfileSummary';

const form =  reduxForm({
    form: 'profileSummary',
    fields: [ 'summary'],
    // validate
});

class ProfileSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            summary: this.props.data.summary
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

    handleUpdate() {
        e.preventDefault();
        this.props.updateProfile(this.state);
        this.toggleEditing();
    }

    toggleEditing(){
        this.setState({editing: !this.state.editing});
    }

    renderItemOrEditField() {
        const styles = this.getStyles();
        if(this.state.editing !== true){
            return (
                <ProfileSum
                    toggleEditing={this.toggleEditing}
                    styles={styles}
                    data={this.props.data}
                    />
            );
        } else {
            return (
                <div className="row ">
                    <div className="col-xs-12">
                        <form>
                            <ul className="list-group-item" style={styles.ulStyles}>
                                <li >
                                    <label><strong>Summary:</strong></label>
                                    <textarea
                                        name="summary"
                                        className="form-control"
                                        rows='5'
                                        value={this.state.summary}
                                        onChange={this.onChange}></textarea>
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

    render(){
        return (
            <div>
                {this.renderItemOrEditField()}
            </div>
        );
    }
}

export default connect(null)(form(ProfileSummary));
