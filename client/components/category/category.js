import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

const getStyles = () => {
        return {
            category: {
                // width: "50%",
                // height: "200px",
                // marginBottom: "20px"
            },
            image: {
                width: "150px",
                height: "150px"
            }
        }
    }

const Category = (props) => {
    const style = getStyles();
    return (
        <Link to={"#"} >
            <div className="col-sm-6 col-md-4" style={style.category}>
                <div className="thumbnail">
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
