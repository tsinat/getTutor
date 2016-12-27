import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const HelpPage = () => {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppearTimeout={500}
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}>
                <div className="container">
                    <p>Help page wll go here...</p>
                </div>
            </ReactCSSTransitionGroup>

            );
}
export default HelpPage;
