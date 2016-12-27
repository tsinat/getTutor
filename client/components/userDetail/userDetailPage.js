import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/usersAction';
import ProfileBio from '../common/commonProfileBio';
import ProfileSummary from '../common/commonProfileSummary';
import ProfileEducation from '../common/commonProfileEducation';
import ProfilePicture from '../common/commonProfilePicture';

class SingleUserDetail extends Component {
    componentDidMount() {
        this.props.getSingleUser(this.props.params.id);
    }
    render(){
        if(this.props.userDetail) {
            return (
                    <div className="container">
                        <ProfilePicture
                            data={this.props.userDetail}/>
                        <ProfileBio
                            data={this.props.userDetail}/>
                        <ProfileSummary
                            data={this.props.userDetail}/>
                        <ProfileEducation
                            data={this.props.userDetail}/>
                    </div>
                );
        } else {
            return (<div></div>);
        }
    }
}
function mapStateToProps(state) {
    return {
        userDetail: state.currentUser.userDetail
    }
}
export default connect(mapStateToProps, actions)(SingleUserDetail);
