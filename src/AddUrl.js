import React, { Component } from 'react';

class AddUrl extends Component {
  constructor(props){
      super(props)
      this.handleUrlUpdate = this.handleUrlUpdate.bind(this)
      this.handleCollectionUrlUpdate = this.handleCollectionUrlUpdate.bind(this)
  }
  handleUrlUpdate(e) {
    e.preventDefault();
    const url = e.target.elements.url.value.trim();
    this.props.handleUrlUpdate(url, "text", true)
  }
  handleCollectionUrlUpdate(e) {
    e.preventDefault();
    const url = e.target.elements.collectionUrl.value.trim();
    this.props.handleCollectionUrlUpdate(url, "collection")
  }
  render() {
    return (
      <div>
        <form className="addUrl" onSubmit={this.handleUrlUpdate}>
          <input type="text" name="url" placeholder="Add text URL here"/>
          <button>Submit</button>
        </form>
        <form className="addUrl" onSubmit={this.handleCollectionUrlUpdate}>
          <input type="text" name="collectionUrl" placeholder="Add text Collection URL here"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUrl;
