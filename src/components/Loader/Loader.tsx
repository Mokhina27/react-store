import { FC } from 'react'

import ContentLoader from 'react-content-loader'

const Loader:FC = () => {
  return (
    <>
        <ContentLoader 
            speed={2}
            width={1410}
            height={760}
            viewBox="0 0 1410 550"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="30" rx="20" ry="20" width="150" height="150" /> 
            <rect x="0" y="200" rx="20" ry="20" width="150" height="150" /> 
            <rect x="0" y="370" rx="20" ry="20" width="150" height="150" />

            {/* Главное изображение (product__main_image) */}
            <rect x="200" y="30" rx="20" ry="20" width="500" height="490" />

            {/* Информация о продукте (product__info) */}
            {/* Заголовок продукта */}
            <rect x="750" y="30" rx="4" ry="4" width="300" height="40" />
            {/* Рейтинг продукта */}
            <rect x="750" y="90" rx="4" ry="4" width="120" height="25" />
            {/* Категория продукта */}
            <rect x="750" y="130" rx="4" ry="4" width="250" height="20" />
            {/* Описание продукта */}
            <rect x="750" y="170" rx="4" ry="4" width="350" height="80" />
            {/* Цена продукта */}
            <rect x="750" y="270" rx="4" ry="4" width="150" height="30" />
            {/* Кнопка "Add to Cart" */}
            <rect x="750" y="320" rx="31" ry="31" width="400" height="52" />
            {/* Количество и управление */}
            <rect x="750" y="390" rx="31" ry="31" width="170" height="52" />
            {/* Количество на складе */}
            <rect x="750" y="460" rx="4" ry="4" width="150" height="20" />
        </ContentLoader>

    </>
  )
}

export default Loader