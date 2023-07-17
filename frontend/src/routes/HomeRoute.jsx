import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  const [fav, setFav] = useState([]);

  const handleFavCount = (id) => {
    setFav((prevFav) => {
      console.log("favourite images length", fav.length)
      console.log("favourite picture id", id)
      if (prevFav.includes(id)) {
        return prevFav.filter((favId) => favId !==id)
      } else {
        return [...prevFav, id];
      }
    })

  }

  const isFavPhotoExist = fav.length > 0 ? true : false;

  return (
    <div className="home-route">
      <TopNavigation topics ={props.topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={props.photos} fav={fav} handleFavCount={handleFavCount} handleSelectedPhoto={props.handleSelectedPhoto}/>
    </div>    
  )

}

export default HomeRoute;