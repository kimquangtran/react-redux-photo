import React, { Suspense } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.scss';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import Header from './components/Header';
import AddEditPage from './features/Photo/pages/AddEdit';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          {/* <Redirect exact from="/" to="/photos"></Redirect> */}
          <Route path="/" element={<Navigate to="photos" replace={true} />} ></Route>
          <Route end path="/photos/*" element={<Photo />}></Route>
          {/* <Route path="/photos/add" element={<AddEditPage />} /> */}
          {/* <Route element={<NotFound />}></Route> */}
          
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
