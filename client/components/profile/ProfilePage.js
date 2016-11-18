import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Profile extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }
    render() {
        return (
            <div>{ this.props.message }
                Profile page will go here ...
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Profile);
