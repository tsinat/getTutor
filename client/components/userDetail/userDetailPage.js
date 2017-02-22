import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as actions from '../../actions/usersAction';
import ProfileBio from '../common/commonProfileBio';
import ProfileSummary from '../common/commonProfileSummary';
import ProfileEducation from '../common/commonProfileEducation';
import UserDetailPic from './userDetailPicture';

class SingleUserDetail extends Component {
    componentDidMount() {
        this.props.getSingleUser(this.props.params.id);
    }
    getStyles() {
        return {
            containerStyle: {
                padding: "20px 40px 40px 40px",
                height: "100%",
                marginTop: 0,
                marginBottom: "40px"
            }
        }
    }
    render(){
        const styles = this.getStyles();
        if(this.props.userDetail) {
            return (
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionAppearTimeout={500}
                    transitionAppear={true}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className="container" style={styles.containerStyle}>
                        <UserDetailPic
                            data={this.props.userDetail}/>
                        <ProfileBio
                            data={this.props.userDetail}/>
                            <br />
                        <ProfileSummary
                            data={this.props.userDetail}/>
                            <br />
                        <ProfileEducation
                            data={this.props.userDetail}/>
                    </div>
                </ReactCSSTransitionGroup>

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
