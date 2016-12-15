import React from 'react';

const ProfilePic = (props) => {
    return (
        <div className="row">
            <div className="list-group-item col-xs-10 col-xs-offset-1" style={props.styles.listItem}>
                <div className="text-center circle">
                    <img src="https://avatars0.githubusercontent.com/u/11866441?v=3" style={props.styles.imageStyle}/>
                </div>
                <p className="text-center">
                    <button className='btn btn-default' onClick={props.toggleEditing}>Change Picture</button>
                </p>
            </div>
        </div>
    );
}

export default ProfilePic;
