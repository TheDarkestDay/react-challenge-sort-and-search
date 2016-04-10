import React, {Component} from 'react';
import UserData from './UserData';
import SearchBar from './SearchBar';

export default class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      filter: ''
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
      if (this.state.users[i].name.indexOf(this.state.filter) != -1 || this.state.filter == '')
        records.push(<UserData key={i} username={this.state.users[i].name} handleClick={this.props.handleUserClick} userInfo={this.state.users[i]}/>);
    }
    return records;
  }
  updateFilter(val) {
    this.setState({
       filter: val
    });
  }
  render() {
    return (
      <div className="col-lg-9">
        <SearchBar handleChange={this.updateFilter.bind(this)}/>
        {this.renderUserData()}
      </div>
    )
  }
}