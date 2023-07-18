import React from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import { useState } from 'react';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [isOpened, setIsOpened] = useState();

// destructure similar photo

  const handleSelectedPhoto = (photo) => {
    setSelectedPhoto(photo);
    setIsOpened(true);
    console.log(`photo ${photo.id} clicked`)
    console.log(`suggestion photos are ${photo.similarPhotos}`)
  }

  const handleIsOpened = () => {
    setIsOpened(false);
    setSelectedPhoto("");
    console.log("close button clicked");
  }

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