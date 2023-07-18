import { useState } from "react";

const useApplication = () => {
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [isOpened, setIsOpened] = useState();

// destructure similar photo

  const handleSelectedPhoto = (photo) => {
    setSelectedPhoto(photo);
    setIsOpened(true);
    console.log(`photo ${photo.id} clicked`)
    console.log(`suggestion photos are ${photo.similarPhotos}`)
    console.log("photo in handleselectedphoto", photo)
  }

  const handleIsOpened = () => {
    setIsOpened(false);
    setSelectedPhoto("");
    console.log("close button clicked");
  }

  

  return { handleSelectedPhoto, handleIsOpened, selectedPhoto }
}

export default useApplication;