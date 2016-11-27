import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';

const form =  reduxForm({
    form: 'profileSummary',
    fields: [ 'summary'],
    // validate
});

class ProfileSummary extends Component {
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
                <div className="list-group-item col-xs-8 col-xs-offset-2" onClick={this.toggleEditing}>
                    <span className="pull-right">
                        <i className='glyphicon glyphicon-edit' onClick={this.toggleEditing}></i>
                    </span>
                    <h4>Summary</h4>
                    <p className="">
                        {this.props.data.summary}
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
                                    <label>Summary:</label>
                                    <textarea className="form-control" defaultValue={this.props.data.summary}></textarea>
                                </li><br />
                                <li>
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
        console.log(this.props);
        return (
            <div>
                {this.renderItemOrEditField()}
            </div>
        );
    }
}

export default connect(null)(form(ProfileSummary));
