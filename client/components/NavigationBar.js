import React, { Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {
    renderLinks() {
        if(this.props.authenticated){
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to='/categories'>Categories</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to='/profile'>Profile</Link>
                </li>,
                <li className="nav-item" key={3}>
                    <Link className="nav-link" to='/signout'>Sign Out</Link>
                </li>,
                <li className="nav-item" key={4}>
                    <Link className="nav-link" to='/help'>Help?</Link>
                </li>
            ]
        } else {
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to='/categories'>Categories</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to='/signup'>Sign Up</Link>
                </li>,
                <li className="nav-item" key={3}>
                    <Link className="nav-link" to='/signin'>Sign In</Link>
                </li>,
                <li className="nav-item" key={4}>
                    <Link className="nav-link" to='/help'>Help?</Link>
                </li>
            ]
        }

    }
    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <Link to='/' className='navbar-brand'>getTutor</Link>
                    </div>
                    <div className='collapse navbar-collapse'>
                        <ul className='nav navbar-nav navbar-right'>
                            { this.renderLinks() }
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
}
function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps )(Header);
