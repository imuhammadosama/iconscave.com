import searchIcon from '../assets/icons/search.svg';
import { anron } from '../data/anron';
import { feather } from '../data/feather';
import { social } from '../data/social';

import '../assets/styles/search.css';
import '../assets/styles/icons.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [selectedSet, setSelectedSet] = useState(anron);
  const [oldIcons, setOldIcons] = useState(selectedSet);
  const [newIcons, setNewIcons] = useState(selectedSet);
  const [categories, setCategories] = useState(
    oldIcons
      .map((icon) => {
        return icon.category;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
  );
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const filteredIcons = oldIcons.filter((icon) => {
      return icon.title.includes(searchValue);
    });
    setNewIcons(filteredIcons);
  }, [searchValue]);

  useEffect(() => {
    setCategories(
      newIcons
        .map((icon) => {
          return icon.category;
        })
        .filter((value, index, self) => self.indexOf(value) === index)
    );
  }, [oldIcons]);

  function download(iconTitle) {
    const svg = document.querySelector(`#icon-${iconTitle}`);
    const base64doc = btoa(unescape(encodeURIComponent(svg.innerHTML)));
    const a = document.createElement('a');
    const e = new MouseEvent('click');
    a.download = `${iconTitle}.svg`;
    a.href = 'data:image/svg+xml;base64,' + base64doc;
    a.dispatchEvent(e);
  }

  function filterIcon(iconCategory) {
    const fIcons = oldIcons.filter((icon) => {
      return icon.category === iconCategory;
    });
    setNewIcons(fIcons);
  }

  return (
    <div>
      {/* Search Field Starts */}
      <div className='search'>
        <div className='search-field'>
          <input
            id='search-input'
            placeholder='Search icons'
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          ></input>
          <img src={searchIcon} id='search-icon' />
          <select
            className='search-select'
            onChange={(e) => {
              if (e.target.value === 'feather') {
                setNewIcons(feather);
                setOldIcons(feather);
              } else if (e.target.value === 'social') {
                setNewIcons(social);
                setOldIcons(social);
              } else {
                setNewIcons(anron);
                setOldIcons(anron);
              }
            }}
          >
            <option value='anron'>Anron</option>
            <option value='social'>Social</option>
            <option value='feather'>Feather</option>
          </select>
        </div>
      </div>
      {/* Search Field Ends */}
      <div id='icons'>
        <div id='icons-filters'>
          <div className='icons-filter' onClick={() => setNewIcons(oldIcons)}>
            All
          </div>
          {categories.map((filter) => {
            return (
              <div className='icons-filter' onClick={() => filterIcon(filter)}>
                {filter}
              </div>
            );
          })}
        </div>
        <div id='icons-images'>
          {newIcons.map((icon) => {
            return (
              <div className='icon'>
                <div class='icon-download' onClick={() => download(icon.title)}>
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
                <div
                  class='icon-copy'
                  id={icon.title}
                  onClick={() => {
                    navigator.clipboard.writeText(icon.svg);
                    document.getElementById(icon.title).innerHTML = 'Copied!';
                    setTimeout(() => {
                      document.getElementById(icon.title).innerHTML = `<svg
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
                  </svg>`;
                    }, 500);
                  }}
                >
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
                  <span
                    id={`icon-${icon.title}`}
                    dangerouslySetInnerHTML={{ __html: icon.svg }}
                  />
                </div>
                <div className='icon-title'>{icon.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
