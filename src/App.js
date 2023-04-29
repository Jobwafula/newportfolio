import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import { Routes,Route } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Projects' element={<Projects />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Form' element={<Form />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
