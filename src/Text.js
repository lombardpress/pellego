import React, { Component } from 'react';
import axios from 'axios'

var cetei = require("./vendor/CETEI.js");

class Text extends Component {
  state = {
    text: "",
  }
  componentDidUpdate() {
    this.retrieveText()

    var _this = this;
		const htmlText = new cetei()
		if (this.state.text){
			htmlText.makeHTML5(this.state.text, function(data){
				//load text in div
				_this.refs.text.replaceChild(data, _this.refs.text.childNodes[0]);
      });
		}
  }
  componentDidMount(){
    this.retrieveText()
  }
  retrieveText(){
    axios.get(this.props.textUrl)
      .then(res => {
        console.log(res.data)
        const text = res.data
        this.setState({text})
      });
    // try to load data from local storage
    try {
      const state = JSON.parse(localStorage.getItem("gobitsState"));
      //only load state if state is not empty
      if (state){
          this.setState(() => (state));
        }
    }
    // if local storage fails do nothing and proceed with the default state
    catch (e) {

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
