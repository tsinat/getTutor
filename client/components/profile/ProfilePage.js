import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Radium from 'radium';
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

   getStyles() {
       return {
           containerStyle: {
               padding: "20px 40px 20px 40px",
               height: "100%",
               marginTop: 0,
               marginBottom: "40px"
           }
       }
   }

   updateProfile(updateData){
       console.log('updateData:', updateData);
       updateData.currentUser = this.props.currentUser.user.email
       this.props.updateUser(updateData);
   }

   handleProfilePicture(data) {
       const id = this.props.currentUser.user._id;
       this.props.uploadPicture(data, id);
   }

   render(){
     const { currentUser } = this.props;
     const styles = this.getStyles();

     if(currentUser.user){
         return(
             <ReactCSSTransitionGroup
                 component="div"
                 transitionName="example"
                 transitionAppearTimeout={500}
                 transitionAppear={true}
                 transitionEnter={false}
                 transitionLeave={false}>
                 <div className="container" style={styles.containerStyle}>
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
            </ReactCSSTransitionGroup>
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
