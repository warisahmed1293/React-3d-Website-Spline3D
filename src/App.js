import { useState } from 'react'
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Testimonial from './component/Testimonial';
import Coursel from './component/Coursel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Coursel />

    </div>
  );
}

export default App;
