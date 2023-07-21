import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';

Photo.propTypes = {};

function Photo(props) {
  return (
    <div>
      <div className="container">
        <ul>
          <li><Link to="add">Add new photo page</Link></li>
        </ul>
        <Routes>
          <Route end path="" element={<MainPage />} />

          <Route path="add" element={<AddEditPage />} />
          <Route path=":photoId" element={<AddEditPage />} />

          <Route element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default Photo;