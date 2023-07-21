import React from 'react';
import './styles.scss';
import { Button } from 'reactstrap';
import PhotoForm from '../../components/PhotoForm';

function AddEdit(props) {
  return (
    <div>
      <div className="container">
        <h2>Add Edit</h2>
        <div className="photo-app__form">
          <form action="">
            <PhotoForm onSubmit={(values) => console.log('Form submit: ', values)} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEdit;