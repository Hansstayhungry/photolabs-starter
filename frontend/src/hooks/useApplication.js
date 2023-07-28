import { useState } from "react";

// const useApplication = () => {
//   const [selectedPhoto, setSelectedPhoto] = useState();
//   const [isOpened, setIsOpened] = useState();

// // destructure similar photo

//   const handleSelectedPhoto = (photo) => {
//     setSelectedPhoto(photo);
//     setIsOpened(true);
//     console.log(`photo ${photo.id} clicked`)
//     console.log(`suggestion photos are ${photo.similarPhotos}`)
//     console.log("photo in handleselectedphoto", photo)
//   }

//   const handleIsOpened = () => {
//     setIsOpened(false);
//     setSelectedPhoto("");
//     console.log("close button clicked");
//   }



//   return { handleSelectedPhoto, handleIsOpened, selectedPhoto }
// }

// export default useApplication;

import { useReducer } from 'react';

const initialState = {
  selectedPhoto: null,
  isOpened: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_PHOTO':
      return {
        ...state,
        selectedPhoto: action.payload,
        isOpened: true
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        selectedPhoto: null,
        isOpened: false
      };
    default:
      return state;
  }
};

const useApplication = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [fav, setFav] = useState([]);
  // console.log("homeroute props", props);

  const handleFavCount = (id) => {
    setFav((prevFav) => {
      // console.log("favourite images length", fav.length)
      // console.log("favourite picture id", id)
      if (prevFav.includes(id)) {
        return prevFav.filter((favId) => favId !== id);
      } else {
        return [...prevFav, id];
      }
    });

  };

  const handleSelectedPhoto = (photo) => {
    dispatch({ type: 'SELECT_PHOTO', payload: photo });
    console.log(`photo ${photo.id} clicked`);
    // console.log(`suggestion photos are ${photo.similarPhotos}`);
  };

  const handleIsOpened = () => {
    dispatch({ type: 'CLOSE_MODAL' });
    // console.log('close button clicked');
  };

  

  return {
    fav,
    handleFavCount,
    handleSelectedPhoto,
    handleIsOpened,
    selectedPhoto: state.selectedPhoto
  };
};

export default useApplication;