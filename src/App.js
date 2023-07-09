import React from 'react'
import RandomImageGenerator from './RandomImageGenerator'
import ImagePage from './ImagePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RandomImageGenerator />} />
        <Route path="/image/:imageId" element={<ImagePage />} />
      </Routes>
    </Router>

  )
}

export default App;