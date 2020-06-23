import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Author from './Author'
import Genres from './Genres'
import Book from './Book';

function App() {



  


  async function getBook() {
    try {
      let res = await axios.get("http://localhost:5000/author")
      // let data = await res.data()
      console.log(res)
    }
    catch (err) {
      console.log(err)
    }

  }

  return (
    <>
      <div className="App">
        <Author></Author>
        <Genres></Genres>
        <Book></Book>
      </div>
    </>
  );
}

export default App;