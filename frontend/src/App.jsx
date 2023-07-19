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

  useEffect(() => {
    async function fetchphotoData() {
      const photoResponse = await fetch("/api/photos");
      const photoData = await photoResponse.json();
      setPhotos(photoData);
      console.log("photo", photoData);
    }

    async function fetchTopicData() {
      const topicResponse = await fetch("/api/topics");
      const topicData = await topicResponse.json();
      setTopics(topicData);
      console.log("topic", topicData);
    }
    fetchphotoData();
    fetchTopicData();
  }, [])

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics}
        handleSelectedPhoto={handleSelectedPhoto} />
      {selectedPhoto && (
        <PhotoDetailsModal selectedPhoto={selectedPhoto} handleIsOpened={handleIsOpened} handleSelectedPhoto={handleSelectedPhoto}/>
      )}
    </div>    
  )

}


export default App