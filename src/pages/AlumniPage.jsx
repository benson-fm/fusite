import PlaceholderPic from '../assets/placeholderPic.png';
import Gmail from '../assets/Gmail.png';
import Facebook from '../images/Facebook.png';
import LinkedIn from '../images/LinkedIn.png';
import Footer from "../components/Footer";

export function AlumniPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white p-8 overflow-x-hidden">
            <div className="max-w-[1088px] w-full flex flex-col justify-center items-center gap-10">
                <h1 className="text-black text-center font-inter text-4xl font-medium mt-20" style={{ letterSpacing: '8px' }}>
                    ALUMNI NETWORK
                </h1>
                <p className="text-black text-center font-inter text-base leading-7 px-32">
                    The Networking Directors of FUSION host a variety of programs to connect the alumni network to FUSION’s current active members, 
                    to give our members the opportunity to connect and learn from our alumni from everything to professional development to general life advice.
                </p>
            </div>

            <img src={PlaceholderPic} alt="Placeholder" className="w-full h-auto mt-20"/>

            <div className="max-w-[1088px] w-full flex flex-col justify-center items-center gap-10 m-20">
                <h1 className="text-black text-center font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                    HOW TO GET INVOLVED
                </h1>
                <p className="text-black text-center font-inter text-base leading-7 px-32">
                    We strongly encourage all FUSION alumni to stay connected! There are many ways to stay involved and still make an impact on the FUSION space.
                </p>
            </div>

            <div className="flex items-start max-w-[1270px] w-full h-[413px] mt-4">
                <img src={PlaceholderPic} alt="Scholarship Placeholder" className="w-[626px] h-[413px] opacity-1"/>
                <div className="ml-8 flex flex-col justify-center">
                    <h2 className="text-black font-inter text-4xl font-medium pr-40" style={{ letterSpacing: '8px' }}>
                        ALUMNI SCHOLARSHIP
                    </h2>
                    <p className="text-black font-inter text-base leading-7 pr-32 mt-4">
                        Help us fund a yearly scholarship for a FUSION general member that has actively contributed to the community!
                    </p>
                </div>
            </div>

            <div className="flex items-start max-w-[1270px] w-full h-[413px] mt-20">
                <div className="mr-8 flex flex-col justify-center">
                    <h2 className="text-black font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                        PROFESSIONAL NETWORK
                    </h2>
                    <p className="text-black font-inter text-base leading-7">
                        Provide your contact information and a little bit about your career path to allow members interested in your career to reach out!
                    </p>
                </div>
                <img src={PlaceholderPic} alt="Network Placeholder" className="w-[626px] h-[413px] opacity-1"/>
            </div>

            <div className="flex items-start max-w-[1270px] w-full h-[413px] mt-20">
                <img src={PlaceholderPic} alt="Spotlight Placeholder" className="w-[626px] h-[413px] opacity-1"/>
                <div className="ml-8 flex flex-col justify-center">
                    <h2 className="text-black font-inter text-4xl font-medium pr-40" style={{ letterSpacing: '8px' }}>
                        ALUMNI SPOTLIGHT
                    </h2>
                    <p className="text-black font-inter text-base leading-7">
                        The Networking Directors will spotlight an Alumni each quarter, so let us know if you’d like to be highlighted or would like to recommend someone.
                    </p>
                </div>
            </div>

            <div className="max-w-[1264px] w-full flex items-center justify-center h-[385px] mt-20 bg-gray-200 rounded-lg p-8">
                <div className="max-w-[1160px] w-full">
                    <h2 className="text-black font-inter text-center text-4xl font-medium tracking-wide">
                        CARE TO REACH OUT? CONNECT WITH US!
                    </h2>
                    <div className="flex items-center justify-center gap-10 mt-6">
                        <a href="mailto:fusion.uci.networking@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={Gmail} alt="Gmail Icon" className="w-[127.76px] h-[97.26px] opacity-1"/>
                        </a>
                        <a href="https://www.facebook.com/fusionuci/" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt="Facebook Icon" className="w-[108.8px] h-[108.8px] opacity-1"/>
                        </a>
                        <a href="https://www.linkedin.com/in/fusionatuci/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn Icon" className="w-[108.15px] h-[108.8px] opacity-1"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='mt-20'></div>
            <Footer />
        </div>
        
    );
}