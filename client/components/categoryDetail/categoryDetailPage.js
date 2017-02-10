import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Radium from 'radium';

import * as actions from '../../actions/usersAction';
import SingleUserList from '../home/singleUserList';

class CategoryDetail extends Component {
    constructor() {
        super();
        this.state = { searchPhrase: ''};
    }

    getStyles() {
        return {
            headerStyle: {
                width: "100%",
                marginTop: "-25px",
                marginBottom: "20px",
                padding: "8px",
                borderBottom: "1px solid lightgrey",
                color: "#697881",
            }
        };
    }

    componentWillMount() {
        const param = this.props.params.id.split('_');
        let phrase = "";
        if(param.length > 1){
            phrase = (param[0]+ " " + param[1]);
            this.setState({searchPhrase: phrase});
            this.props.getCategoryUsers(phrase);
        } else {
            phrase = param[0];
            this.setState({searchPhrase: phrase});
            this.props.getCategoryUsers(phrase);
        }
        console.log(this.state.searchPhrase);
        console.log(param);
    }

    render() {
        const styles = this.getStyles();
        return(
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppearTimeout={500}
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}>
                <div style={styles.headerStyle}>
                    <h3 className="text-center" >{this.state.searchPhrase}</h3>
                </div>
                <div className="">
                    <SingleUserList allUsers={this.props.cateogryUsers} key='what'/>
                </div>
            </ReactCSSTransitionGroup>

        );
    }
}

function mapStateToProps(state) {
    return {
        cateogryUsers: state.currentUser.cateogryUsers
    }
}

export default connect(mapStateToProps, actions)(CategoryDetail);
