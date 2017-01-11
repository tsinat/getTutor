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
                boxShadow:"7px 10px 15px 0px rgba(46,61,73,0.15)",
                height: "100%",
                background: "white",
                marginTop: "20px",
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
                        <ProfileSummary
                            data={this.props.userDetail}/>
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
