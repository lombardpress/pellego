import React, { Component } from 'react';
import axios from 'axios'
import Collection from './Collection.js'

var cetei = require("./vendor/CETEI.js");

class Text extends Component {
  constructor(props){
      super(props)
      this.convertText = this.convertText.bind(this)

  }
  componentDidUpdate() {
      this.convertText()
  }
  componentDidMount(){
    this.convertText()
  }
  convertText(){
    var _this = this;
    const htmlText = new cetei()
    if (this.props.textData){
      htmlText.makeHTML5(this.props.textData, function(data){
        //load text in div
        _this.refs.text.replaceChild(data, _this.refs.text.childNodes[0]);
      });
    }
  }

  render() {
    return (
        <div className="text" ref="text">
          Welcom to Pellego
        </div>
    );
  }
}

export default Text;
