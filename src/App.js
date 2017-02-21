import React, { Component } from 'react';
import { SiteMenu } from './components/menu/SiteMenu'
import NewsSection from './components/news-section/newsSection'
import NewsFeed from './components/news-section/NewsFeed'

class App extends Component {
  render() {
    return (
      <div>
        <SiteMenu/>
        <div style={{display:'flex', justifyContent:'center'}} className='ui container'> 
             <NewsSection/>
            <NewsFeed/>
           
        </div>
      
      </div>
      

    );
  }
}

export default App;
