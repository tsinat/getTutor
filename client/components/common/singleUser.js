import React from 'react';
import Radium from 'radium';
import {Link as ReactRouterLink} from 'react-router';
const Link = Radium(ReactRouterLink);

function getStyles(){
    return {
        thumbnailStyle:{
            cursor: "pointer",
            borderRadius: 0,
            border: "none",
            padding: "10px",
            background: "white",
            transition: "boxShadow .3s ease-in-out",
            boxShadow: "1px 1px 1px 1px lightgrey",
            boxSizing: "border-box",
            ":hover": {
                boxShadow: "3px 3px 3px 3px lightgrey",
                transform: "scale(1.01)"
            }
        },
        singleUserStyle: {
            padding: "0 8px",
        },
        detail: {
            textDecoration: "none",
            transition: "display .5s ease-in-out",
            padding: "10px",
            color: "black",
        }
    }
}
const SingleUser = (props) => {
    const styles = getStyles();
    return (
        <Link to={`/userDetail/${props.user._id}`} key={props.index}>
            <div className="col-sm-6 col-md-3" style={styles.singleUserStyle} key={props.index+2}>
                <div className="thumbnail" style={styles.thumbnailStyle} key={props.index+3}>
                    <img src={ props.user.image } alt="..." />
                    <div className="caption">
                        <h4>{props.user.firstName} {props.user.lastName}</h4>
                        <span>Job Title | @companyName</span>
                    </div>
                    <div className="detail" style={styles.detail} key={props.index+1}>
                        <span>Phone Number 1234567895</span><br />
                        <span>{props.user.email}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}


export default SingleUser;
