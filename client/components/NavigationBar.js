import React, { Component} from 'react';
import { hashHistory} from 'react-router';
import {Link as ReactRouterLink} from 'react-router';
const Link = Radium(ReactRouterLink);
import { connect } from 'react-redux';
import Radium, {style} from 'radium';
import { createHistory } from 'history';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: true,
            translate: false
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        const scrollTop = e.srcElement.body.scrollTop;

        if(scrollTop > 80 || window.location.pathname != '/') {
            this.setState({
                translate: true
            });
        } else {
            this.setState({
                translate: false
            });
        }
    }

    getStyles(){
        return {
            header: {
                position: 'fixed',
                top: 0,
                background: "transparent",
                fontWeight: "bold",
                borderBottom: "none",
                margin:0,
                marginTop: "10px",
            },
            textStyle: {
                color: "white",
                fontWeight: 1500,
                fontSize:"1.3em",
                ':hover': {
                    backgroundColor: "#FFF",
                    color: "#F05A50",
                    // borderRadius: "5px"
                }
            },
            ulStyles: {
                // padding: "2px"
            },
            logo: {
                color: "white",
                fontSize: "1.8em",
            },
            translateStyle: {
                position: 'fixed',
                top: 0,
                fontWeight: "bold",
                // background: "#F05A50",
                background: "#F05A50",
                borderBottom: "none",
                transition: "0.1s ease-in-out",
            }
        }
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    renderLinks() {
        const styles = this.getStyles();
        if(this.props.authenticated){
            return [
                <li className="nav-item" key={1} >
                    <Link
                        to='/categories' className="nav-link"
                        onClick={this.toggleCollapse}
                        style={styles.textStyle}>Categories
                    </Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link
                        to='/profile' className="nav-link"
                        onClick={this.toggleCollapse}
                        style={styles.textStyle}>Profile</Link>

                </li>,
                <li className="nav-item" key={4}>
                    <Link
                        to='/signout' className="nav-link"
                        onClick={this.toggleCollapse}
                        style={styles.textStyle}>Sign Out</Link>
                </li>,
                <li className="nav-item" key={5}>
                    <Link
                        to='/help' className="nav-link"
                        onClick={this.toggleCollapse}
                        style={styles.textStyle}>Help?</Link>
                </li>
            ];
        } else {
            return [
                <li className="nav-item" key={1}>
                    <Link
                        to='/categories' className="nav-link"
                        onClick={this.toggleCollapse}
                        style={styles.textStyle}>Categories</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link
                        to='/signup' className="nav-link"
                        onClick={this.toggleCollapse}
                        style={styles.textStyle}>Sign Up</Link>
                </li>,
                <li className="nav-item" key={3}>
                    <Link
                        to='/signin' className="nav-link"
                        onClick={this.toggleCollapse}
                        style={styles.textStyle}>Sign In</Link>
                </li>,
                <li className="nav-item" key={4}>
                    <Link
                        to='/help' className="nav-link"
                        onClick={this.toggleCollapse}
                        style={styles.textStyle}>Help?</Link>
                </li>
            ];
        }

    }

    render() {
        const pathName = '';
        const history = createHistory();
        const unlisten = history.listen((location) => {
            if(this.pathName != location.pathname){
                document.body.scrollTop = 0;
            }
            this.pathName = location.pathname;
        });
        const styles = this.getStyles();
        const { collapsed, translate } = this.state;
        const navClass = collapsed ? "collapse" : "";
        const width = window.innerWidth || documentElement.clientWidth || body.clientWidth;
        const combinedStyle =  (translate || this.pathName != '/' || width < 700  ) ? styles.translateStyle : styles.header;

        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation" style={combinedStyle}>
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" onClick={this.toggleCollapse}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <div className='navbar-header'>
                        <Link to='/' className='navbar-brand' style={styles.logo}>GetMentor</Link>
                  </div>
                </div>
                <div className={ "navbar-collapse " + navClass } id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right" style={styles.ulStyles}>
                    { this.renderLinks() }
                  </ul>
                </div>
              </div>
            </nav>
        );

    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps )(Header);
