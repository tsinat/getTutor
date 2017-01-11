import React, { Component } from 'react';

const UserDetailPic = (props) => {
    const styles = {
        listItem: {
            marginTop: "40px",
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
            width:"100%",
            height: "auto",
        }
    }
    return (
        <div className="row">
            <div className="list-group-item col-xs-12"
                style={styles.listItem}>
                <div className="text-center circle">
                    <div style={styles.imgContainer}>
                        <img src={props.data.image} style={styles.imageStyle}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetailPic;
