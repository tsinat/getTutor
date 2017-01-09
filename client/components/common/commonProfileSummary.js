import React from 'react';

const pathName = location.pathname;

function renderSumary(props) {
    if(pathName == "/profile") {
        return props.data.summary ? props.data.summary :  "Please Write Profile summary ";
    } else {
        return props.data.summary ? props.data.summary :  "No Profile summary found "
    }
}

const ProfileSum = (props) => {
    const styles = {
        listItem: {
            borderRadius: 0,
        }
    }
    return (
        <div className="row">
            <div className="list-group-item col-xs-12"
                onClick={ props.toggleEditing}
                style={styles.listItem}>
                {(pathName== '/profile') && <span className="glyphicon glyphicon-edit pull-right"></span>}
                <h4>Summary</h4><hr />
                <p className="">
                    { renderSumary(props)}
                </p><br />
            </div>
        </div>
    );
}

export default ProfileSum;
