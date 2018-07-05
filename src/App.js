import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/app.css';
import Text from './Text.js'
import Collection from './Collection.js'
import AddUrl from './AddUrl.js'
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
    collectionUrl: "http://localhost:8080/plaoulcommentary.json",
    collectionData: undefined,
    textUrl: "",
    textData: "",
    visible: "collection"
  }
  componentDidMount(){
    //this.retrieveText()
    //this.retrieveCollectionData()
    this.handleCollectionUrlUpdate(this.state.collectionUrl)
  }
  handleUrlUpdate(url, visible="text", clearCollection=false) {
    console.log("test", url)

    axios.get(url)
      .then(res => {
        console.log(res.data)
        const text = res.data
        //this.handleTextDataUpdate(text)
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
        console.log(res.data)
        const collectionData = res.data
        //this.handleCollectionDataUpdate(collectionData)
        this.setState(
          {
            collectionUrl: url,
            visible: visible,
            collectionData: collectionData,
            textUrl: "",
            textData: "",
          }
        )
      });

  }
  // handleCollectionDataUpdate(data) {
  //   console.log("test from App.handleCollectionDataUpdate")
  //   this.setState(
  //     {
  //       collectionData: data,
  //     }
  //   )
  // }
  // handleTextDataUpdate(data) {
  //   console.log("test from App.handleCollectionDataUpdate")
  //   this.setState(
  //     {
  //       textData: data,
  //     }
  //   )
  // }
  // retrieveCollectionData(){
  //   axios.get(this.state.collectionUrl)
  //     .then(res => {
  //       console.log(res.data)
  //       const collectionData = res.data
  //       this.handleCollectionDataUpdate(collectionData)
  //     });
  // }
  // retrieveText(){
  //   axios.get(this.props.textUrl)
  //     .then(res => {
  //       console.log(res.data)
  //       const text = res.data
  //       this.handleTextDataUpdate(text)
  //     });
  // }
  render() {
    console.log("state at render", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1 className="App-title">Pellego</h1>
          </div>
          <p>A <a href="http://lombardpress.org">LombardPress</a> Application | Powered by <a href="http://scta.info">SCTA</a> Data</p>

        </header>
        <AddUrl
          handleUrlUpdate={this.handleUrlUpdate}
          handleCollectionUrlUpdate={this.handleCollectionUrlUpdate}
        />
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
