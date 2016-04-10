import React, {Component} from 'react';

export default class UserData extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <h1 onClick={this.props.handleClick.bind(null,this.props.userInfo)}>
        {this.props.username}
      </h1>
    )
  }
}