import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/app.css';
import Text from './Text.js'
import Collection from './Collection.js'
import AddUrl from './AddUrl.js'
import Header from './Header.js'
import axios from 'axios'

class App extends Component {
  constructor(props){
      super(props)
      this.handleUrlUpdate = this.handleUrlUpdate.bind(this)
      this.handleCollectionUrlUpdate = this.handleCollectionUrlUpdate.bind(this)
      //this.handleCollectionDataUpdate = this.handleCollectionDataUpdate.bind(this)
      //this.handleTextDataUpdate = this.handleTextDataUpdate.bind(this)
      //this.retrieveCollectionData = this.retrieveCollectionData.bind(this)
      //this.retrieveText = this.retrieveText.bind(this)
  }
  state = {
    collectionUrl: this.props.configOptions.collectionUrl,
    collectionData: this.props.configOptions.collectionData,
    textUrl: this.props.configOptions.textUrl,
    textData: this.props.configOptions.textData,
    visible: this.props.configOptions.visible,
    showHeader: this.props.configOptions.showHeader,
    showAddUrl: this.props.configOptions.showAddUrl
  }
  componentDidMount(){

    if (this.state.visible == "text"){
      this.handleUrlUpdate(this.state.textUrl)
    }
    else{
      this.handleCollectionUrlUpdate(this.state.collectionUrl)
    }
  }
  handleUrlUpdate(url, visible="text", clearCollection=false) {
    axios.get(url)
      .then(res => {
        const text = res.data

        this.setState(
          {
            textUrl: url,
            visible: visible,
            textData: text
          }
        )

      });
      if (clearCollection){
        this.setState(
          {
            collectionUrl: "",
            collectionData: undefined,
          }
        )
      }
  }
  handleCollectionUrlUpdate(url, visible="collection") {
    console.log(url)
    axios.get(url)
      .then(res => {
        const collectionData = res.data
        //this.handleCollectionDataUpdate(collectionData)
        this.setState(
          {
            collectionUrl: url,
            visible: visible,
            collectionData: collectionData,
            textUrl: "",
            textData: ""
          }
        )
      });

  }

  render() {
    console.log("state at render", this.state)
    return (
      <div className="App">
        {this.state.showHeader && <Header/>}
        {this.state.showAddUrl &&
        <AddUrl
          handleUrlUpdate={this.handleUrlUpdate}
          handleCollectionUrlUpdate={this.handleCollectionUrlUpdate}
        />}
        <div className="text-wrapper">
          {this.state.collectionData &&
            <Collection
              collectionUrl={this.state.collectionUrl}
              collectionData={this.state.collectionData}
              handleUrlUpdate={this.handleUrlUpdate}
              textUrl={this.state.textUrl}
            />}
          {this.state.textData &&
          <Text
            textUrl={this.state.textUrl}
            textData={this.state.textData}
            collectionData={this.state.collectionData}
        />}
        </div>
      </div>
    );
  }
}

export default App;
