import { Link } from 'react-router-dom'
import s from './Main.module.scss'
import { FC } from 'react'
import { calvinLogo, gucciLogo, homebBg, homebigIcon, homesmallIcon, pradaLogo, versaceLogo, zaraLogo } from '../../utils/img'

const Main:FC = () => {
  return (
    <>
      <div className={s.main}>
        <img src={homebBg} alt="" className={s.main__bg} />
          <div className={s.main__box}>
            <div className={s.main__left}>
              <h1 className={s.main__title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className={s.main__text}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <Link to="/shop"><p className={s.main__link}>Shop now</p></Link>
            </div>
            <div className={s.main__right}>
                <img src={homesmallIcon} alt="" className={s.main__small} />
                <img src={homebigIcon} alt="" className={s.main__big} />
            </div>
          </div>
          <div className={s.main__end}>
              <img src={versaceLogo} alt="" className={s.main__logo} />
              <img src={zaraLogo} alt="" className={s.main__logo} />
              <img src={pradaLogo} alt="" className={s.main__logo} />
              <img src={gucciLogo} alt="" className={s.main__logo} />
              <img src={calvinLogo} alt="" className={s.main__logo} />
          </div>
        </div>
    </>
  )
}

export default Main