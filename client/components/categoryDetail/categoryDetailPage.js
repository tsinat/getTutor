import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/usersAction';
import SingleUserList from '../home/singleUserList';

class CategoryDetail extends Component {
    constructor() {
        super();
        this.state = { searchPhrase: ''};
    }
    componentWillMount() {
        const param = this.props.params.id.split('_');
        let phrase = "";
        if(param.length > 1){
            phrase = (param[0]+ " " + param[1]);
            this.setState({searchPhrase: phrase});
            this.props.getCategoryUsers(phrase);
        } else {
            phrase = param[0];
            this.setState({searchPhrase: phrase});
            this.props.getCategoryUsers(phrase);
        }
        console.log(this.state.searchPhrase);
        console.log(param);
    }
    render() {
        return(
            <div className="container">
                <h2 className="text-center">{this.state.searchPhrase}</h2>
                <hr />
                <SingleUserList allUsers={this.props.cateogryUsers} key='what'/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        cateogryUsers: state.currentUser.cateogryUsers
    }
}

export default connect(mapStateToProps, actions)(CategoryDetail);
