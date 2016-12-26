import React, { Component } from 'react';
import SingleUser from '../common/singleUser';
import Radium from 'radium';

class SingleUserList extends Component {
    getStyles() {
        return {}
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
        return(
            <div className="container">
              {this.renderUsers()}
            </div>
        );
    }
}

export default SingleUserList;
