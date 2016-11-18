import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import * as actions from '../../actions';
import Category from './category';

class Categories extends Component {
    getStyles() {
        return {
            categoryStyle: {
                height: "auto"
            }
        }
    }
    renderCategory() {
        let categoryList = [
            {
            title: "Web Development",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
            image: "https://placeholdit.imgix.net/~text?txtsize=23&bg=ffffff&txtclr=000000&txt=250%C3%97250&w=250&h=250"
            },
            {
            title: "Networking",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
            image: "https://placeholdit.imgix.net/~text?txtsize=23&bg=ffffff&txtclr=000000&txt=250%C3%97250&w=250&h=250"
            },
            {
            title: "Graphic Design",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
            image: "https://placeholdit.imgix.net/~text?txtsize=23&bg=ffffff&txtclr=000000&txt=250%C3%97250&w=250&h=250"
            },
            {
            title: "Highschool Tutor",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
            image: "https://placeholdit.imgix.net/~text?txtsize=23&bg=ffffff&txtclr=000000&txt=250%C3%97250&w=250&h=250"
            },
            {
            title: "Language Mentor",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
            image: "https://placeholdit.imgix.net/~text?txtsize=23&bg=ffffff&txtclr=000000&txt=250%C3%97250&w=250&h=250"
            },
            {
            title: "Vocational Training",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
            image: "https://placeholdit.imgix.net/~text?txtsize=23&bg=ffffff&txtclr=000000&txt=250%C3%97250&w=250&h=250"
            }
        ];
        const list = categoryList.map((category, id) => {
            return <Category category={category} key={id}/>;
        });
        return list;
    }
    render() {
        const style = this.getStyles();
        return (
            <div style={style.categoryStyle}>
                {this.renderCategory()}
            </div>
        )
    }
}

export default connect(null, actions)(Categories);
