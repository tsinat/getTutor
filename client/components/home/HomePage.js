import React, { Component } from 'react';
import Radium from 'radium';
import Scroll from 'react-scroll';
import Header from './header';
import SingleUser from '../common/singleUser';

let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { width: null }
        this.scrollUp = this.scrollUp.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    getStyles() {
        return {
            thumbnailStyle: {
                float: "left",
            },
            panelStyle: {
                marginTop: 0,
                padding:"5px"
            }
        }
    }
    updateDimensions() {
        var w = window,
          d = document,
          documentElement = d.documentElement,
          body = d.getElementsByTagName('body')[0],
          width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
          height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

          this.setState({width: width});
          console.log('width:', width);

    }
    componentWillMount () {
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
        // console.log('width', window.width());
        if(this.state.width >= 868) {
            return <Header scrollUp={this.scrollUp}/>;
        } else return;
    }
    renderUsers() {
        const styles = this.getStyles();
        const temp = [0,1,2,3,4,5,6,7,8,9,11,12];
        const thunnailList = temp.map(thumbnail => {
            return <SingleUser key={thumbnail} style={styles.thumbnailStyle} />
        });
        return thunnailList;
    }
    scrollUp() {
        scroll.scrollTo(610);
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
            <div>
                {this.renderHeader()}
                <div className="" style={styles.panelStyle}>
                    <h4 className="text-center">Some of the top rated mentors around you</h4>
                    <hr />
                </div>
                <div className="container">
                    {this.renderUsers()}
                </div>
            </div>
        );
    }
}
