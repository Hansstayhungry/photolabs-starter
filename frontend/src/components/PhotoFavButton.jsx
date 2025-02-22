import React, { useReducer } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { handleFavCount, likedPhotoIds, id } = props;

  const isLike = likedPhotoIds.includes(id)

  // const [state, dispatch] = useReducer(reducer, initialState);

  const fill = isLike ? '#FF0000' : '#EEEEEE';

  return (
    <div className="photo-list__fav-icon" onClick={()=> handleFavCount(props.id)}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon fill={fill} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
