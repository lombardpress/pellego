import React, { Component } from 'react';
import axios from 'axios'


class Collection extends Component {
  constructor(props){
      super(props)
      this.handleTextUrlUpdate = this.handleTextUrlUpdate.bind(this)
  }
  handleTextUrlUpdate(data, e){
    console.log("e", e)
    console.log("data", data)
    this.props.handleUrlUpdate(data, "text")
  }
  render() {
    const items = () => {
      if (this.props.collectionData.items){
      const newItems = this.props.collectionData.items.map((i) => {
        let style = {}
        if (i.canonicalManifestation.canonicalTranscription.service["@id"] === this.props.textUrl){
          style = {"font-weight": "bold"}
        }
        return (
          <div key={i["@id"]}>
            <p style={style}><a onClick={this.handleTextUrlUpdate.bind(this, i.canonicalManifestation.canonicalTranscription.service["@id"])}>{i.title}</a></p>
          </div>
        )
      });
      return newItems
    }
  }
    return (
      <div className="collection-viewer" ref="collection">
        <p>{this.props.collectionData.title}</p>
        <p>{this.props.collectionData.author}</p>
        {items()}
      </div>
    );
  }
}

export default Collection;
