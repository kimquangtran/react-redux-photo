import React from 'react';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Main(props) {
  const navgate = useNavigate();
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos);
  console.log({ photos });

  const handlePhotoEditClick = (photo) => {
    console.log('handlePhotoEditClick', photo);
    const editPhotoUrl = `${photo.id}`;
    navgate(editPhotoUrl);

    // const action = updatePhoto(photo);
    // dispatch(action);
  }

  const handlePhotoRemoveClick = (photo) => {
    console.log('handlePhotoRemoveClick', photo);

    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  }

  return (
    <div>
      <PhotoList
        photoList={photos}
        onPhotoEditClick={handlePhotoEditClick}
        onPhotoRemoveClick={handlePhotoRemoveClick}
      />
    </div>
  );
}

export default Main;