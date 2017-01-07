import React, { Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Radium from 'radium';

class Footer extends Component {

    getStyles() {
        return {
            footerStyle: {
                position: "static",
                bottom: 0,
                width: "100%",
                height: "60px",
                paddingTop: "20px",
                textAlign: "center",
                backgroundColor: "#EFF0F2",
                opacity: "0.7",
            },
            footerStyleUl: {
                listStyleType: "none",
                display: "inline",
                width: "100%",
                margin: 0,
                padding: 0
            },
            footerLiStyle: {
                display: "inline-block",
                minWidth:"100px",
                color: "grey"
            },
            linkStyle: {
                color: "#F05A50",
                fontWeight: "bold",
                textDecoration: "none"
            }
        }
    }

    renderLinks() {
        const styles = this.getStyles();

        if(this.props.authenticated){
            return [
                <li className="nav-item" key={1} style={styles.footerLiStyle}>
                    <Link
                        to='/categories'
                        className="nav-link"
                        style={styles.linkStyle}
                        >Categories</Link>
                </li>,
                <li className="nav-item" key={2} style={styles.footerLiStyle}>
                    <Link
                        to='/profile'
                        className="nav-link"
                        style={styles.linkStyle}
                        >Profile</Link>
                </li>,
                <li className="nav-item" key={3} style={styles.footerLiStyle}>
                    <Link
                        to='/signout'
                        className="nav-link"
                        style={styles.linkStyle}
                        >Sign Out</Link>
                </li>,
                <li className="nav-item" key={4} style={styles.footerLiStyle}>
                    <Link
                        to='/help'
                        className="nav-link"
                        style={styles.linkStyle}
                        >Help?</Link>
                </li>
            ];
        } else {
            return [
                <li className="nav-item" key={1} style={styles.footerLiStyle}>
                    <Link
                        to='/categories'
                        className="nav-link"
                        style={styles.linkStyle}
                         >Categories</Link>
                </li>,
                <li className="nav-item" key={2} style={styles.footerLiStyle}>
                    <Link
                        to='/signup'
                        className="nav-link"
                        style={styles.linkStyle}
                         >Sign Up</Link>
                </li>,
                <li className="nav-item" key={3} style={styles.footerLiStyle}>
                    <Link
                        to='/signin'
                        className="nav-link"
                        style={styles.linkStyle}
                         >Sign In</Link>
                </li>,
                <li className="nav-item" key={4} style={styles.footerLiStyle}>
                    <Link
                        to='/help'
                        className="nav-link"
                        style={styles.linkStyle}
                         >Help?</Link>
                </li>
            ];
        }

    }

    render() {
        const styles = this.getStyles();
        return (
            <footer className="footer" style={styles.footerStyle}>
                <div className="container">
                    <ul className="" style={styles.footerStyleUl}>
                        { this.renderLinks() }
                    </ul>
                </div>
            </footer>
        );

    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps )(Footer);
