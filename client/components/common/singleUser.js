import React from 'react';
import Radium from 'radium';

function getStyles(){
    return {
        thumbnailStyle:{
            borderRadius: 0,
            border: "none",
            padding: 0,
            boxShadow: "1px 1px 1px silver"
        }
    }
}

const SingleUser = () => {
    const styles = getStyles();
    return (
            <div className="col-sm-6 col-md-3">
                <div className="thumbnail" style={styles.thumbnailStyle}>
                    <img src="https://assets.entrepreneur.com/content/16x9/822/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg" alt="..." />
                    <div className="caption">
                        <h3>Thumbnail label</h3>
                        <p>...</p>
                    </div>
                </div>
            </div>
    );
}

export default SingleUser;
