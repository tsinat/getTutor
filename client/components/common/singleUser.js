import React from 'react';
import Radium from 'radium';

function getStyles(){
    return {
        thumbnailStyle:{
            borderRadius: 0,
            border: "none",
            padding: "10px",
            background: "white",
            boxShadow: "1px 1px 1px lightgrey",
            border: "1px solid lightgrey",
            ":hover": {
                background: "red"
            }
        },
        singleUserStyle: {
            padding: "0 8px",
        },
        detail: {
            padding:"10px"
        }
    }
}
const SingleUser = () => {
    const styles = getStyles();
    return (
            <div className="col-sm-6 col-md-3" style={styles.singleUserStyle}>
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
}


export default SingleUser;
