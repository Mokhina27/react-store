import React, { FC, FormEvent, useEffect, useState } from 'react';
import s from './Form.module.scss';
import { useLocation } from "react-router-dom";
import { clearIcon, searchIcon } from '../../utils/img';
import { filterStore } from '../../store/filterStore';
import { useProductStore } from '../../store/productStore';

interface IProps {
  onClear: () => void; // Функция для сброса поиска
}

const Form: FC<IProps> = ({ onClear }) => {
  const [text, setText] = useState('');
  const { setSearchValue } = filterStore(state => state);
  const { setProducts } = useProductStore();
  const location = useLocation();

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchValue(text);

    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${text}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Ошибка при поиске продуктов:', error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParamValue = params.get('search') || '';
    setText(searchParamValue);
  }, [location.search]);

  const reset = () => {
    setText('');
    setSearchValue('');
    onClear(); // Вызов функции для сброса поиска
  };

  return (
    <form className={s.form} onSubmit={submit}>
      <div className={s.form__box}>
        <img src={searchIcon} alt="Search" className={s.form__icon} />
          <div className={s.form__boxes}>
          <input
            type="text"
            className={s.form__input}
            placeholder='Search for products...'
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          {text && (
            <img
              className={s.form__clear}
              src={clearIcon}
              alt="Clear"
              onClick={reset}
            />
          )}
        </div>
        </div>
      <button type="submit" className={s.form__search}>Search</button>
    </form>
  );
};

export default Form;