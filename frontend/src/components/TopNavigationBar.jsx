import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  // console.log("TopNavigate Prop", props)
  const { darkMode, toggleDarkMode } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} handleSelectedTopic={props.handleSelectedTopic} />
      <FavBadge likedPhotoIds={props.likedPhotoIds} />
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default TopNavigation;