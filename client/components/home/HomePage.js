import React, { Component } from 'react';
import Header from './header';
import SingleUser from '../common/singleUser';
import Radium from 'radium';

export default class HomePage extends Component {
    constructor() {
        super();
        this.scrollUp = this.scrollUp.bind(this);
    }
    getStyles() {
        return {
            thumbnailStyle: {
                float: "left",
            },
            panelStyle: {
                marginTop: 0
            }
        }
    }
    renderUsers() {
        const styles = this.getStyles();
        const temp = [0,1,2,3,4,5,6,7,8,9,11,12];
        const thunnailList = temp.map(thumbnail => {
            return <SingleUser key={thumbnail} style={styles.thumbnailStyle} />
        });
        return thunnailList;
    }
    scrollUp() {

    }
    render() {
        const styles = this.getStyles();
        return (
            <div>
                <Header scrollUp={this.scrollUp}/>
                <div className="" style={styles.panelStyle}>
                    {/*<div className="panel-body">*/}
                        <h4 className="text-center">Some of the top rated mentors around you</h4>
                    {/*</div>*/}
                    <hr />
                </div>
                <div className="container">
                    {this.renderUsers()}
                </div>
            </div>
        );
    }
}
