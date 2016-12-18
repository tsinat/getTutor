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
     this.handleProfilePicture = this.handleProfilePicture.bind(this);
   }
   componentWillMount() {
       this.props.fetchUser();
   }

   updateProfile(updateData){
       updateData.currentUser = this.props.currentUser.user.email
       this.props.updateUser(updateData);
   }
   handleProfilePicture(data) {
       const id = this.props.currentUser.user._id;
       this.props.uploadPicture(data, id);
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
                     handleProfilePicture={this.handleProfilePicture}
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

ProfilePage.defaultProps = {
    currentUser: {
        image: "https://avatars0.githubusercontent.com/u/11866441?v=3",
        bio: {
            firstName: "First Name",
            lastName: "Last Name"
        },
        summary: "Please fill summary here",
        education: {
            school: "school",
            field: "Field",
            degree: "degree"
        }
    }
}

export default connect(mapStateToProps, actions)(ProfilePage);
