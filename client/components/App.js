import React from 'react';
import { Component } from 'react';
import Header from './NavigationBar';


class App extends Component {
    render(){
        return (
            <div className='container'>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default App;
