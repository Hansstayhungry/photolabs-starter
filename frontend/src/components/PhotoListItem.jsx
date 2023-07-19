
import React from 'react';

import '../styles/PhotoListItem.scss';

import PhotoFavButton from './PhotoFavButton';
import { useState } from 'react';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, name, profile, handleSelectedPhoto, similarPhotos, handleFavCount,
    fullImageSource } = props;

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} id={id} onClick={() => handleSelectedPhoto(props)} />
      {/* add fav-button overlay */}
      <PhotoFavButton fav={props.fav} handleFavCount={handleFavCount} id={props.id} />

      <div className='photo-list__user-details'>
        <img className="photo-list__user-profile" src={profile} />

        <div className='photo-list__user-info'>
          <div>{name}</div>

          <div className='photo-list__user-location'>{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
};

export default PhotoListItem;