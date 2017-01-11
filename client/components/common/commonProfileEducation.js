import React from 'react';

const pathName = location.pathname;

const renderProfileEducation = (props) => {
    if(pathName == "/profile") {
        return (
            <div>
                <h4>Education</h4><hr />
                <p className="">
                    <strong>School:</strong> { props.data.education.school ? props.data.education.school : 'School you attended ?'}
                </p>
                <p className="">
                    <strong>Degree:</strong> { props.data.education.degree ? props.data.education.degree : 'Degree completed ?' }
                </p>
                <p className="">
                    <strong>Field of Study:</strong> { props.data.education.field ? props.data.education.field : 'Field of study ?'}
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <h4>Education</h4><hr />
                <p className="">
                    <strong>School:</strong> { props.data.education.school ? props.data.education.school : ''}
                </p>
                <p className="">
                    <strong>Degree:</strong> { props.data.education.degree ? props.data.education.degree : '' }
                </p>
                <p className="">
                    <strong>Field of Study:</strong> { props.data.education.field ? props.data.education.field : ''}
                </p>
            </div>
        );
    }
}

const ProfileEdu = (props) => {
    const styles = {
        listItem: {
            borderRadius: 0,
        },
        sectionStyle: {
            // marginBottom: "400px"
        }
    }
    const pathName = location.pathname;

    return (
        <div className="row">
            <div className="list-group-item col-xs-12"
                onClick={props.toggleEditing}
                style={styles.listItem}>
                {(pathName== '/profile') && <span className="glyphicon glyphicon-edit pull-right"></span>}
                { renderProfileEducation(props) }
            </div>
        </div>
    );
}

export default ProfileEdu;
