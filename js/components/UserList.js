import React, {Component} from 'react';
import UserData from './UserData';

export default class UserList extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    fetch('data.json').then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    });
  }
  renderUserData() {
    let records = [];
    for (let i=0;i<5;i++) {
      records.push(<UserData key={i} />);
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