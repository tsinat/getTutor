import React from 'react';

const Subscribe = (props) => {
    const styles = {
        imageStyle: {
            backgroundImage: "url(http://www.easternct.edu/wp-content/uploads/2015/06/currentSlideshow05.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "160px",
            paddingTop: "60px",
            overflow: "hidden"
        },
        colStyle: {
            paddingRight: 0
        },
        inputStyle: {
            height: "40px",
            marginRight: 0,
        },
        btnStyle: {
            height: "40px",
            marginRight: 0,
            backgroundColor: "transparent",
            color: "#FFFFFF",
            border: "2px solid #F05A50",
            fontWeight: "bold"
        }
    }
    return (
        <div style={styles.imageStyle}>
            <form className="row">
                <div className="col-xs-6 col-xs-offset-1 col-md-4 col-md-offset-3" style={styles.colStyle}>
                    <input className="form-control" type="text"  style={styles.inputStyle} placeholder=" Please enter your email"/>
                </div>
                <div className="col-xs-4 col-md-2">
                    <button className="btn btn-block " style={styles.btnStyle}>Subscribe</button>
                </div>
            </form>
        </div>
    );
}

export default Subscribe;
