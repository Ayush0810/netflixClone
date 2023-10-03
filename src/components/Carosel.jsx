import React, { useEffect } from 'react';
import Cards from './Cards';

function Carousel(props) {
  const { title, image, release_date, overview } = props;

  useEffect(() => {
    // Delay autoplay for 4 seconds (4000 milliseconds)
    const autoplayTimeout = setTimeout(() => {
      const videoFrame = document.getElementById('videoFrame');
      if (videoFrame) {
        videoFrame.src += '&autoplay=1';
      }
    }, 4000);

    return () => clearTimeout(autoplayTimeout);
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-screen h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover overflow-hidden'
          src={`https://image.tmdb.org/t/p/original/${image}`}
          alt={title}
        />
        <div className='absolute w-full top-[40%] pl-6 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold inline'>{title}</h1>
          <div className='my-4 '>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>
            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
