import React, { useState } from 'react';
import Sun from '../assets/sun.png';
import Gear from '../assets/gear.png';
import PlaceholderPic from '../assets/placeholderPic.png';
import Triangle from '../assets/triangle.png';

const InfoSection = ({ title, date, pillar, description }) => {
  return (
    <div className="flex items-center justify-between">
      <img src={PlaceholderPic} alt="Placeholder Picture" className="w-640 h-362 object-cover flex-shrink-0 mr-10" />
      <div className="ml-10">
        <h1 style={{ fontSize: '40px', letterSpacing: '8px', color: 'black' }} className="font-inter font-medium tracking-wider">
          {title}
        </h1>
        <h2 style={{ fontSize: '24px', letterSpacing: '2px', color: 'black' }} className="font-inter font-normal text-left">
          {date}&nbsp;&nbsp;{pillar}
        </h2>
        <p style={{ fontSize: '20px', color: 'black' }} className="font-inter font-normal mt-5 text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export function MeetingsPage() {
  const [activeTab, setActiveTab] = useState('FALL');

  const sections = [
    {
      title: "Insert Title Here",
      date: "XX/XX/XXXX",
      pillar: "PILLAR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Insert Title Here",
      date: "XX/XX/XXXX",
      pillar: "PILLAR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Insert Title Here",
      date: "XX/XX/XXXX",
      pillar: "PILLAR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Insert Title Here",
      date: "XX/XX/XXXX",
      pillar: "PILLAR",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  const tabContent = {
    FALL: sections,
    WINTER: sections,
    SPRING: sections,
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col w-full h-screen bg-white">

        <div className="absolute left-0 overflow-hidden z-0" style={{ width: '630.44px', height: '501.67px', top: '1494.52px', left: '-403.37px' }}>
          <img src={Sun} alt="Sun" style={{ width: '630.44px', height: '501.67px' }} className="object-cover" />
        </div>

        <div className="relative flex flex-col items-center justify-start">
          <h1 style={{ fontSize: '40px', letterSpacing: '8px', width: '522px', height: '35px', left: '282px', gap: '0px', opacity: '0px', color: 'black'}} className="font-inter font-medium tracking-wider">GENERAL MEETINGS</h1>
          <p style={{ fontSize: '20px', width: '1088px', height: '168px', top: '90px', color: 'black'}} className="font-inter font-normal mt-10 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="flex items-center justify-center mt-20" style={{top: '1582px', left: '759px'}}>
          <h1 style={{ fontSize: '40px', letterSpacing: '8px'}} className="font-inter font-medium text-center text-black top-1582px left-[759px] text-[40px] w-[357px] h-[35px]">TERM XX - XX</h1>
          <img src={Triangle} alt="Triangle" style={{top: '1595px', left: '1145px'}} className="w-16px h-8px mt-5"></img> {/* eventually a dropdown button? */}
        </div>

        {/* TABS START HERE
        (can be clicked when zoomed out but content doesnt show even though it was working yesterday, 
        I know the issue is in one of the div tags and/or the logos but I've been messing with them 
        and have not found the issue (crying emoji) im so sorry)*/}
        
        <div className="flex flex-col items-center justify-start mt-10">
          <div role="tablist" style={{ width: '462px', height: '35px' }} className="tabs tabs-bordered items-center">
            <button className={`tab font-inter font-medium text-black ${activeTab === 'FALL' ? 'tab-active' : ''}`} style={{letterSpacing: '2px'}} onClick={() => setActiveTab('FALL')}>
              FALL
            </button>
            <button className={`tab font-inter font-medium text-black ${activeTab === 'WINTER' ? 'tab-active' : ''}`} style={{letterSpacing: '2px'}} onClick={() => setActiveTab('WINTER')}>
              WINTER
            </button>
            <button className={`tab font-inter font-medium text-black ${activeTab === 'SPRING' ? 'tab-active' : ''}`} style={{letterSpacing: '2px'}} onClick={() => setActiveTab('SPRING')}>
              SPRING
            </button>
          </div>
          
          <div className="tab-content p-10 text-black">
            {tabContent[activeTab].map((section, index) => (
              <InfoSection
                key={index}
                title={section.title}
                date={section.date}
                pillar={section.pillar}
                description={section.description}
              />
            ))}
          </div>

          
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', marginTop: '-600px' }}>
        <div className="absolute z-0" style={{ top: '-190px', left: '-10px', width: '600px' }}>
          <img src={Sun} alt="Sun" style={{ width: '100%', height: 'auto'}} className="object-cover" />
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <div className="absolute z-0" style={{ top: '0', right: '-10px', width: '600px' }}>
          <img src={Gear} alt="Gear" style={{ width: '100%', height: 'auto'}} className="object-cover" />
        </div>
      </div>
    </div>
  );
}