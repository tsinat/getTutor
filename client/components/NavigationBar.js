import React, { Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <Link to='/' className='navbar-brand'>getTutor</Link>
                    </div>
                    <div className='collapse navbar-collapse'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/signup'>Sign up</Link></li>
                            <li><Link to='/signin'>Sign in</Link></li>
                            <li><Link to='/help'>Help?</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

    }
}

export default Header;
