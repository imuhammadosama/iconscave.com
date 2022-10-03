import './Header.css';
export default function () {
  return (
    <div className='header'>
      <div className='instructions'>Click to Copy Icon</div>
      <div className='logo'>
        <svg
          width='105'
          height='32'
          viewBox='0 0 105 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='73' width='32' height='32' fill='#333333' />
          <rect width='32' height='32' rx='16' fill='#333333' />
          <path d='M51.5 0L70.1195 31.5H32.8805L51.5 0Z' fill='#333333' />
        </svg>
      </div>
      <div className='credits'>
        Powered by &nbsp;
        <a
          href='https://imuhammadosama.com'
          style={{ textDecoration: 'none', color: '#4608AD' }}
        >
          imuhammadosama.com
        </a>
      </div>
    </div>
  );
}
