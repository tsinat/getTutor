import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileBioList from './profileBio';
import ProfileSummary from './profileSummary';

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
         education: "tsinatzeree@gmail.com",
         summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
     }
     return(
         <div>
             <ProfileBioList
                 data={data}
                 onChange={this.handleChange}
                 /><br/>
             <ProfileSummary
                 data={data}
                 onChange={this.handleChange}
                 />
         </div>
     );
   }
 }

export default connect(null)(ProfilePage);
