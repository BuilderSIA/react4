import navLogo from '../../public/images/pngwing.com.png'
import searchImg from '../../public/images/search.svg'
import menu from '../../public/images/menu.svg'
import like from '../../public/images/like.png'
import box from '../../public/images/box.svg'
import avatar from '../../public/images/avatar.png'

import '../index.css'
import Signin from './Signin'

export default function Header({user, modal, setModal}) {
  return (
    <header>
        <nav className="header__nav container">
            <img className='logo' src={navLogo} alt="image" />
            <button className='katalog'>
                <img src={menu} alt="" />
                Каталог
            </button>
            <div className='search-box'>
                <input type="text" placeholder='Найти тур' />
                <button>
                    <img src={searchImg} alt="image" />
                </button>
            </div>
            <ul className='nav__list'>
                <li className='nav__list-item'>
                    <img src={like} alt="" width={30} /><br />
                    Избранное
                </li>
                <li className='nav__list-item'>
                    <img src={box} alt="" /><br />
                    Заказы
                </li>
            </ul>
            <div className='users' onClick={() => setModal(!modal)}>
                <img src={avatar} alt="" />
                {!user.name ? 'Вход' : user.name}
            </div>
        </nav>
    </header>
  )
}
