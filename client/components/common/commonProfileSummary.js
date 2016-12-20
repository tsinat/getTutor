import React from 'react';

const ProfileSum = (props) => {
    return (
        <div className="row">
            <div className="list-group-item col-xs-10 col-xs-offset-1" onClick={ props.toggleEditing} style={props.styles.listItem}>
                <span className="pull-right">
                    <i className='glyphicon glyphicon-edit text-success' onClick={ props.toggleEditing}></i>
                </span>
                <h4>Summary</h4><hr />
                <p className="">
                    { props.data.summary ? props.data.summary : 'Please write shord summary about your self and experience'}
                </p><br />
            </div>
        </div>
    );
}

export default ProfileSum;
