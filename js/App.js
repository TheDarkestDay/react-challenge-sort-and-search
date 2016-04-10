import React, { Component } from 'react';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: {
        name: "name"
      }
    }
  }
  selectUser(user) {
    this.setState({
      selectedUser: user
    });
  }
  render() {
    return (
      <div className="container app">
          <UserList handleUserClick={this.selectUser.bind(this)}/>
          <ActiveUser user={this.state.selectedUser}/>
      </div>
    );
  }
}
