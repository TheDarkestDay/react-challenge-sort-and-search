import React, {Component} from 'react';
import UserData from './UserData';

export default class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    fetch('data.json').then((response) => {
      return response.json();
    }).then((data) => {
        this.setState({
          users: data
        });
    });
  } 
  renderUserData() {
    let records = [];
    for (let i=0;i<this.state.users.length;i++) {
      records.push(<UserData key={i} username={this.state.users[i].name}/>);
    }
    return records;
  }
  render() {
    return (
      <div>
        {this.renderUserData()}
      </div>
    )
  }
}