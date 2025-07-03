// File: src/App.jsx
import React, { Suspense, lazy } from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

function App() {

  return (
     <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="container mx-auto p-4">
        <Suspense
          fallback={
            <div className="text-center text-lg text-blue-500 font-semibold">
              Loading...
            </div>
          }>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
