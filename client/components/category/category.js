import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

const getStyles = () => {
        return {
            category: {
                marginBottom: "20px",
            },
            image: {
                width: "100%",
                height: "150px",
                borderBottom: "1px solid lightgrey"
            },
            thumbnailStyle: {
                border: "none",
                borderRadius: 0,
                boxShadow: "1px 1px 1px lightgrey"
            }
        };
    }

const Category = (props) => {
    const style = getStyles();
    return (
        <Link to={"#"} >
            <div className="col-sm-6 col-md-4" style={style.category}>
                <div className="thumbnail" style={style.thumbnailStyle}>
                    <img src={props.category.image} alt="..." style={style.image}/>
                    <div className="caption">
                        <h3>{ props.category.title}</h3>
                        <p>{props.category.desc}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Category;
