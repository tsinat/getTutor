import React from 'react';
import { Component } from 'react';
import Navigation from './NavigationBar';

class App extends Component {
    render(){
        const containerStyle = {
            marginTop: "60px"
        }
        return (
            <div>
                <Navigation />
                <div className='container' style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
