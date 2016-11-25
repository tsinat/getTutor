import React from 'react';
import Radium from 'radium';

function getStyles(){
    return {
        thumbnailStyle:{
            borderRadius: 0,
            border: "none",
            boxShadow: "1px 1px 1px silver"
        }
    }
}

const SingleUser = () => {
    const styles = getStyles();
    return (
            <div className="col-sm-6 col-md-3">
                <div className="thumbnail" style={styles.thumbnailStyle}>
                    <img src="https://placeholdit.imgix.net/~text?txtsize=23&bg=ffffff&txtclr=000000&txt=250%C3%97250&w=150&h=150" alt="..." />
                    <div className="caption">
                        <h3>Thumbnail label</h3>
                        <p>...</p>
                    </div>
                </div>
            </div>
    );
}

export default SingleUser;
