import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

function getStyles() {
    return {
        headerContainer: {
            position: "relative",
            width: "100%",
            zIndex: 0,
            marginRight: "-15px",
            paddingBottom: 0,
        },
        containerVideo: {
            position: "relative",
            width: "100%",
            marginTop: "-80px"
        },
        headerTextStyle: {
            position: "absolute",
            top: "30%",
            left:0,
            zIndex: 1,
            width: "100%",
            color: "white",
            fontSize: "2em"
        },
        buttonStyle: {
            background: "#F05A50",
            // opacity:0.6,
            color: "white",
            fontWeight: "bold",
            fontSize: "1em",
            borderRadius: "10px",
            border: "none"
        }
    }
}
const Header = () => {
    const styles = getStyles();
    return (
        <div className="row" >
            <div className="col-sm-12" style={styles.headerContainer}>
                <video
                    src="https://s3-us-west-2.amazonaws.com/coverr/mp4/Spacious.mp4"
                    type="video/mp4" autoPlay="autoplay" loop
                    style={styles.containerVideo}>
                </video>
                <div style={styles.headerTextStyle} className="text-center">
                    <h1>GetMentor</h1>
                    <h1>The easiest way to get local or online mentor</h1><br/>
                    <Link className="btn btn-default " style={styles.buttonStyle}>How it works?</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
