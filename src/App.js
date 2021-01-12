import React from 'react';
import AlgoliaSearch from './components/AlgoliaSearch'
import'./App.css';


class App extends React.Component {



   
  render() {
    return (
      <div className="ui container main-container"> 
          <AlgoliaSearch />
          
      </div>
    );
  }
}

export default App;