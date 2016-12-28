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
            top: "50%",
            left:0,
            zIndex: 1,
            width: "100%",
            color: "white",
            fontSize: "2em"
        },
        headerText : {
            borderBottom: "5px solid #F05A50"
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
        <div className="row" key='x'>
            <div className="col-sm-12 text-center" style={styles.headerContainer} key='a'>
                <video
                    src="https://s3-us-west-2.amazonaws.com/coverr/mp4/Park-Traffic.mp4"
                    type="video/mp4" autoPlay="autoplay" loop
                    style={styles.containerVideo} key='b'>
                </video>
                <div style={styles.headerTextStyle} className="text-center" key='c'>
                    <h1 key='x' ><span style={styles.headerText}>GetMentor</span></h1>
                    <h2 key='y'>The easiest way to get local or online mentor</h2>
                    <i className="glyphicon glyphicon-chevron-down" style={styles.glyphiconStyle} onClick={props.scrollUp} key='e'></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
