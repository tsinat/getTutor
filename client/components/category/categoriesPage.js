import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as actions from '../../actions';
import Category from './category';
import { Link, browserHistory} from 'react-router';
import categoryList from '../../data/categoriesData';
import CSSModules from 'react-css-modules';
import category from './category.css'

class Categories extends Component {
    getStyles() {
        return {
            categoryStyle: {
                height: "auto",
                overflow: "scroll",
                marginBottom: 0
            },
            headerStyle: {
                marginTop: '-10px',
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
                <div className="container" key='1'>
                    <div className="" key='2'>
                        <h2 className="text-center" style={styles.headerStyle}>Select the category of your interest</h2>
                    </div>
                    <hr />
                    {this.renderCategory()}
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default connect(null, actions)(Categories);
