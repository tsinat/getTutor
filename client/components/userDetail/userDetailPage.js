import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/userAction';
import profileBio from '../common/commonProfileBio';
import ProfileSummary from '../common/commonProfileSummary';
import ProfileEducation from '../common/commonProfileEducation';
import ProfilePicture from '../common/commonProfilePicture';

class SingleUserDetail extends Component {
    componentWillMount() {

    }
    render(){
        return (
            <div className="container">
                <p>Single User Detail will go here!</p>
                <ProfilePicture />
                <ProfileBio />
                <ProfileSummary />
                <ProfileEducation />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        // userDetail: state.currentUser.userDetail;
    }
}
export default connect(mapStateToProps, actions)(SingleUserDetail);
