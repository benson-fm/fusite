import './OurStorySection.css';
import yellowDownArrow from '../../assets/yellowdownarrow.png';

const OurStorySection = () => {
  return (
    <div className="fixed-dimensions relative bg-white flex flex-col justify-center items-center py-16 px-8">
      <div className="background-elements">
        <div className="dots-left"></div>
        <div className="dots-right"></div>
        <div className="triangle-top-right"></div>
        <div className="triangle-bottom-left"></div>
      </div>
      <div className="max-w-4xl text-center relative">
        <div className="mb-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="w-[115px] h-1 bg-yellow-500"></span>
            <span className="text-black font-bold uppercase tracking-wide karla-font">Our Story</span>
            <span className="w-[115px] h-1 bg-yellow-500"></span>
          </div>
        </div>
        <h2 className="text-4xl font-semibold text-black mb-6 karla-font">
          A direct network between <span className="text-yellow-500">Filipinx</span> and <br /><span className="text-yellow-500">engineers</span> at UC Irvine.
        </h2>
        <p className="text-gray-700 mb-6 inter-font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="mt-8 flex flex-col items-center">
          <p className="text-lg font-bold text-black karla-font">WHY JOIN?</p>
          <button>
          <img src={yellowDownArrow} alt="Yellow Down Arrow" className="mt-2" /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
