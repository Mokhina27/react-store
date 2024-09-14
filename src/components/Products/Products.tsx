/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from 'react'
import s from './Products.module.scss'
import { useProductStore } from '../../store/productStore';
import ReactPaginate from 'react-paginate';
import { starIcon } from '../../utils/img';
import CustomBtn from '../UI/CustomBtn';
import { filterStore } from '../../store/filterStore';
import Form from '../Form/Form';
import Sort from '../Sort/Sort';
import Skeleton from './Skeleton';
import { useCartStore } from '../../store/cartStore';
import { Link } from 'react-router-dom';


const Products: FC
 = () => {
    const { products, setProducts } = useProductStore();
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const productsPerPage = 12;
    const { searchValue } = filterStore();
    const [sortedProducts, setSortedProducts] = useState<any[]>([]);
  
    const skeleton = [...new Array(9)].map((_, i) => <Skeleton key={i} />);
  
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=100`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    useEffect(() => {
      if (products.length === 0) return;
  
      let filteredProducts = products;
  
      if (searchValue.trim()) {

        filteredProducts = products.filter(product =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
  
      setSortedProducts(filteredProducts);
      setCurrentPage(0);
    }, [products, searchValue]);
  
    const handleSort = (sortType: string) => {
      let sorted = [...sortedProducts];
  
      if (sortType === 'all') {
        sorted = products;
      } else {
        switch (sortType) {
          case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
          case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
          case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
          case 'title':
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
          default:
            break;
        }
      }
  
      setSortedProducts(sorted);
    };
  
    const displayedProducts = sortedProducts.slice(
      currentPage * productsPerPage,
      (currentPage + 1) * productsPerPage
    );
  
    const pageCount = Math.ceil(sortedProducts.length / productsPerPage);
  
    const handlePageClick = (selectedItem: { selected: number }) => {
      setCurrentPage(selectedItem.selected);
    };
  
    const handleClearSearch = () => {
      setCurrentPage(0);
      setSortedProducts(products);
      fetchProducts(); 
    };
    const { addToCart, getQuantity } = useCartStore();
  
    return (
      <div className={s.products}>
        <div className={s.products__filter}>
          <Sort onSort={handleSort} />
          <Form onClear={handleClearSearch} />
        </div>
        {isLoading ? (
          <div className={s.products__skeleton}>{skeleton}</div>
        ) : sortedProducts.length === 0 ? (
          <h2>Product not found</h2>
        ) : (
          <>
            <div className={s.products__list}>
              {displayedProducts.map(product => (
                <div key={product.id} className={s.products__item}>
                 <Link to={`/product/${product.id}`}>
                  <div className={s.products__box}>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className={s.products__img}
                      />
                      <div className={s.products__rate}>
                        <img src={starIcon} alt="Rating" />
                        <p className={s.products__rating}>
                          {product.rating}
                        </p>
                      </div>
                    </div>
                    <div className={s.product__info}>
                      <h3 className={s.products__title}>{product.title}</h3>
                      <p className={s.products__price}>${product.price}</p>
                    </div>
                 </Link>
                  <CustomBtn
                    text={
                      getQuantity(product.id) > 0
                      ? `+${getQuantity(product.id)}`
                      : 'Add to Cart'
                    }
                    onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, quantity: 1 , thumbnail: product.thumbnail})}
                  />
                </div>
              ))}
            </div>
            <ReactPaginate
              previousLabel={'< '}
              nextLabel={'> '}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={s.pagination}
              activeClassName={s.active}
              pageClassName={s.page}
              pageLinkClassName={s.pageLink}
              breakClassName={s.break}
              disabledClassName={s.disabled}
              previousClassName={currentPage === 0 ? s.hidden : s.prevPage}
              nextClassName={currentPage === pageCount - 1 ? s.hidden : s.nextPage}
            />
          </>
        )}
      </div>
    );
  };
  
  export default Products;