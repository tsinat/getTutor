import React, { Component } from 'react';
import { Link, browserHistory} from 'react-router';
import SingleUser from '../common/singleUser';
import Radium from 'radium';

class SingleUserList extends Component {
    getStyles() {
        return {
            containerStyle: {
                width: "80%",
                margin: "0 auto"
            }
        }
    }
    renderUsers() {
        const styles = this.getStyles();
        if(this.props.allUsers) {
            const thunnailList = this.props.allUsers.map((user, index) => {
                return (
                    <SingleUser
                        user={user}
                        index={index}
                        key={index}/>
                );
            });
            return thunnailList;
        }
    }
    render() {
        const styles = this.getStyles();
        return(
            <div className="" style={styles.containerStyle}>
              {this.renderUsers()}
            </div>
        );
    }
}

export default SingleUserList;
