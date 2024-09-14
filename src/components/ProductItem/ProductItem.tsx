import { FC, useEffect, useState } from 'react';
import s from './ProductItem.module.scss';
import { useParams } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore'; 
import { starIcon } from '../../utils/img';
import Loader from '../Loader/Loader';

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  quantity: number;
  rating: number;
  category: string;
  stock: number;
}

const ProductItem: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const { addToCart, increaseQuantity, decreaseQuantity, items } = useCartStore();

 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        if (data.images && data.images.length > 0) {
          setSelectedImage(data.images[0]);
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const quantityInCart = items.find(item => item.id === Number(id))?.quantity || 0;

  if (!product) {
    return <div className={s.loader__container}><Loader/></div>;
  }

  return (
    <>
        <div className={s.product}>
                <div className={s.product__images}>
                    {product.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${product.title} - ${index + 1}`}
                        className={`${s.product__image} ${image === selectedImage ? s.selected : ''}`}
                        onClick={() => setSelectedImage(image)}
                    />
                    ))}
                </div>

            <div className={s.product__main_image}>
                <img src={selectedImage} alt={product.title} />
            </div>

            <div className={s.product__info}>
                <h1 className={s.product__title}>{product.title}</h1>
                <p className={s.product__rate}>
                    <img src={starIcon} alt="" className={s.product__rate_icon} /> {product.rating}
                    <span className={s.product__rate_span}>/5</span>
                </p>
                <p className={s.product__category}>Category: <span className={s.product__category_span}>{product.category}</span></p>
                <p className={s.product__description}>{product.description}</p>
                <p className={s.product__price}>${product.price}</p>
                <p className={s.product__stock}>In stock: <span className={s.product__stock_span}>{product.stock}</span></p>

                <div className={s.product__cart_controls}>
                {quantityInCart === 0 ? (
                    <button
                    className={s.product__add_to_cart}
                    onClick={() => addToCart({ ...product, quantity: 1 })}
                    >
                    Add to Cart
                    </button>
                ) : (
                    <div className={s.product__quantity_controls}>
                    <button
                        className={s.product__quantity_button}
                        onClick={() => decreaseQuantity(product.id)}
                    >
                        –
                    </button>
                    <span className={s.product__quantity_count}>{quantityInCart}</span>
                    <button
                        className={s.product__quantity_button}
                        onClick={() => increaseQuantity(product.id)}
                    >
                        +
                    </button>
                    </div>
                )}
                </div>
            </div>
        </div>
    </>
  );
};

export default ProductItem;














