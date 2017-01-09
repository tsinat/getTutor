import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import Scroll from 'react-scroll';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as actions from '../../actions/usersAction';
import Header from './header';
import SingleUserList from './singleUserList';
import Subscribe from './subscribe';

let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null,
            // height: 0
        }
        this.scrollUp = this.scrollUp.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    getStyles() {
        return {
            panelStyle: {
                padding: "5px"
            },
            headerStyle: {
                borderBottom: "1px solid lightgrey",
                paddingBottom: "20px"
            }
        }
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
        // const el =  document.getElementById('test');

        window.addEventListener("resize", this.updateDimensions);

        Events.scrollEvent.register('begin', function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
        // this.setState({height: el.getBoundingClientRect().top});
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
        const scrollT = (screen.height > 800) ? screen.height: screen.height * 0.88;
        scroll.scrollTo(scrollT);
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
                <div className="" id="test" style={styles.panelStyle} key="me" onClick={this.scrollToTop()}>
                    <h3 className="text-center" key='you' style={styles.headerStyle}>Some of the top rated mentors around you</h3>
                </div>
                <SingleUserList allUsers={this.props.allUsers} key='what'/>
                <Subscribe  key="sub"/>
            </ReactCSSTransitionGroup>
        );
    }
}

function mapStateToProps(state) {
    return {allUsers: state.currentUser.allUsers}
}

export default connect(mapStateToProps, actions)(HomePage);
