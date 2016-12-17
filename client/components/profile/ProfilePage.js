import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/profileAction';

import ProfileBioList from './profileBio';
import ProfileSummary from './profileSummary';
import ProfileEducation from './profileEducation';
import ProfilePicture from './profilePicture';

 class ProfilePage extends Component {
   constructor(){
     super();
     this.updateProfile = this.updateProfile.bind(this);
   }
   componentWillMount() {
       this.props.fetchUser();
   }

   updateProfile(updateData){
       updateData.currentUser = this.props.currentUser.user.email
       this.props.updateUser(updateData);
   }
   render(){
     const { currentUser } = this.props;
     console.log('currentUser:', currentUser);
     if(currentUser.user){
         return(
             <div>
                 <ProfilePicture
                     data={currentUser.user}
                     updateProfile={this.updateProfile}
                     />
                 <ProfileBioList
                     data={currentUser.user}
                     updateProfile={this.updateProfile}
                     updateProfile={this.updateProfile}
                     /><br />
                 <ProfileSummary
                     data={currentUser.user}
                     updateProfile={this.updateProfile}
                     /><br />
                 <ProfileEducation
                     data={currentUser.user}
                     updateProfile={this.updateProfile}
                     />
             </div>
         );
     }
     else return <div></div>;
   }
 }
function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, actions)(ProfilePage);
