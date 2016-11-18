import React, { Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Radium from 'radium';

class Footer extends Component {
    getStyles() {
        return {
            footerStyle: {
                width: "100%",
                height: "60px",
                paddingTop: "20px",
                textAlign: "center",
                backgroundColor: "#f5f5f5",
            },
            footerStyleUl: {
                listStyleType: "none",
                margin: 0,
                padding: 0
            },
            footerLiStyle: {
                display: "inline-block",
                width: "100px",
                color: "grey"
            }
        }
    }
    renderLinks() {
        const styles = this.getStyles();

        if(this.props.authenticated){
            return [
                <li className="nav-item" key={1}>
                    <Link to='/categories' className="nav-link" style={styles.footerLiStyle}>Categories</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link to='/profile' className="nav-link" style={styles.footerLiStyle}>Profile</Link>
                </li>,
                <li className="nav-item" key={3}>
                    <Link to='/signout' className="nav-link" style={styles.footerLiStyle}>Sign Out</Link>
                </li>,
                <li className="nav-item" key={4}>
                    <Link to='/help' className="nav-link" style={styles.footerLiStyle}>Help?</Link>
                </li>
            ]
        } else {
            return [
                <li className="nav-item" key={1} style={styles.footerLiStyle}>
                    <Link to='/categories' className="nav-link" onClick={this.toggleCollapse} >Categories</Link>
                </li>,
                <li className="nav-item" key={2} style={styles.footerLiStyle}>
                    <Link to='/signup' className="nav-link" onClick={this.toggleCollapse} >Sign Up</Link>
                </li>,
                <li className="nav-item" key={3} style={styles.footerLiStyle}>
                    <Link to='/signin' className="nav-link" onClick={this.toggleCollapse} >Sign In</Link>
                </li>,
                <li className="nav-item" key={4} style={styles.footerLiStyle}>
                    <Link to='/help' className="nav-link" onClick={this.toggleCollapse} >Help?</Link>
                </li>
            ]
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
