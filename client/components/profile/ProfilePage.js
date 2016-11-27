import React, { Component } from 'react';
import ProfileBioList from './profileBio';

export default class Example extends Component {
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
