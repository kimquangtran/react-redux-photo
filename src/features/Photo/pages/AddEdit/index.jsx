import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'; // v5 use useHistory
import './styles.scss';
import PhotoForm from '../../components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { randomNumber } from 'utils/common';


function AddEdit(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  // console.log(photoId);
  const isAddMode = !photoId;
  const editedPhoto = useSelector(
    // do photoId tren query params la chuoi nen can chuyen thanh so
    // bang cach them dau + phia truoc
    state => state.photos.find(x => x.id === +photoId)
  );

  const initialValues = isAddMode
    ? {
      title: '',
      categoryId: null,
      photo: ''
    }

    : editedPhoto;

  console.log({ initialValues });

  const handleSubmit = (values) => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Form submit: ', values);

        const newPhoto = {
          ...values,
          id: randomNumber(10000, 99999)
        }

        const action = isAddMode ? addPhoto(newPhoto) : updatePhoto(values);
        console.log(action);
        dispatch(action);

        navigate('/photos');
        resolve(true);
      }, 2000);
    });
  }

  return (
    <div>
      <div className="container">
        <h2>Add Edit</h2>
        <div className="photo-app__form">
          <PhotoForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default AddEdit;