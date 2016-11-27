import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileBioList from './profileBio';

 class ProfilePage extends Component {
   constructor(){
     super();
   }
   handleChange() {

   }
   render(){
     const data = {
         firstName: "Tsinat",
         lastName: "Tesfalul",
         education: "BS in Computer Science"
     }
     return(
         <div>
             <ProfileBioList
                 data={data}
                 onChange={this.handleChange}
                 />
         </div>
     );
   }
 }

export default connect(null)(ProfilePage);
