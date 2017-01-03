import React, { Component } from 'react';

const UserDetailPic = (props) => {
    const styles = {
        listItem: {
            marginTop: "40px",
            borderRadius: 0,
            borderBottom: "2px solid #FAFAFA"
        },
        imageStyle: {
            width:"150px",
            height: "auto",
            borderRadius: "50%",
            border: "1px solid lightgrey",
        }
    }
    return (
        <div className="row">
            <div className="list-group-item col-xs-12"
                style={styles.listItem}>
                <div className="text-center circle">
                    <img src={props.data.image} style={styles.imageStyle}/>
                </div>
            </div>
        </div>
    );
}

export default UserDetailPic;
