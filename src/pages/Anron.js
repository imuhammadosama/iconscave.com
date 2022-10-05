import { lineAnron } from '../data/icons/anron/line';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Anron() {
  const icons = lineAnron;
  const [myIcons, setMyIcons] = useState(lineAnron);
  const [myOldIcons, setMyOldIcons] = useState(lineAnron);
  const [selectedCategory, setSelectedCategory] = useState('All');
  //
  // const [icons, setIcons] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function fetch() {
  //     setLoading(true);
  //     const res = await axios.get(
  //       'https://opensheet.elk.sh/1eeiGgyrUOWZXrP_DCoI43W81cAsKuThjXdPVQ9FUH4c/icons'
  //     );
  //     console.log(res.data);
  //     setIcons(res);
  //     setLoading(false);
  //   }
  //   fetch();
  // }, []);

  // if (loading) {
  //   return <div>Loading</div>;
  // }

  const categories = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Basic' },
    { id: 2, name: 'Images' },
    { id: 3, name: 'Map' },
    { id: 4, name: 'Time' },
    { id: 5, name: 'Security' },
    { id: 6, name: 'Arrows' },
    { id: 7, name: 'Finance' },
    { id: 8, name: 'Restaurant' },
    { id: 9, name: 'Alerts' },
    { id: 10, name: 'Call' },
    { id: 11, name: 'Files' },
    { id: 12, name: 'Users' },
    { id: 13, name: 'Audiovisual' },
    { id: 14, name: 'Editor' },
    { id: 15, name: 'Grid' },
    { id: 15, name: 'Weather' },
  ];

  const set = [{ id: 0, name: 'Anron' }];
  const type = [{ id: 0, name: 'Line' }];

  function copySvg(id) {
    let svg = document.getElementById(id).innerHTML;
    navigator.clipboard.writeText(svg);
  }

  const handleChange = (e) => {
    const newIcons = myOldIcons.filter((icon) =>
      icon.name.includes(e.target.value.toLowerCase())
    );
    if (e.target.value) {
      if (newIcons) {
        setMyIcons(newIcons);
        console.log(myOldIcons);
      } else {
        setMyIcons(myOldIcons);
        console.log(myOldIcons);
      }
    } else {
      setMyIcons(myOldIcons);
      console.log(myOldIcons);
    }
  };

  const handleSelectedCategory = (name) => {
    setSelectedCategory(name);
    if (name === 'All') {
      setMyIcons(icons);
      setMyOldIcons(icons);
    } else {
      const filteredIcons = icons.filter((icon) => icon.category === name);
      setMyIcons(filteredIcons);
      setMyOldIcons(filteredIcons);
    }
  };

  return (
    <div className='width-1200'>
      <div className='flex my-40'>
        <div class='search-field'>
          <div class='search-icon'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11ZM11 1.25C5.61522 1.25 1.25 5.61522 1.25 11C1.25 16.3848 5.61522 20.75 11 20.75C13.4224 20.75 15.6385 19.8666 17.3437 18.4043L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L18.4043 17.3437C19.8666 15.6385 20.75 13.4224 20.75 11C20.75 5.61522 16.3848 1.25 11 1.25Z'
                fill='#22272F'
              ></path>
            </svg>
          </div>
          <input
            onChange={handleChange}
            id='search-input'
            placeholder='Search an icon'
            className='search-input'
          />
        </div>
      </div>
      <div>
        <div className='flex flex-wrap mb-24 space-between'>
          {categories.map((category) => (
            <div
              className={
                selectedCategory === category.name
                  ? 'tag tag-active mb-8'
                  : `tag mb-8`
              }
              onClick={() => handleSelectedCategory(category.name)}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div className='icons flex flex-wrap'>
          {myIcons.map((icon, index) => (
            <div
              key={index}
              className='icon'
              onClick={() => {
                copySvg(`icon${index}`);
                document.getElementsByClassName('myMessage')[index].innerHTML =
                  'Copied!';
                setTimeout(function () {
                  document.getElementsByClassName('myMessage')[
                    index
                  ].innerHTML = '';
                }, 280);
              }}
            >
              <div>
                <div className='flex flex-center'>
                  <div className='myMessage'></div>
                </div>
                <span
                  id={`icon${index}`}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                />

                <div className='flex flex-center'>
                  <div className='icon-name'>{icon.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
