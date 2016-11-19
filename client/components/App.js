import React from 'react';
import { Component } from 'react';
import Navigation from './NavigationBar';
import Footer from './Footer';
import Radium from 'radium';

class App extends Component {
    getStyles() {
        return {
             containerStyle: {
                marginTop: "80px",
                minHeight: "100vh"
            }
        }
    }
    render(){
        const styles = this.getStyles();
        return (
            <div>
                <Navigation />
                <div className='container'  style={styles.containerStyle}>
                    <div className="row">
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
