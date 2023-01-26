import { useState } from 'react'
import GalleryModal from '../../../helpers/Modals/GalleryModal/GalleryModal';
import style from './singleProduct.module.css';

function SingleProduct({ title, brand, urlImage, productImages, sizeRows }) {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={style.card}>
      { openModal && <GalleryModal images={productImages} setOpenModal={setOpenModal} /> }
      <div className={style.card_content}>
        <p style={{fontSize: `${ sizeRows === 5 ? '0.8rem' : '0.9rem '}`}}>{title}</p>
        <p 
          className={style.card_brand} 
          style={{fontSize: `${ sizeRows === 5 ? '1rem' : '1.2rem '}`}}
        >
          {brand}
        </p>
      </div>
      <div className={style.card_image} onClick={() => setOpenModal(true)}> 
        <img 
          src={urlImage}
          alt="product-image"
          className={style.imageProduct}
        />
      </div>
    </div>
  )
}

export default SingleProduct