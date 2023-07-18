import React from 'react';
import { useEffect } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplication from './hooks/useApplication';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { handleSelectedPhoto, handleIsOpened, selectedPhoto } = useApplication();

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