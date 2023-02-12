import './navbar.component.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to='/'>FILMCLOUD</Link>
                <ul className=''>
                    <li>
                        <Link to='/movies'>Movies</Link>
                    </li>
                    <li>
                        <Link to='/shows'>Shows</Link>
                    </li>
                    <li>
                        <Link to='/people'>People</Link>
                    </li>
                </ul>
            </div>

            
        </nav>
    )
}

export default Navbar;