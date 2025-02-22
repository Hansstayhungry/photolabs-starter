import React from 'react';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';
import PhotoFavButton from '../components/PhotoFavButton';


import '../styles/PhotoDetailsModal.scss';


export const PhotoDetailsModal = (props) => {
  const { handleIsOpened, likedPhotoIds, handleFavCount } = props;
  const { handleSelectedPhoto,
    fullImageSource, id, location, name, profile, username, similarPhotos } = props.selectedPhoto;

  // console.log("similar photo debug", similarPhotos)
  // convert similar_photo object to array
  const similarPhotoArray = Object.values(similarPhotos ? similarPhotos : {});

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal__close-button' onClick={handleIsOpened}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className='photo-details-modal__image-container'>
        <img className='photo-details-modal__image' src={fullImageSource} />
        <div className='photo-details-modal__fav-button'>
          <PhotoFavButton handleFavCount={handleFavCount} id={id} likedPhotoIds={likedPhotoIds} />
        </div>
      </div>
      <div className='photo-details-modal__profile-container'>
        <img className="photo-details-modal__profile" src={profile} />
        <div className='photo-details-modal__photographer-details'>
          <div>{name}</div>
          <div className='photo-list__user-location'>{location.city}, {location.country} </div>
        </div>

      </div>

      <h2>Similar Photos</h2>
      <div className='.photo-details-modal__top-bar'>
        <PhotoList photos={similarPhotoArray} handleFavCount={handleFavCount} likedPhotoIds={likedPhotoIds} handleSelectedPhoto={null}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;