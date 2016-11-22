import React, { Component } from 'react';
import Header from './header';
import SingleUser from '../common/singleUser';
import Radium from 'radium';

export default class HomePage extends Component {
    getStyles() {
        return {
            thumbnailStyle: {
                float: "left"
            }
        }
    }
    renderUsers() {
        const styles = this.getStyles();
        const temp = [0,1,2,3,4,5,6,7,8,9];
        const thunnailList = temp.map(thumbnail => {
            return <SingleUser key={thumbnail} style={styles.thumbnailStyle} />
        })
        return thunnailList;
    }
    render() {
        return (
            <div>
                <Header />
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h4 className="text-center">Some of the top rated mentors around you</h4>
                    </div>
                </div>
                <div className="container">
                    {this.renderUsers()}
                </div>
            </div>
        )
    }
}
