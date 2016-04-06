import React, {Component} from 'react';

export default class UserData extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <h1>
        {this.props.username}
      </h1>
    )
  }
}