import React from 'react';
import { Component } from 'react';
import Navigation from './NavigationBar';
import Footer from './Footer';
import Radium from 'radium';

class App extends Component {
    getStyles() {
        return {
             containerStyle: {
                // margin: 0,
                padding: 0,
                // width: "100%",
                minHeight: "100vh",
                height: "100%",
                background: "#FAFAFA",
                paddingTop:"80px"
            },
            rowStyle: {
                background: "#FAFAFA"
            }
        }
    }
    render(){
        const styles = this.getStyles();
        return (
            <div>
                <Navigation />
                <div className='container'  style={styles.containerStyle}>
                    <div className="row" style={styles.rowStyle}>
                        <div className="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
