import React, { Component } from 'react';

export default class ActiveUser extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-lg-3">
        <h2>
          Name:
        </h2>
        <p>
          {this.props.user.name}
        </p>
        <h2>
          Age:
        </h2>
        <p>
          {this.props.user.age}
        </p>
        <h2>
          Phone:
        </h2>
        <p>
          {this.props.user.phone}
        </p>
        <h2>
          Phrase:
        </h2>
        <p>
          {this.props.user.phrase}
        </p>
      </div>
    );
  }
}