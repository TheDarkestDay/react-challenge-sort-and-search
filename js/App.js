import React, { Component } from 'react';
import UserList from './components/UserList';


export default class App extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <div className="container app">
          <UserList />
      </div>
    );
  }
}
