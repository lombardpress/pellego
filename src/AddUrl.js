import React, { Component } from 'react';

class AddUrl extends Component {
  constructor(props){
      super(props)
      this.handleUrlUpdate = this.handleUrlUpdate.bind(this)
  }
  handleUrlUpdate(e) {
    e.preventDefault();
    const url = e.target.elements.url.value.trim();
    this.props.handleUrlUpdate(url)
  }
  render() {
    return (
      <form className="addUrl" onSubmit={this.handleUrlUpdate}>
        <input type="text" name="url" placeholder="Add text URL here"/>
        <button>Submit</button>
      </form>
    );
  }
}

export default AddUrl;
