import React, { Component } from 'react';
import './App.css';

import Layout from './containers/Layout/Layout'
import Main from './containers/Main/Main'
import Banner from './components/Banner/Banner'
import Blog from './containers/Blog/Blog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Banner />
          <Blog />
          {/* <Main /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
