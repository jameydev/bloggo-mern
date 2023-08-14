import React from 'react';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header subtitle="The Social Media for Developers">Bloggo</Header>
      <Navbar />
      <Feed />
    </div>
  );
}

export default App;
