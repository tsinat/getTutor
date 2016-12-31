import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import Scroll from 'react-scroll';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as actions from '../../actions/usersAction';
import Header from './header';
import SingleUserList from './singleUserList';

let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null
        }
        this.scrollUp = this.scrollUp.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    getStyles() {
        return {}
    }

    updateDimensions() {
        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

        this.setState({width: width});
        console.log('width:', width);
    }
    
    componentWillMount() {
        this.props.fetchAllUsers();
        this.updateDimensions();
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }
    
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
        window.removeEventListener("resize", this.updateDimensions);
    }
    
    renderHeader() {
        if (this.state.width >= 868) {
            return <Header scrollUp={this.scrollUp}/>;
        } else
            return;
        }
        
    scrollUp() {
        scroll.scrollTo(705);
    }
    
    scrollToTop() {
        scroll.scrollToTop();
    }
    
    scrollToBottom() {
        scroll.scrollToBottom();
    }
    
    scrollTo() {
        scroll.scrollTo(100);
    }
    
    scrollMore() {
        scroll.scrollMore(100);
    }
    
    render() {
        const styles = this.getStyles();
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppearTimeout={500}
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}>
                {this.renderHeader()}
                <div className="" style={styles.panelStyle} key="me">
                    <h3 className="text-center" key='you'>Some of the top rated mentors around you</h3>
                    <hr/>
                </div>
                <SingleUserList allUsers={this.props.allUsers} key='what'/>
            </ReactCSSTransitionGroup>
        );
    }
}

function mapStateToProps(state) {
    return {allUsers: state.currentUser.allUsers}
}

export default connect(mapStateToProps, actions)(HomePage);
