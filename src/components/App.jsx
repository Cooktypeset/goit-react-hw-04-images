import  { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../services/fetch'
import { ImageGallery } from './ImageGallary/ImageGallery';
import { Modal } from './Modal/Modal';
import  { Loader }  from './Loader/Loader';
import { Button } from './Button/Button';
import Notiflix from 'notiflix';


export const App= () => {
  const [images, setHits] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [totalHits, setTotalHits] = useState(0);
  const [modalPic, setModalPic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (page || query) {
      setIsLoading(true);
      fetchImages(query, page)
        .then(response => {
          if (response.images.length === 0) {
            return Notiflix.Notify.failure('Please add valid property');
          }
          setHits(prev => [...prev, ...response.images]);
          setTotalHits(response.totalHits);
        })
        .catch(error => {
          Notiflix.Notify.failure(error.message);
        })
        .finally(() => setIsLoading(false));
    }
  }, [query, page]);

  const hendleSubmit = data => {
    if (data === query) {
      return Notiflix.Notify.failure(
        'You already got information by this request'
      );
    } else if (data !== query) {
      setHits([]);
      setPage(1);
      setQuery(data);
      return;
    }
  };

  const handleOverlayClick= () => {
    setPage(prev => prev + 1);
  };
  const hendleModalClose = () => {
    setShowModal(false);
    setModalPic('');
  };
  const hendleModalOpen = data => {
    setModalPic(data);
    setShowModal(true);
}
  const loadMoreTotal = () => page < Math.ceil(totalHits / 12);
  const buttonCheck = loadMoreTotal();

  return (
    <>
        <Searchbar  onFormSubmit={hendleSubmit} />
      {isLoading && <Loader />}
      
      {images.length > 0 && (
        <ImageGallery images={images} openModal={hendleModalOpen} />
        
      )}
          
         
      {images.length < 0 && buttonCheck  && !isLoading && (
        <Button loadMore={handleOverlayClick} />
          )}
        
        {showModal && <Modal imgLarge={modalPic} closeModal={hendleModalClose} />}
        
      </>
  );
  }

  
  
 
   