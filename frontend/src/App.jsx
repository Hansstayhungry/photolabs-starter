import React from 'react';
import { useEffect } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
// import photos from './mocks/photos';
// import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplication from './hooks/useApplication';
import { useState } from 'react';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { handleSelectedPhoto, handleIsOpened, selectedPhoto } = useApplication();

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  const GET_PHOTOS = "/api/photos";
  const GET_TOPICS = "/api/topics";

  const GET_PHOTOS_BY_TOPICS = `/api/topics/photos/${selectedTopic}`;

  useEffect(() => {
    async function fetchphotoData() {
      const photoResponse = await fetch(GET_PHOTOS);
      const photoData = await photoResponse.json();
      setPhotos(photoData);
      // console.log("photo", photoData);
    }

    async function fetchTopicData() {
      const topicResponse = await fetch(GET_TOPICS);
      const topicData = await topicResponse.json();
      setTopics(topicData);
      // console.log("topic topicdata", topicData);
    }

    async function fetchPhotoByTopicData() {
      const photoByTopicDataResponse = await fetch(GET_PHOTOS_BY_TOPICS);
      const photoByTopicDataData = await photoByTopicDataResponse.json();
      setPhotos(photoByTopicDataData);
    }
    fetchphotoData();
    fetchTopicData();

    if (selectedTopic) {
      fetchPhotoByTopicData(selectedTopic);
    };

  }, [selectedTopic]);

  const handleSelectedTopic = (topicId) => {
    setSelectedTopic(topicId);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics}
        handleSelectedPhoto={handleSelectedPhoto} handleSelectedTopic={handleSelectedTopic} />
      {selectedPhoto && (
        <PhotoDetailsModal selectedPhoto={selectedPhoto} handleIsOpened={handleIsOpened} handleSelectedPhoto={handleSelectedPhoto} />
      )}
    </div>
  );

};


export default App;