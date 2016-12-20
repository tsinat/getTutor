import React from 'react';

const ProfileEdu = (props) => {
    return (
        <div className="row">
            <div className="list-group-item col-xs-10 col-xs-offset-1" onClick={props.toggleEditing} style={props.styles.listItem}>
                <span className="pull-right">
                    <i className='glyphicon glyphicon-edit text-success' onClick={props.toggleEditing}></i>
                </span>
                <h4>Education</h4><hr />
                <p className="">
                    <strong>School:</strong> { props.data.education.school ? props.data.education.school : 'School you attended ?'}
                </p>
                <p className="">
                    <strong>Degree:</strong> { props.data.education.degree ? props.data.education.degree : 'Degree completed ?' }
                </p>
                <p className="">
                    <strong>Field of Study:</strong> { props.data.education.field ? props.data.education.field : 'Field of study ?'}
                </p><br />
            </div>
        </div>
    );
}

export default ProfileEdu;
