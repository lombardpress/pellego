import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/app.css';
import Text from './Text.js'
import AddUrl from './AddUrl.js'

class App extends Component {
  constructor(props){
      super(props)
      this.handleUrlUpdate = this.handleUrlUpdate.bind(this)
  }
  state = {
    textUrl: "http://gateway.scta.info/ipfs/QmSLZgYYx1TVbZUtBN71JAmG7wYRwHe8urqsZv8ZQiv85R"
  }
  handleUrlUpdate(url) {
    console.log(url)
    this.setState({textUrl: url})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1 className="App-title">Pellego</h1>
          </div>
          <p>A <a href="http://lombardpress.org">LombardPress</a> Application | Powered by <a href="http://scta.info">SCTA</a> Data</p>

        </header>
        <AddUrl
          handleUrlUpdate={this.handleUrlUpdate}/>
        <Text
          textUrl={this.state.textUrl}
          />
      </div>
    );
  }
}

export default App;
