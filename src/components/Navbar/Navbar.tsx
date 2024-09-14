import { Link } from 'react-router-dom'
import s from './Navbar.module.scss'
import { cartIcon, profileIcon } from '../../utils/img'

const Navbar = () => {
  return (
    <>
        <div className={s.nav}>
            <div className={s.nav__logo}>
                <a href="" className={s.nav__logo_icon}>DummyJSON</a>
            </div>
            <ul className={s.nav__list}>
                <li>
                    <Link to='/' className={s.nav__list_link}>Home</Link>
                </li>
                <li>
                    <Link to="/shop" className={s.nav__list_link}>Shop</Link>
                </li>
                <li>
                    <Link to="/about" className={s.nav__list_link}>About</Link>
                </li>
                <li>
                    <Link to="/contact" className={s.nav__list_link}>Contact</Link>
                </li>
            </ul>
            <div className={s.nav__icons}>
                <Link to="/register">
                    <img className={s.nav__icon} src={profileIcon} alt="" />
                </Link>
                <Link to="/cart">
                    <img className={s.nav__icon} src={cartIcon} alt="" />
                </Link>
            </div>
        </div>
    </>
  )
}

export default Navbar