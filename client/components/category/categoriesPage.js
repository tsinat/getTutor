import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, browserHistory} from 'react-router';

import * as actions from '../../actions';
import Category from './category';
import categoryList from '../../data/categoriesData';

class Categories extends Component {

    getStyles() {
        return {
            categoryStyle: {
                height: "100%",
                overflow: "scroll",
                marginBottom: 0
            },
            headerStyle: {
                width: "100%",
                marginTop: "-25px",
                marginBottom: "20px",
                padding: "8px",
                borderBottom: "1px solid lightgrey",
                color: "#697881",
            }
        }
    }

    renderCategory() {
        const list = categoryList.map((category, id) => {
            return (
                <Link to={`/categories/${category.id}`} key={id}>
                    <div>
                        <Category category={category} />
                    </div>
                </Link>
            );
        });
        return list;
    }

    render() {
        const styles = this.getStyles();
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppearTimeout={500}
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={false}>
                <div className="" key='2' style={styles.headerStyle}>
                    <h3 className="text-center" >Select category of your interest</h3>
                </div>
                <div className="container" key='1' style={styles.categoryStyle}>
                    {this.renderCategory()}
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default connect(null, actions)(Categories);
