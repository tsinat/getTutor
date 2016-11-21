import React from 'react';
import Radium from 'radium';

function getStyles() {
    return {
        headerContainer: {
            position: "relative",
            zIndex: 0
        },
        containerVideo: {
            position: "relative",
        },
        headerTextStyle: {
            position: "absolute",
            top: "25%",
            left:0,
            zIndex: 1,
            width: "100%",
            color: "white",
            fontSize: "2em"
        },
        buttonStyle: {
            background: "transparent",
            color: "white",
            fontSize: "1em",
            borderRadius: "10px"
        }
    }
}

const Header = () => {
    const styles = getStyles();
    return (
        <div className="row" style={styles.headerContainer}>
            <div className="col-sm-12">
                <video
                    src="https://d2fa3j67sd1nwo.cloudfront.net/video/homepage.020d4af35dca.mp4"
                    type="video/mp4" id='myvideo' autoPlay="autoplay" loop
                    style={styles.containerVideo}>
                </video>
                <div style={styles.headerTextStyle} className="text-center">
                    <h1>getMentor</h1>
                    <h2>The easiest way to get local or online mentor</h2><br />
                    <button className="btn btn-default " style={styles.buttonStyle}>How it works?</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
