import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {
  // const [fav, setFav] = useState([]);
  // console.log("homeroute props", props);

  // const handleFavCount = (id) => {
  //   setFav((prevFav) => {
  //     // console.log("favourite images length", fav.length)
  //     // console.log("favourite picture id", id)
  //     if (prevFav.includes(id)) {
  //       return prevFav.filter((favId) => favId !== id);
  //     } else {
  //       return [...prevFav, id];
  //     }
  //   });

  // };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} likedPhotoIds={props.likedPhotoIds} handleSelectedTopic={props.handleSelectedTopic} />
      <PhotoList  likedPhotoIds = {props.likedPhotoIds} photos={props.photos} handleFavCount={props.handleFavCount} handleSelectedPhoto={props.handleSelectedPhoto} />
    </div>
  );

};

export default HomeRoute;