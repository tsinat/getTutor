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
   }
   componentWillReceiveProps() {
       this.props.fetchUser();
   }
   handleChange() {
       // change handler will go here;
   }
   render(){
     const data = {
         firstName: "Tsinat",
         lastName: "Tesfalul",
         email: "tsinatzeree@gmail.com",
         summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
         education: {
             school: "Eritre Institute of Technology",
             degree: "Bachelors",
             field: "Computer Science"
         }
     }

     const { currentUser } = this.props;
     console.log('users in render of profilepage:', currentUser.user);
     return(
         <div>
             <ProfilePicture
                 data={data}
                 onChange={this.handleChange}
                 />
             <ProfileBioList
                 data={data}
                 onChange={this.handleChange}
                 /><br />
             <ProfileSummary
                 data={data}
                 onChange={this.handleChange}
                 /><br />
             <ProfileEducation
                 data={data}
                 onChange={this.handleChange}
                 />
         </div>
     );
   }
 }
function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, actions)(ProfilePage);
