import React, { Component } from 'react';
import { SiteMenu } from './components/menu/SiteMenu'
import NewsSection from './components/news-section/newsSection'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SiteMenu/>
        <NewsSection/>
      </div>
      

    );
  }
}

export default App;
