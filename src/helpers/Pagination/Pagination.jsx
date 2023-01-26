import style from './pagination.module.css';

const Pagination = ({ productsPerPage, totalProducts, changePage }) => {
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(totalProducts / productsPerPage); i++) pageNumbers.push(i);

    return (
        <div className={style.content_pagination}>
            {
                pageNumbers.map(item => (
                    <span 
                        key={item} 
                        onClick={() => changePage(item)} 
                        className={style.buttons__pagination}
                    >
                        {item + 1}
                    </span>
                ))
            }
        </div>
    )
}

export default Pagination;
