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
            <div className="carousel w-full flex justify-center space-x-4">
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
            <div className="fusion-container py-10">
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
                    <h2 className="text-4xl font-bold">JOIN FUSION</h2>
                    <p className="text-2xl mt-4">WE ARE ALWAYS MORE OPEN TO PEOPLE JOINING US.</p>
                    <button className="fusion-button mt-6">BUTTON</button>
                </div>
            </div>
            {/* Footer */}
            <footer className="footer bg-yellow-500 py-8">
                <div className="container mx-auto flex flex-col items-center text-center">
                    <div className="flex justify-between w-full mb-4">
                        <div className="flex items-center space-x-4">
                            <a href="#contact" className="text-black">CONTACT US</a>
                            <a href="mailto:fusion@uci.edu" className="text-black">FUSION@UCI.EDU</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#home" className="text-black">HOME</a>
                            <a href="#about" className="text-black">ABOUT</a>
                            <a href="#meetings" className="text-black">MEETINGS</a>
                            <a href="#board" className="text-black">BOARD</a>
                            <a href="#programs" className="text-black">PROGRAMS</a>
                            <a href="#fusioncon" className="text-black">FUSIONCON</a>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4 mb-4">
                        <a href="https://www.instagram.com/fusionatuci/" className="text-black " target="_blank" rel="noopener noreferrer">
                            <img src={InstagramLogo} alt="Instagram" className="h-6" />
                        </a>
                        <a href="https://discord.gg/9wnrCWEfxK" className="text-black" target="_blank" rel="noopener noreferrer">
                            <img src={DiscordLogo} alt="Discord" className="h-6" />
                        </a>
                        <a href="https://www.facebook.com/fusionuci/" className="text-black" target="_blank" rel="noopener noreferrer">
                            <img src={FacebookLogo} alt="Facebook" className="h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/fusionatuci/" className="text-black" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInLogo} alt="LinkedIn" className="h-6" />
                        </a>
                    </div>
                    <div className="text-center mt-4 text-black">
                        &copy; Copyright FUSION 2024
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;