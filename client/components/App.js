import React from 'react';
import { Component } from 'react';
import Navigation from './NavigationBar';
import Footer from './Footer';
import Radium from 'radium';

class App extends Component {
    getStyles() {
        return {
            pageStyle: {
                marginLeft:0,
                width: "100%",
                overflow: "hidden",
                height: "auto"
            },
             containerStyle: {
                padding: 0,
                width: "100%",
                minHeight: "100vh",
                height: "100%",
                background: "#F2F2F2",
                paddingTop:"50px"
            },
            rowStyle: {
                background: "#FAFAFA"
            }
        }
    }
    render(){
        const styles = this.getStyles();
        return (
            <div style={styles.pageStyle}>
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
