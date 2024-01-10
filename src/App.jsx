import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './userContext';
import './App.css';
import Home from './components/Home';

import ListaControle from './components/Dashboard/listaControle';
import ProtectedRoute from './Helper/ProtectedRoute';
import NotFound from './Helper/NotFound';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="lista"
                element={
                  <ProtectedRoute>
                    <ListaControle />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
