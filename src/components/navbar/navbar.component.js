import './navbar.styles.scss';
import filmcloud from '../../assets/filmcloud-alt.png'


import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Searchbar from '../searchbar/searchbar.component';

const Navbar = () => {
    const [toggleNavAside, setToggleNavAside] = useState(false);

    const handleClickEvent = () => {
        setToggleNavAside(!toggleNavAside);
    }

    const handleMouseEnter = (e) => {
        e.currentTarget.classList.add('mouse-over');
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.classList.remove('mouse-over');
    }


    useEffect(() => {

        if(toggleNavAside === true) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'visible';

    }, [toggleNavAside])

    return (
        <header className='nav'>
            <nav className='nav__container'>

                   <div className='nav__logo'>
                        <Link to='/'><img src={filmcloud} alt='filmcloud'/></Link>
                   </div>
                   
                   <div className='nav__desktop'>
                        <ul className='nav__menu'>
                            <li onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} className='drop-down-item'>
                                <Link to='/movies'>Movies</Link>
                                <ul>
                                    <li><Link to='/movies/popular'>Popular</Link></li>
                                    <li><Link to='/movies/now-playing'>Now Playing</Link></li>
                                    <li><Link to='/movies/up-coming'>Up Coming</Link></li>
                                </ul>
                            </li>
                            <li onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} className='drop-down-item'>
                                <Link to='/shows'>Shows</Link>
                                <ul>
                                    <li><Link to='/shows/popular'>Popular</Link></li>
                                    <li><Link to='/shows/airing-today'>Airing Today</Link></li>
                                    <li><Link to='/shows/on-tv'>On TV</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to='/people'>People</Link>
                            </li>
                        </ul>
                        <Searchbar/>
                        <button className='filmcloud-btn'>Sign In</button>
                   </div>

                   <div className={toggleNavAside === true ? 'nav__mobile toggle-on' : 'nav__mobile'}>
                        <div>
                            <button onClick={handleClickEvent} className='nav__hamburger'>
                                <div className='ham-box'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                           <aside className='nav__aside'>
                                <nav>
                                    <ul>
                                        <li className='main-list-item'>
                                            <Link to='/movies'>Movies</Link>
                                            <ul>
                                                <li><Link to='/movies/popular'>Popular</Link></li>
                                                <li><Link to='/movies/now-playing'>Now Playing</Link></li>
                                                <li><Link to='/movies/up-coming'>Up Coming</Link></li>
                                            </ul>
                                        </li>
                                        <li className='main-list-item'>
                                            <Link to='/shows'>Shows</Link>
                                            <ul>
                                                <li><Link to='/shows/popular'>Popular</Link></li>
                                                <li><Link to='/shows/airing-today'>Airing Today</Link></li>
                                                <li><Link to='/shows/on-tv'>On TV</Link></li>
                                            </ul>
                                        </li>
                                        <li className='main-list-item'>
                                            <Link to='/people'>People</Link>
                                        </li>
                                    </ul>
                                    <button className='filmcloud-btn'>Sign In</button>
                                </nav>
                           </aside>
                        </div>
                   </div>
            </nav>
        </header>
    )
}

export default Navbar;