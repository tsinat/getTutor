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
        inputStyle: {
            height: "40px"
        }
    }
    return (
        <div style={styles.imageStyle}>
            <form className="row">
                <div className="col-xs-5 col-xs-offset-2 col-md-4 col-md-offset-3">
                    <input className="form-control" type="text"  style={styles.inputStyle} placeholder=" Please enter your email"/>
                </div>
                <div className="col-xs-3 col-md-2">
                    <button className="btn btn-primary btn-block " style={styles.inputStyle}>Subscribe</button>
                </div>
            </form>
        </div>
    );
}

export default Subscribe;
