import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

function getStyles() {
    return {
        headerContainer: {
            position: "relative",
            margin:0,
            padding:0,
            width: "100%",
            zIndex: 0,
            marginBottom: "-5px",
        },
        containerVideo: {
            position: "relative",
            width: "100%",
            marginTop: "-80px",
        },
        headerTextStyle: {
            position: "absolute",
            top: "40%",
            left:0,
            zIndex: 1,
            width: "100%",
            color: "white",
            fontSize: "2em"
        },
        buttonStyle: {
            background: "white",
            opacity:0.8,
            color: "#F05A50",
            fontWeight: "bold",
            fontSize: "0.9em",
            borderRadius: "5px",
            border: "none",
            padding: "7px 30px"
        },
        glyphiconStyle: {
            background: "transparent",
            marginTop:"60px",
            border:"none",
            padding:"0 20",
            fontSize: "1.2em"
        }
    }
}
const Header = (props) => {

    const styles = getStyles();
    return (
        <div className="row" >
            <div className="col-sm-12 text-center" style={styles.headerContainer}>
                <video
                    src="https://s3-us-west-2.amazonaws.com/coverr/mp4/Park-Traffic.mp4"
                    type="video/mp4" autoPlay="autoplay" loop
                    style={styles.containerVideo}>
                </video>
                <div style={styles.headerTextStyle} className="text-center">
                    <h1>GetMentor</h1>
                    <h2>The easiest way to get local or online mentor</h2><br/>
                    <Link to="/signup" className="btn btn-default " style={styles.buttonStyle}>How it works ?</Link><br />
                    <i className="glyphicon glyphicon-chevron-down" style={styles.glyphiconStyle} onClick={props.scrollUp}></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
