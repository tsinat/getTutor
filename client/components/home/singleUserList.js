import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import SingleUser from '../common/singleUser';
import Radium from 'radium';

class SingleUserList extends Component {

    getStyles() {
        return {
            containerStyle: {
                // margin: "0 auto",
            },
            ulStyles: {
                paddingLeft: 0,
                minHeight: "100vh",
                columnCount: 5,
                columnGap: "1em",
                overfloaw: "visible"
            }
        }
    }

    renderUsers() {
        const styles = this.getStyles();
        if (this.props.allUsers) {
            const thunnailList = this.props.allUsers.map((user, index) => {
                return (
                    <SingleUser user={user} index={index} key={index}/>
                );
            });
            return thunnailList;
        }
    }

    render() {
        const styles = this.getStyles();
        return (
            <div className="container" style={styles.containerStyle}>
                <ul style={styles.ulStyles}>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

export default SingleUserList;
