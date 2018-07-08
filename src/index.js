import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const configOptions = {
  collectionUrl: document.getElementById('root').getAttribute("data-collectionUrl"),
  collectionData: document.getElementById('root').getAttribute("data-collectionData"),
  textUrl: document.getElementById('root').getAttribute("data-textUrl"),
  textData: document.getElementById('root').getAttribute("data-textData"),
  visible: document.getElementById('root').getAttribute("data-visible"),
  showHeader: document.getElementById('root').getAttribute("data-showHeader") === "true" ? true : false,
  showAddUrl: document.getElementById('root').getAttribute("data-showAddUrl") === "true" ? true : false,

}
ReactDOM.render(<App configOptions={configOptions} />, document.getElementById('root'));
registerServiceWorker();
