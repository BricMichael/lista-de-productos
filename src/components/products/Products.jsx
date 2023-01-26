import { useEffect, useState } from 'react'
import Pagination from '../../helpers/Pagination/Pagination'
import { getProducts } from '../../services/productsServices'
import style from './product.module.css';
import SingleProduct from './singleProduct/SingleProduct'

function Products() {
  const [sizeRows, setSizeRows] = useState(4);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);


  useEffect(() => {
    getProducts(setProducts, setLoading);    
  }, [])
  

  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;
  const paginatedProducts = products.slice(pagesVisited, pagesVisited + productsPerPage);
  
  const changePage = ( numberPage ) => setPageNumber(numberPage);

  return (
    <div className={style.container}>     
      { loading && <h3 className={style.loadingMessage}>Cargando...</h3> }
    
      <div className={style.sizeRows}>
        <label htmlFor="size">Número de filas</label>
        <select 
          name="sizeRows" 
          id="size" 
          value={sizeRows} 
          onChange={ ({target}) => setSizeRows(+target.value) }
        >
          <option value="3">3 Filas</option>
          <option value="4">4 Filas</option>
          <option value="5">5 Filas</option>
        </select>
      </div>

      <div 
        style={{gridTemplateColumns: `repeat(${sizeRows}, 1fr)`}}
        className={style.containerProducts}
      >      
        {
          products.length ?
            paginatedProducts.map( product => (
              <SingleProduct 
                key={product.id}
                brand={product.brand}
                title={product.title}
                urlImage={product.images[0]}
                productImages={product.images}
                sizeRows={sizeRows}
              />
            ))
          : null
        }
      </div>

      { products.length > 0 &&
        <div className={style.pagination}>
          <Pagination   
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            changePage={changePage}
          />
        </div>
      }
    </div>   
  )
}

export default Products;