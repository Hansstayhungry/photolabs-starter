import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { handleFavCount } = props;
  const [fav, setFav] = useState()

  // use usecallback to prevent re-render if fav is not changed
  // const handleFav = useCallback(() => {
  //   setFav((prevFav) => !prevFav);
  // },[fav]);
  const handleFav = () => {
    setFav((prevFav) => !prevFav);
  }
  
  const handleOnClick = () => {
    handleFavCount(props.id);
    handleFav();
  };

  const fill = fav ? '#FF0000' : '#EEEEEE';

  return (
    <div className="photo-list__fav-icon" onClick={handleOnClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon fill={fill}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;