import React from 'react';
import Radium from 'radium';
import { Link as ReactRouterLink } from 'react-router';
const Link = Radium(ReactRouterLink);

const SingleUser = (props) => {
    const styles = {
        thumbnailStyle: {
            background: "#FFFFFF",
            border: "none",
            borderRadius: "0",
            padding: "15px",
            boxShadow: "1px 1px 1px lightgrey",
            position: 'relative',
            overflow: 'hidden',
            ":hover": {
                boxShadow: "7px 15px 10px 0px rgba(46,61,73,0.15)",
                cursor: "pointer",
                boxSizing: "border-box"
            }
        },
        imgStyle: {
            width: "100%",
            height: "auto"
        },
        imgContainer: {
            overflow: "hidden",
            textAlign: "center",
            margin: "0 auto",
            maxHeight: "260px"
        },
        nameStyle: {
            color: "#697881",
            marginTop: 0,
            textDecoration: "none"
        },
        hrStyle: {
            margin: 0
        },
        linkStyle: {
            textDecoration: "none"
        },
        detail: {
            textDecoration: "none",
            transition: "display .5s ease-in-out",
            padding: "10px",
            color: "black"
        }
    };
    return (
        <Link to={`/userDetail/${props.user._id}`} key={props.index} style={styles.linkStyle}>
            <div className="" key={props.index + 2}>
                <div className="thumbnail" style={styles.thumbnailStyle} key={props.index + 3}>
                    <div style={styles.imgContainer}>
                        <img src={props.user.image} alt="..." style={styles.imgStyle}/>
                    </div>
                    <div className="caption">
                        <h4 className="text-center" style={styles.nameStyle}>{props.user.bio.firstName} {props.user.bio.lastName}</h4>
                        <hr style={styles.hrStyle}/>
                        <h4>{props.user.category}</h4>
                        <p>email: {props.user.email}</p>
                        {props.user.bio.twitter && <p>Twitter: {props.user.bio.twitter}</p>}
                        {props.user.bio.website && <p>Website: {props.user.bio.website}</p>}
                        {props.user.bio.specialization && <p>Courses: {props.user.bio.specialization}</p>}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default SingleUser;
