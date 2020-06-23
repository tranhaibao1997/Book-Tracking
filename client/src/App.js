import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {


  React.useEffect(() => {
    getAuthor()
    return () => {

    }
  }, [])

  async function getAuthor() {
    try {
      let res = await axios.get("/author")
      let data = await res.data()
      console.log(data)
    }
    catch (err) {
      console.log(err)
    }

  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
