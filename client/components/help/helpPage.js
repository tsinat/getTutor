import React, { Component } from 'react';
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const HelpPage = () => {
    const styles = {
        helpPageStyle: {
            height: "100vh"
        }
    }
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppearTimeout={500}
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}>
                <div className="container text-center" style={styles.helpPageStyle}>
                    <h4 className="">This page is under development</h4><br />
                    <h4>It will be up in short period of time, come back again...</h4>
                </div>
            </ReactCSSTransitionGroup>

            );
}
export default HelpPage;
