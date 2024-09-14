import { FC, useState } from 'react';
import s from './Sort.module.scss';
import { filterIcon } from '../../utils/img';

interface SortProps {
  onSort: (sortType: string) => void;
}

const Sort: FC<SortProps> = ({ onSort }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleSort = (sortType: string) => {
    onSort(sortType);
    setIsOpen(false);
  };

  return (
    <div className={s.sort}>
      <button onClick={handleToggle} className={s.sort__toggle}>
        Filters
        <img src={filterIcon} alt="" className={s.sort__icon} />
      </button>
      <div className={`${s.sort__menu} ${isOpen ? s.show : ''}`}>
        <button onClick={() => handleSort('all')} className={s.sort__button}>
          All
        </button>
        <button onClick={() => handleSort('price-asc')} className={s.sort__button}>
          Price: Low to High
        </button>
        <button onClick={() => handleSort('price-desc')} className={s.sort__button}>
          Price: High to Low
        </button>
        <button onClick={() => handleSort('rating')} className={s.sort__button}>
          Rating
        </button>
        <button onClick={() => handleSort('title')} className={s.sort__button}>
          Title
        </button>
      </div>
    </div>
  );
};

export default Sort;


