import React from 'react';
import Radium from 'radium';
import {Link as ReactRouterLink} from 'react-router';
const Link = Radium(ReactRouterLink);

const SingleUser = (props) => {
    const styles = {
        thumbnailStyle: {
            cursor: "pointer",
            borderRadius: 0,
            border: "none",
            padding: "15px",
            background: "white",
            transition: "boxShadow .3s ease-in-out",
            boxShadow: "1px 1px 1px #ecf0f1",
            boxSizing: "border-box",
            minHeight: "300px",
            border: "0.5px solid lightgrey",
            ":hover": {
                boxShadow: "5px 5px 5px 5px #ecf0f1",
                // transform: "scale(1.01)"
            }
        },
        singleUserStyle: {
            // padding: "0 8px",
        },
        detail: {
            textDecoration: "none",
            transition: "display .5s ease-in-out",
            padding: "10px",
            color: "black"
        }
    };
    return (
        // col-sm-6 col-md-3
        <Link to={`/userDetail/${props.user._id}`} key={props.index}>
            <div className="" style={styles.singleUserStyle} key={props.index + 2}>
                <div className="thumbnail" style={styles.thumbnailStyle} key={props.index + 3}>
                    <img src={props.user.image} alt="..."/>
                    <div className="caption">
                        <h4>{props.user.bio.firstName} {props.user.bio.lastName}</h4>
                        <span>Job Title | @companyName</span>
                    </div>
                    <div className="detail" style={styles.detail} key={props.index + 1}>
                        <span>Phone Number 1234567895</span><br/>
                        <span>{props.user.email}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default SingleUser;
