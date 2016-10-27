import React from 'react';
import { Component } from 'react';
import Greetings from './Greetings';
import NavigationBar from './NavigationBar';
import flashMessagesList from './flash/flashMessagesList';

class App extends Component {
    render(){
        return (
            <div className='container'>
                <NavigationBar />
                <flashMessagesList />
                {this.props.children}
            </div>
        )
    }
}

export default App;
