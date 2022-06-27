import React from 'react';
import Header from './components/todos/pages/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/todos/pages/Home';
import Form from './components/todos/pages/Form';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path='header' element = {<Header />} />
        <Route path='form' element = {<Form />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
