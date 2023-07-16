import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { fav, onClick } = props

  const fill = fav ? '#FF0000' : '#EEEEEE';

  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon fill={fill}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;