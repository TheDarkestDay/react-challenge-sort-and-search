import React, {Component} from 'react';
import UserData from './UserData';

export default class UserList extends Component {
  constructor() {
    super();
  }
  renderUserData() {
    let records = [];
    for (let i=0;i<5;i++) {
      records.push(<UserData />);
    }
    return records;
  }
  render() {
    return (
      <h1>
        {this.renderUserData()}
      </h1>
    )
  }
}