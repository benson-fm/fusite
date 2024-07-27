import './OrangeWhiteBlock.css';
import peopleImage from '../../assets/people.png'; // Adjust the path as needed

const OrangeWhiteBlock = () => {
  return (
    <div className="grid-container">
      <div className="white-container">
        <div className="content-container max-w-lg text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-black karla-font">An accessible <br/> engineering hub for all</h2>
          <p className="text-black mb-6 inter-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ali sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="learn-more-button">
            LEARN MORE &gt;
          </button>
        </div>
      </div>
      <div className="orange-container"></div>
      <img src={peopleImage} alt="Engineering Hub" className="hub-image"/>
    </div>
  );
};

export default OrangeWhiteBlock;
