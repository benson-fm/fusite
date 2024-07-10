import placeholderImage from '/src/assets/placeholder-image.jpg';
import placeholderDarkImage from '/src/assets/placeholder-dark.jpg';
import FusionLogo from '/src/assets/FusionLogo.png';
import './FusionInfo.css'; // Import the CSS file for styling
import DiscordLogo from '/src/assets/Discord.png';
import FacebookLogo from '/src/assets/Facebook.png';
import InstagramLogo from '/src/assets/Instagram.png';
import LinkedInLogo from '/src/assets/LinkedIn.png';

const Home = () => {
    return (
        <div className="home">
            {/*What is Fusion*/}
            <div className="bg-white py-20">
                <h2 className="text-4xl font-semibold text-center text-black">WHAT IS FUSION?</h2>
                <p className="mt-8 mx-auto max-w-3xl text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            {/*Image Carousel*/}
            <div className="carousel w-full flex justify-center space-x-4 bg-white py-20">
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-1/3">
                    <img src={placeholderDarkImage} className="w-full h-64 object-cover" alt="Slide 1" />
                </div>
                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-1/3">
                    <img src={placeholderDarkImage} className="w-full h-64 object-cover" alt="Slide 2" />
                </div>
                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-1/3">
                    <img src={placeholderDarkImage} className="w-full h-64 object-cover" alt="Slide 3" />
                </div>
                {/* Slide 4 */}
                <div id="slide4" className="carousel-item relative w-1/3">
                    <img src={placeholderDarkImage} className="w-full h-64 object-cover" alt="Slide 4" />
                </div>
            </div>
            {/*What does Fusion bring?*/}
            <div className="fusion-container py-10 bg-white">
                <h2 className="text-4xl font-semibold text-center mb-10 text-black">WHAT DOES FUSION BRING?</h2>
                <div className="fusion-row">
                    <div className="fusion-text-box">
                        <h3 className="text-xl font-semibold mb-2 text-black">Insert Title Here</h3>
                        <p className="mb-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className="fusion-button text-black">BUTTON</button>
                    </div>
                    <div className="fusion-image-box">
                        <img src={placeholderDarkImage} alt="Placeholder" className="fusion-image" />
                    </div>
                </div>
                <div className="fusion-row">
                    <div className="fusion-image-box">
                        <img src={placeholderDarkImage} alt="Placeholder" className="fusion-image" />
                    </div>
                    <div className="fusion-text-box">
                        <h3 className="text-xl font-semibold mb-2 text-black">Insert Title Here</h3>
                        <p className="mb-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className="fusion-button text-black">BUTTON</button>
                    </div>
                </div>
                <div className="fusion-row">
                    <div className="fusion-text-box">
                        <h3 className="text-xl font-semibold mb-2 text-black">Insert Title Here</h3>
                        <p className="mb-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className="fusion-button text-black">BUTTON</button>
                    </div>
                    <div className="fusion-image-box">
                        <img src={placeholderDarkImage} alt="Placeholder" className="fusion-image" />
                    </div>
                </div>
            </div>
            {/* Join Fusion */}
            <div className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${placeholderDarkImage})` }}>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
                    <h2 className="text-8xl font-bold">JOIN FUSION</h2>
                    <p className="text-2xl mt-4">WE ARE ALWAYS MORE OPEN TO PEOPLE JOINING US.</p>
                    <button className="fusion-button mt-6">BUTTON</button>
                </div>
            </div>
        </div>
    );
}

export default Home;