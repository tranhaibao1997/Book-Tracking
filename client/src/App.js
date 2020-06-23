import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Author from './Author'
import Genres from './Genres'

function App() {


  React.useEffect(() => {
    getAuthor()
    return () => {

    }
  }, [])

  async function getAuthor() {
    try {
      let res = await axios.get("http://localhost:5000/author")
      // let data = await res.data()
      console.log(res)
    }
    catch (err) {
      console.log(err)
    }

  }

  async function getGenres() {
    try {
      let res = await axios.get("http://localhost:5000/author")
      // let data = await res.data()
      console.log(res)
    }
    catch (err) {
      console.log(err)
    }

  }

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
      </div>
    </>
  );
}

export default App;