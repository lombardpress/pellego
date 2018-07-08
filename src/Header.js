import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <h1 className="App-title">Pellego</h1>
        </div>
        <p>A <a href="http://lombardpress.org">LombardPress</a> Application | Powered by <a href="http://scta.info">SCTA</a> Data</p>
      </header>
    );
  }
}

export default Header;
