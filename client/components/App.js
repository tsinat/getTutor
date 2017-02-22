import React from 'react';
import { Component } from 'react';
import Radium from 'radium';

import Navigation from './NavigationBar';
import Footer from './Footer';

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
                minHeight: "100vh",
                height: "100%",
                paddingTop:"80px",
            },
            rowStyle: {
                marginTop:"-30px",
                paddingTop: "15px",
                background: "#F4F4EF",
            }
        }
    }

    render(){
        const styles = this.getStyles();
        return (
            <div style={styles.pageStyle}>
                <Navigation />
                <div className=''  style={styles.containerStyle}>
                    <div className="row" style={styles.rowStyle}>
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
