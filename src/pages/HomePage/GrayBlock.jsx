import './GrayBlock.css';
import peopleImage from '../../assets/people.png'; // Adjust the path as needed

const GrayBlock = () => {
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src={peopleImage} alt="Engineering Hub" />
      </div>
      <div className="content">
        <div className="content-container max-w-lg text-left md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-black karla-font">An accessible <br/> engineering hub for all</h2>
          <p className="text-black mb-6 inter-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ali sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="learn-more-button text-black">
            LEARN MORE &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrayBlock;
