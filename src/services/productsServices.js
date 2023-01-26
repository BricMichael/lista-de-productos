import axios from 'axios';

const urlProducts = 'https://dummyjson.com/products?limit=100'; // ?limit=8

export const getProducts = async( setProducts, setLoading ) => {
    try {
        setLoading(true);
        const { data } = await axios.get(urlProducts);
        setLoading(false)
        if ( data?.products?.length ) return setProducts(data.products);
    } catch (err) {
        console.log(err.message);
    }
}