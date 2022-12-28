import React from 'react'
import ToDo from './Component/ToDo'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import './style.css'

const App = () => {
  return (
    <>
    <Header />
    <ToDo />
    </>
  )
}

export default App;

