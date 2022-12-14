import searchIcon from '../assets/icons/search.svg';
import '../assets/styles/search.css';
import '../assets/styles/icons.css';

export default function Home() {
  return (
    <div>
      {/* Search Field Starts */}
      <div className='search'>
        <div className='search-field'>
          <input id='search-input' placeholder='Search icons'></input>
          <img src={searchIcon} id='search-icon' />
        </div>
      </div>
      {/* Search Field Ends */}

      <div id='icons'>
        <div id='icons-filter'></div>
        <div id='icons-images'></div>
      </div>
    </div>
  );
}
