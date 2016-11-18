import React, { Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: true
        };
        this.toggleCollapse = this.toggleCollapse.bind(this);
    }
    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }
    renderLinks() {
        if(this.props.authenticated){
            return [
                <li className="nav-item" key={1}>
                    <Link to='/categories' className="nav-link" onClick={this.toggleCollapse}>Categories</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link to='/profile' className="nav-link" onClick={this.toggleCollapse} >Profile</Link>
                </li>,
                <li className="nav-item" key={3}>
                    <Link to='/signout' className="nav-link" onClick={this.toggleCollapse} >Sign Out</Link>
                </li>,
                <li className="nav-item" key={4}>
                    <Link to='/help' className="nav-link" onClick={this.toggleCollapse} >Help?</Link>
                </li>
            ]
        } else {
            return [
                <li className="nav-item" key={1}>
                    <Link to='/categories' className="nav-link" onClick={this.toggleCollapse} >Categories</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link to='/signup' className="nav-link" onClick={this.toggleCollapse} >Sign Up</Link>
                </li>,
                <li className="nav-item" key={3}>
                    <Link to='/signin' className="nav-link" onClick={this.toggleCollapse} >Sign In</Link>
                </li>,
                <li className="nav-item" key={4}>
                    <Link to='/help' className="nav-link" onClick={this.toggleCollapse} >Help?</Link>
                </li>
            ]
        }

    }
    render() {
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" onClick={this.toggleCollapse}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <div className='navbar-header'>
                        <Link to='/' className='navbar-brand'>getTutor</Link>
                  </div>
                </div>
                <div className={ "navbar-collapse " + navClass } id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
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
    }
}

export default connect(mapStateToProps )(Header);
