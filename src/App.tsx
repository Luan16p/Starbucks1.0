import React from 'react';
import './App.css';

import './Css/Responsive.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header';
import Carousel_ from './Components/Carousel_';
import Content from './Components/Content';
import Footer from './Components/Footer';

export default function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="apresentation shadow p-3 mb-5 bg-body rounded">
          <Carousel_ />
          <Content />
        </div>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}
