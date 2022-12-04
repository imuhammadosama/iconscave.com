import './Home.css';
import { icons } from '../data/anron';

export default function Home() {
  function download(iconName) {
    const svg = document.querySelector(`#icon-${iconName}`);
    const base64doc = btoa(unescape(encodeURIComponent(svg.innerHTML)));
    const a = document.createElement('a');
    const e = new MouseEvent('click');
    a.download = `${iconName}.svg`;
    a.href = 'data:image/svg+xml;base64,' + base64doc;
    a.dispatchEvent(e);
  }

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
                  id={`icon-${icon.name}`}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                />
              </div>
              <div className='icon-name'>{icon.name}</div>
              <div className='icon-action animated animatedFadeInUp fadeInUp'>
                <div
                  className='icon-copy'
                  id={icon.name}
                  onClick={() => {
                    navigator.clipboard.writeText(icon.svg);
                    document.getElementById(icon.name).innerText = 'Copied!';
                    setTimeout(() => {
                      document.getElementById(icon.name).innerText = 'Copy';
                    }, 500);
                  }}
                >
                  Copy
                </div>
                <div
                  className='icon-download'
                  onClick={() => download(icon.name)}
                >
                  Download
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
