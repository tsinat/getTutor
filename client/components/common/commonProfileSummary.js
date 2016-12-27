import React from 'react';

const ProfileSum = (props) => {
    const styles = {
        listItem: {
            borderRadius: 0,
            boxShadow: "1px 1px 1px lightgrey"
        }
    }
    return (
        <div className="row">
            <div className="list-group-item col-xs-10 col-xs-offset-1" onClick={ props.toggleEditing} style={styles.listItem}>
                <h4>Summary</h4><hr />
                <p className="">
                    { props.data.summary ? props.data.summary : 'Please write shord summary about your self and experience'}
                </p><br />
            </div>
        </div>
    );
}

export default ProfileSum;
