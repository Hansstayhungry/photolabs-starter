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


  const handleSelectedPhoto = (photo) => {
    setSelectedPhoto(photo);
    console.log("photo clicked")
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} handleSelectedPhoto={handleSelectedPhoto}/>
      {selectedPhoto && (
        <PhotoDetailsModal selectedPhoto={selectedPhoto} />
      )}
    </div>    
  )

}


export default App