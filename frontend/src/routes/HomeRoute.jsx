import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} likedPhotoIds={props.likedPhotoIds} handleSelectedTopic={props.handleSelectedTopic} />
      <PhotoList  likedPhotoIds = {props.likedPhotoIds} photos={props.photos} handleFavCount={props.handleFavCount} handleSelectedPhoto={props.handleSelectedPhoto} />
    </div>
  );

};

export default HomeRoute;