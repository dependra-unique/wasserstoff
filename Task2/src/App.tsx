import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistrationPage } from './pages/RegistrationPage';
import { ConfirmationPage } from './pages/ConfirmationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;