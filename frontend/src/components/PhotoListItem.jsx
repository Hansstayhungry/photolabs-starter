
import React from 'react';

import '../styles/PhotoListItem.scss';

import PhotoFavButton from './PhotoFavButton';
import { useState } from 'react';

const PhotoListItem = (props) => {
  const { id, location, imageSource, username, name, profile } = props;
  const [fav, setFav] = useState(false)

  const handleFav = () => {
    setFav((prevFav) => !prevFav);
  };
  
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src= {imageSource} id={id} />
      {/* add fav-button overlay */}
      <PhotoFavButton onClick={handleFav} fav={fav} />

      <div className="photo-list__user-location">{location.city}, {location.country}</div>
      <img className="photo-list__user-profile" src={profile} />
      <div className='photo-list__user-info photo-list__user-details'>{name}</div> 
      <div className='photo-list__user-info photo-list__user-details'>{username}</div> 
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
}

export default PhotoListItem