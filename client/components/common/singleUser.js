import React from 'react';
import Radium from 'radium';
import { Link as ReactRouterLink } from 'react-router';
const Link = Radium(ReactRouterLink);

const SingleUser = (props) => {
    const styles = {
        thumbnailStyle: {
             background:"#FFFFFF",
             border: "none",
             borderRadius: "0",
             padding: "15px",
             boxShadow: "1px 1px 1px lightgrey",
             boxShadow:"5px 5px 5px 0px rgba(46,61,73,0.15)",
             position: 'relative',
             overflow: 'hidden',
            ":hover": {
                boxShadow:"7px 15px 10px 0px rgba(46,61,73,0.15)",
                cursor: "pointer",
                boxSizing: "border-box"
            }
        },
        imgStyle: {
            width: "100%",
            height: "auto",

        },
        imgContainer: {
            overflow: "hidden",
            textAlign: "center",
            margin: "0 auto",
            maxHeight: "260px",
        },
        nameStyle: {
            color:"#697881",
            marginTop: 0,
            textDecoration: "none"
        },
        hrStyle: {
            margin: 0,
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
            <div className=""  key={props.index + 2}>
                <div className="thumbnail" style={styles.thumbnailStyle} key={props.index + 3}>
                    <div style={styles.imgContainer}>
                        <img src={props.user.image} alt="..."  style={styles.imgStyle}/>
                    </div>
                    <div className="caption">
                        <h4 className="text-center" style={styles.nameStyle}>{props.user.bio.firstName} {props.user.bio.lastName}</h4>
                        <hr style={styles.hrStyle}/>
                        <h4>{props.user.category}</h4>
                        <p>Twitter: <a href={props.user.bio.website} target="_blank">{props.user.bio.twitter}</a></p>
                        <p>Website: <a href={props.user.bio.website} target="_blank">{props.user.bio.website}</a></p>
                        <p>Courses: <a href={props.user.bio.specialization} target="_blank">{props.user.bio.specialization}</a></p>
                    </div>
                    <div className="detail" style={styles.detail} key={props.index + 1}>
                        <span>{props.user.email}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default SingleUser;
