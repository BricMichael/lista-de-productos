import { useEffect } from 'react'
import style from './galleryModal.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function GalleryModal({ images, setOpenModal }) {

  const lengthImages = images.length;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className={style.wrapper} onClick={() => setOpenModal(false)}>
        <div className={style.gallery}> 
            <div className={style.gallery_header}>
              <h2 className={style.gallery_title}>Total de imágenes: {lengthImages}</h2>
              <h2 className={style.closeModal} onClick={() => setOpenModal(false)}>X</h2>
            </div>
            <div 
              style={{gridTemplateColumns: `repeat(${lengthImages}, 1fr)`}}
              className={style.gallery_images}
            >
              {
                images.map( imageLink => (
                  <LazyLoadImage 
                    src={imageLink} 
                    key={imageLink}
                    alt="image-product" 
                    loading="lazy"
                    className={style.imageGallery}                      
                    placeholderSrc='/spinerImg.png'         
                  />                 
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default GalleryModal