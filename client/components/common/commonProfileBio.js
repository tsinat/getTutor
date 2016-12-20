import React from 'react';

const ProfileBio = (props) => {
    return (
        <div className="row">
            <div className="list-group-item col-xs-10 col-xs-offset-1" onClick={props.toggleEditing} style={props.styles.listItem}>
                <span className="pull-right">
                    <i className='glyphicon glyphicon-edit text-success' onClick={props.toggleEditing}></i>
                </span>
                <p className="">
                    <strong>First Name:</strong> { props.data.bio.firstName ? props.data.bio.firstName :  "Update your first name" }
                </p>
                <p className="">
                    <strong>Last Name:</strong> { props.data.bio.lastName ? props.data.bio.lastName: "Update your last name" }
                </p>
                <p className="">
                    <strong>Email:</strong> { props.data.email }
                </p>
            </div>
        </div>

    );
}

export default ProfileBio;
