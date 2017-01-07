import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

const Category = (props) => {
    const styles = {
        category: {
            marginBottom: "20px",
        },
        image: {
            width: "100%",
            height: "150px",
            borderBottom: "1px solid lightgrey"
        },
        thumbnailStyle: {
            background:"#EFF0F2",
            border: "none",
            borderRadius: 0,
            padding:0,
            boxShadow: "1px 1px 1px lightgrey"
        }
    };

    return (
        <div className="col-sm-6 col-md-4" style={styles.category}>
            <div className="thumbnail" style={styles.thumbnailStyle}>
                <img src={props.category.image} alt="..." style={styles.image}/>
                <div className="caption">
                    <h3>{ props.category.title}</h3>
                    <p>{props.category.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Category;
