import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();
  }
  changeFilter(evt) {
    let value = evt.target.value;
    this.props.handleChange(value);
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="query">
            Enter query:
          </label>
          <input id="query" type="text" ref="queryField" onChange={this.changeFilter.bind(this)}/>
        </div>
      </form>
    )
  }
}