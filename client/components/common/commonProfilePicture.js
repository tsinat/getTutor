import React from 'react';
import Radium from 'radium';

const ProfilePic = (props) => {
    const styles = {
        listItem: {
            // marginTop: "40px",
            borderRadius: 0,
            borderBottom: "2px solid #FAFAFA"
        },
        imgContainer: {
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            margin: "0 auto",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
        },
        imageStyle: {
            width: "100%",
            height: "auto",
            top: 0,
            left: 0,
            right: 0,
        }
    }
    return (
        <div className="row">
            <div className="list-group-item col-xs-12"
                style={styles.listItem}>
                <div className="" style={styles.imgContainer}>
                    <img src={props.data.image} style={styles.imageStyle}/>
                </div>
                <div className="text-center">
                    <button className="btn btn-default" onClick={props.toggleEditing}>Change Picture</button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePic;
