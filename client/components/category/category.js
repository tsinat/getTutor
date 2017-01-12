import React from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

const Category = (props) => {
    const styles = {
        category: {
            margin: "0",
            padding: "0 10px"
        },
        imgContainer: {
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
            margin: "0 auto",
            height: "140px",
            width: "100%",
        },
        image: {
          width: "100%",
          height: "auto",
          borderBottom: "1px solid lightgrey"
        },
        thumbnailStyle: {
          background:"#FFFFFF",
          border: "none",
          borderRadius: 0,
          padding:0,
        //   height: "280px",
          boxShadow:"2px 5px 10px 0px rgba(46,61,73,0.15)"
      },
      captionStyle: {
          padding: "0 15px 10px 15px",
      },
      headerStyle: {
          color: "#697881",
      }
    };

    return (
        <div className="col-xs-12 col-md-4" style={styles.category}>
            <div className="thumbnail" style={styles.thumbnailStyle}>
                <div style={styles.imgContainer}>
                    <img src={props.category.image} alt="..." style={styles.image}/>
                </div>
                <div className="caption" style={styles.captionStyle}>
                    <h3 style={styles.headerStyle}>{ props.category.title}</h3>
                    <p>{props.category.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Category;
