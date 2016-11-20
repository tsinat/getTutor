import React from 'react';

const Header = () => {
    return (
        <div className="row">
            <div className="col-sm-12">
                {/*<div>*/}
                    <video  src="https://d2fa3j67sd1nwo.cloudfront.net/video/homepage.020d4af35dca.mp4" type="video/mp4" id='myvideo' autoPlay="autoplay" loop>
                        {/*<source src="https://d2fa3j67sd1nwo.cloudfront.net/video/homepage.020d4af35dca.mp4" type="video/mp4" data-reactid=".0.1.0.0.0"/>*/}
                    </video>
                    <h1 className="text-center">getMentor</h1><br />
                    <h2 className="text-center">The easiest way to get local or online mentor</h2>
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Header;
