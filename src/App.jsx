import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.jsx';
import Page1 from './pages/Page1/Page1.jsx';
import Page2 from './pages/Page2/Page2.jsx';
import Page3 from './pages/Page3/Page3.jsx';
import Page4 from './pages/Page4/Page4.jsx';
import Page5 from './pages/Page5/Page5.jsx';

const basePath = process.env.REACT_APP_BASE_PATH || '/';

const App = () => {
  return (
    <BrowserRouter basename={basePath}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<Page1 />} />
        <Route path="/assortment" element={<Page2 />} />
        <Route path="/priceList" element={<Page3 />} />
        <Route path="/contacts" element={<Page4 />} />
        <Route path="/news" element={<Page5 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
