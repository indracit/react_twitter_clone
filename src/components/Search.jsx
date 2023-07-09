import {BiSearch} from 'react-icons/bi'

const Search = () => {
    return (
    <div className='search'>
        <div className='search-icon'>
        <BiSearch style={{color:'#020202', fontSize:'1.1rem'}}/>
        </div>
        <input type="text" placeholder='Search Twitter'/>
    </div>
    )
}

export default Search