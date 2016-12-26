import React, { Component } from 'react';
import SingleUser from '../common/singleUser';
import Radium from 'radium';

class SingleUserList extends Component {
    getStyles() {
        return {
            thumbnailStyle:{
                borderRadius: 0,
                border: "none",
                padding: "10px",
                background: "white",
                boxShadow: "1px 1px 1px lightgrey",
                states: [
                    {
                        hover: {
                            background: "red"
                        }
                    }
                ]
            },
            singleUserStyle: {
                padding: "0 8px",
            },
            detail: {
                padding:"10px",
                ':hover': {
                    color: "red"
                }
            }
        }
    }
    renderUsers() {
        const styles = this.getStyles();
        const temp = [0,1,2,3,4,5,6,7,8,9,11,12];
        const thunnailList = temp.map((thumbnail, index) => {
            // return <SingleUser key={index} style={styles.thumbnailStyle} />
            return (
                <div className="col-sm-6 col-md-3" style={styles.singleUserStyle} key={index}>
                    <div className="thumbnail" style={styles.thumbnailStyle}>
                        <img src="https://assets.entrepreneur.com/content/16x9/822/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg" alt="..." />
                        <div className="caption">
                            <h4>Contact Name</h4>
                            <span>Job Title | @companyName</span>
                        </div>
                        <div className="detail" style={styles.detail}>
                            <span>Phone Number 1234567895</span><br />
                            <span>contact@email.com</span>
                        </div>
                    </div>
                </div>
            );
        });
        return thunnailList;
    }
    render() {
        return(
            <div className="container">
              {this.renderUsers()}
            </div>
        );
    }
}

export default SingleUserList;
