
import './searchbar.style.scss';

const Searchbar = () => {
    return (
        <form className='searchbar'>
            <input type='search' placeholder='Search movies and tv shows'/>
            <button className='filmcloud-btn' type='submit'>&#x1F50D;</button>
        </form>
    )
}

export default Searchbar;