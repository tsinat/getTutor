import React from 'react';

const ProfilePic = (props) => {
    return (
        <div className="row">
            <div className="list-group-item col-xs-10 col-xs-offset-1" style={props.styles.listItem}>
                <div className="text-center circle">
                    <img src={props.data.image} style={props.styles.imageStyle}/>
                </div>
                <p className="text-center">
                    <button className='btn btn-default' onClick={props.toggleEditing}>Change Picture</button>
                </p>
            </div>
        </div>
    );
}

export default ProfilePic;
