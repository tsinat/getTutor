import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import SingleUser from '../common/singleUser';
import Radium from 'radium';

class SingleUserList extends Component {

    getStyles() {
        return {
            containerStyle: {
                margin: "0 auto",
                width: "80%"
            }
        }
    }

    renderUsers() {
        const styles = this.getStyles();
        if (this.props.allUsers) {
            const thunnailList = this.props.allUsers.map((user, index) => {
                return (
                    <div className="singleUserStyle" key={index+3}>
                        <SingleUser user={user} index={index} key={index} style={styles.singleUserStyle}/>
                    </div>
                );
            });
            return thunnailList;
        }
    }

    render() {
        const styles = this.getStyles();
        return (
            <div className="container" style={styles.containerStyle}>
                <ul className="ulStyles">
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

export default SingleUserList;
