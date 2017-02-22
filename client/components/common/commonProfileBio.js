import React from 'react';
import { Link } from 'react-router';

const ProfileBio = (props) => {
    const styles = {
        listItem: {
            borderRadius: 0,
        }
    }
    const pathName = location.pathname;
    return (
        <div className="row list-group-item"
            onClick={props.toggleEditing}
            style={styles.listItem}>
            <p>{(pathName== '/profile') && <span className="glyphicon glyphicon-edit pull-right"></span>}</p>
            <h4 className="text-center">Contact</h4><hr />
            <div className="col-xs-12 col-md-6">
                <div>
                    <p className="">
                        <strong>First Name:</strong> { props.data.bio.firstName ? props.data.bio.firstName :  "Update your first name" }
                    </p>
                    <p className="">
                        <strong>Last Name:</strong> { props.data.bio.lastName ? props.data.bio.lastName: "Update your last name" }
                    </p>
                    <p className="">
                        <strong>Email:</strong> { props.data.email }
                    </p>
                    <p className="">
                        <strong>Twitter:</strong><a href={`https://twitter.com/${props.data.bio.twitter}`} target="_blank"> {props.data.bio.twitter}</a>
                    </p>
                </div>
            </div>
            <div className="col-xs-12 col-md-6">
                <div>
                    <p className="">
                        <strong>Tel:</strong> { props.data.bio.tel ? props.data.bio.tel :  "" }
                    </p>
                    <p className="">
                        <strong>Website:</strong> <a href={props.data.bio.website } target="_blank">
                             { props.data.bio.website ? props.data.bio.website: "" }</a>
                    </p>
                    <p className="">
                        <strong>Specialization:</strong> { props.data.bio.specialization ? props.data.bio.specialization: ""}
                    </p>
                </div>
            </div>
        </div>

    );
}

export default ProfileBio;
