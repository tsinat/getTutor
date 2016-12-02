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
                        <h4>Summary</h4><hr />
                        <p className="">
                            {this.props.data.summary}
                        </p><br />
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
                                    <label><strong>Summary:</strong></label>
                                    <textarea className="form-control" rows='5' defaultValue={this.props.data.summary}></textarea>
                                </li><br />
                                <li className="btn-group">
                                    <button action="submit" className="btn btn-primary">Update</button>
                                    <button  className="btn btn-default" onClick={this.toggleEditing}>Cancel</button>
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

export default connect(null)(form(ProfileSummary));
