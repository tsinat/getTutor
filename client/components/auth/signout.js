import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }
    render() {
        const styles = {
            containerStyle: {
                height: "100vh"
            }
        }
        return (
            <div className="container" style={styles.containerStyle}>
                <br />
                <h3 className="text-center">Sorry to see you go ... Please visit us again</h3>
            </div>
        );
    }
}
export default connect(null, actions)(Signout);
