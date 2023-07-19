// import React, { useCallback, useState } from 'react';

// import FavIcon from './FavIcon';
// import '../styles/PhotoFavButton.scss';

// function PhotoFavButton(props) {
//   const { handleFavCount } = props;
//   const [fav, setFav] = useState()

// use usecallback to prevent re-render if fav is not changed
// const handleFav = useCallback(() => {
//   setFav((prevFav) => !prevFav);
// },[fav]);
//   const handleFav = () => {
//     setFav((prevFav) => !prevFav);
//   }

//   const handleOnClick = () => {
//     handleFavCount(props.id);
//     handleFav();
//   };

//   const fill = fav ? '#FF0000' : '#EEEEEE';

//   return (
//     <div className="photo-list__fav-icon" onClick={handleOnClick}>
//       <div className="photo-list__fav-icon-svg">
//         {/* Insert React */}
//         <FavIcon fill={fill}/>
//       </div>
//     </div>
//   );
// }

// export default PhotoFavButton;



import React, { useReducer } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const initialState = {
  fav: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAV':
      return { ...state, fav: !state.fav };
    default:
      throw new Error('Unsupported action type');
  }
}

function PhotoFavButton(props) {
  const { handleFavCount } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnClick = () => {
    handleFavCount(props.id);
    dispatch({ type: 'TOGGLE_FAV' });
  };

  const fill = state.fav ? '#FF0000' : '#EEEEEE';

  return (
    <div className="photo-list__fav-icon" onClick={handleOnClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon fill={fill} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
