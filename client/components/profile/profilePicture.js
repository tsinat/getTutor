import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';

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
    }
    getStyles() {
        return {
            ulStyles: {
                listStyle: "none"
            },
            listItem: {
                borderRadius: "20px 20px 0 0 ",
                // border: "none",
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
    renderItemOrEditField() {
        const styles = this.getStyles();
        if(this.state.editing !== true){
            return (
                <div className="row">
                    <div className="list-group-item col-xs-10 col-xs-offset-1" style={styles.listItem}>
                        <div className="text-center circle">
                            <img src="https://avatars0.githubusercontent.com/u/11866441?v=3" style={styles.imageStyle}/>
                        </div>
                        <p className="text-center">
                            <button className='btn btn-default' onClick={this.toggleEditing}>Change Picture</button>
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

export default connect(null)(form(ProfilePicture));
