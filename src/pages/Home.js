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
        <div id='icons-images'>
          <div className='icon'>
            <div id='icon-download'>
              <svg
                width='12'
                height='14'
                viewBox='0 0 12 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 1V13M6 13L11 8M6 13L1 8'
                  stroke='#22272F'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            <div id='icon-copy'>
              <svg
                width='17'
                height='16'
                viewBox='0 0 17 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='1.5'
                  y='1'
                  width='9.8'
                  height='9.8'
                  rx='2.8'
                  stroke='#22272F'
                  stroke-width='1.61538'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M11.4167 5.20001V5.20001C12.6119 5.20001 13.2095 5.20001 13.6863 5.37948C14.441 5.6635 15.0365 6.25907 15.3205 7.01371C15.5 7.49053 15.5 8.08814 15.5 9.28335V10.52C15.5 12.0882 15.5 12.8722 15.1948 13.4712C14.9264 13.998 14.498 14.4264 13.9712 14.6948C13.3722 15 12.5882 15 11.02 15H9.78335C8.58814 15 7.99053 15 7.51371 14.8205C6.75907 14.5365 6.1635 13.941 5.87948 13.1863C5.70001 12.7095 5.70001 12.1119 5.70001 10.9167V10.9167'
                  stroke='#22272F'
                  stroke-width='1.61538'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            <div className='icon-svg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-alert-circle'
              >
                <circle cx='12' cy='12' r='10' />
                <line x1='12' y1='8' x2='12' y2='12' />
                <line x1='12' y1='16' x2='12.01' y2='16' />
              </svg>
            </div>
            <div className='icon-title'>Title</div>
          </div>
        </div>
      </div>
    </div>
  );
}
