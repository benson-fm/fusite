import React from 'react';
import ProjectRosie from '../../images/ProjectRosie.png';
import YellowTriangle from '../../images/YellowTriangle.png';
import YellowSquare from '../../images/YellowSquare.png';
import GrayCircle from '../../images/GrayCircle.png';
import './Apply.css';

const Apply = () => {
  return (
    <div className="relative h-[654px] w-full bg-[#1F1F1F]">
      <img src={YellowSquare} className="absolute top-[418px] left-0 z-10 justify-start" />
      <img src={YellowTriangle} className="absolute top-0 z-10 justify-start" />
      <img src={GrayCircle} className="absolute top-0 left-[300px] transform -translate-x-1/2 z-5" />
      <div className="flex justify-end h-full items-center z-0">
        <img src={ProjectRosie} className="mr-0 h-full" />
      </div>
      <div className="absolute inset-0 flex items-center justify-relative text-white z-20 left-[200px]">
        <div className="text-start items-start">
          <h1 className="text-[64px] font-[300] mb-4 font-karla leading-[74.82px] w-[696px]">APPLY TO <span className="text-white font-[800]">FUSIONCON</span></h1>
          <p className="mb-4 w-[696px] font-inter font-[300] text-[24px] leading-[29.05px]">We are always looking for prospective designers, developers,<br></br>and engineers who are ready to showcase their talents!</p>
          <button className='apply font-inter font-[500] text-[16px] leading-[30px] tracking-[0.16em] text-black'>APPLY HERE</button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
