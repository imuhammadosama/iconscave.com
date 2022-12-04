import './Home.css';
import { icons } from '../data/anron';

export default function Home() {
  return (
    <div className='content'>
      <div className='header'>
        <div className='logo'>
          <img src='http://res.cloudinary.com/dvwpbbisf/image/upload/q_auto:eco/v1670158090/ttcvdqvu3vpziejf5hvw.webp' />
        </div>
        <div className='search'>
          <input className='search-input' placeholder='Search an icon...' />
        </div>
      </div>
      <div className='icons'>
        {icons.map((icon) => {
          return (
            <div className='icon'>
              <div className='icon-svg'>
                <span
                  id={`icon`}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                />
              </div>
              <div className='icon-name'>{icon.name}</div>
              <div className='icon-action animated animatedFadeInUp fadeInUp'>
                <div className='icon-copy'>Copy</div>
                <div className='icon-download'>Download</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
