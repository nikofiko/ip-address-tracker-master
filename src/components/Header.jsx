import React, { useState } from 'react'
import arrow from '../assets/images/icon-arrow.svg'
import bgImage from '../assets/images/pattern-bg-desktop.png';

const Header = ({ updateLocation, locationData }) => {
  const [ipInput, setIpInput] = useState(''); 

  const handleSearch = () => {
    if (ipInput) {
      updateLocation(ipInput); 
      setIpInput(''); 
    }
  };

  return (
    <div 
      style={{ backgroundImage: `url(${bgImage})` }}
      className='relative font-rubik flex flex-col items-center bg-no-repeat bg-cover h-72'
      >
      <h1 className='pt-11 text-3xl text-white font-medium tracking-wide'>IP Address Tracker</h1>
      <div className='flex pt-5 lg:pt-11'>
        <input 
        type="text" 
        placeholder='Search for any IP address or domain'
        className='outline-none text-[14px] lg:text-[18px] rounded-bl-2xl rounded-tl-2xl min-w-[280px] lg:min-w-[530px] min-h-[50px] pl-6 bg-white'
        value={ipInput}
        onChange={(e) => setIpInput(e.target.value)}
        />
        <div className='bg-black px-6 flex rounded-br-2xl rounded-tr-2xl'>
          <button onClick={handleSearch}><img src={arrow} alt="" /></button>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row bg-white gap-3 lg:gap-12 px-9 py-7 rounded-2xl mt-5 lg:mt-10 z-50 min-w-[320px] lg:min-w-[999px]'>
        <div className='max-w-[220px]'>
          <h3 className='text-darkgrey font-semibold text-[13px]'>IP ADDRESS</h3>
          <h2 className='text-verydarkgrey font-semibold text-[20px] lg:text-[24px]'>{locationData.ip}</h2>
        </div>
        <hr className='hidden lg:block border-1 border-darkgrey h-[70px] w-[2px]' />
        <div className='max-w-[220px]'>
          <h3 className='text-darkgrey font-semibold text-[13px]'>LOCATION</h3>
          <h2 className='text-verydarkgrey font-semibold text-[20px] lg:text-[24px]'>{locationData.location}</h2>
        </div>
        <hr className='hidden lg:block border-1 border-darkgrey h-[70px] w-[2px]' />
        <div className='max-w-[220px]'>
          <h3 className='text-darkgrey font-semibold text-[13px]'>TIMEZONE</h3>
          <h2 className='text-verydarkgrey font-semibold text-[20px] lg:text-[24px]'>{locationData.timezone}</h2>
        </div>
        <hr className='hidden lg:block border-1 border-darkgrey h-[70px] w-[2px]' />
        <div className='max-w-[180px]'>
          <h3 className='text-darkgrey font-semibold text-[13px]'>ISP</h3>
          <h2 className='text-verydarkgrey font-semibold text-[20px] lg:text-[24px]'>{locationData.isp}</h2>
        </div>
      </div>
      
    </div>
  )
}

export default Header
