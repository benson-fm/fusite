import PlaceholderPic from '../assets/placeholderPic.png';
import YellowPlaceholder from '../assets/yellowPlaceholder.png';
import Profile from '../assets/Profile.png';
import Footer from "../components/Footer";


export function MentorshipPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white p-8 overflow-x-hidden">
            <div className="w-full flex flex-col justify-center items-center gap-10">
                <h1 className="text-black text-center font-inter text-4xl font-medium mt-40" style={{ letterSpacing: '8px' }}>
                    WHAT IS OUR MENTORSHIP PROGRAM?
                </h1>
                <p className="text-black text-center font-inter text-base leading-7 px-32">
                    General members are assigned a mentor during Mentorship Reveal, based on compatibility and majors, though 
                    not limited exclusively to science and engineering disciplines. Having a mentor provides members with an 
                    experienced guide, fostering a sense of belonging throughout their college experience.
                </p>
            </div>

            <div className="grid grid-cols-3 mt-40">
                {/* First Row */}
                <div className="flex items-center justify-center">
                    <img src={PlaceholderPic} alt="Image 1" className="w-640 h-417" />
                </div>
                <div className="flex items-center justify-center">
                <h1 className="text-black text-center font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                        GROW
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    <img src={PlaceholderPic} alt="Image 2" className="w-640 h-417" />
                </div>

                {/* Second Row */}
                <div className="flex items-center justify-center">
                    <h1 className="text-black text-center font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                        CONNECT
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    <img src={PlaceholderPic} alt="Image 3" className="w-640 h-417" />
                </div>
                <div className="flex items-center justify-center">
                    <h1 className="text-black text-center font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                        LEARN
                    </h1>
                </div>
            </div>

            <div className="max-w-[1274px] w-full flex flex-col justify-center items-center gap-10 mt-40">
                <h1 className="text-black text-center font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                    A WORD FROM OUR MENTORS/MENTEES
                </h1>
                <div className="flex items-start max-w-[1270px] w-full h-[413px] mt-4">
                    <img src={Profile} alt="Profile 1" className="w-[285.49px] h-[307.45px] opacity-1"/>
                        <div className="ml-8 flex flex-col justify-center">
                            <p className="text-black font-inter text-2xl leading-7 pl-8 mt-4">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
                            </p>

                            <div className="flex flex-row mt-40">
                                <p className="text-black font-inter text-2xl leading-7 pl-8">
                                    - Lorem Ipsum 
                                </p>
                                <p className="text-gray-700 font-inter italic text-2xl leading-7 pl-2">
                                    Internship Class 
                                </p>
                            </div>
                        </div>
                </div>

                <div className="flex items-start max-w-[1270px] w-full h-[413px] mt-4">
                    <div className="ml-8 flex flex-col justify-center">
                        <p className="text-black font-inter text-2xl leading-7 pr-8 mt-4">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
                        </p>

                        <div className="flex flex-row mt-40 justify-end">
                            <p className="text-black font-inter text-2xl leading-7 pr-2">
                                - Lorem Ipsum 
                            </p>
                            <p className="text-gray-700 font-inter italic text-2xl leading-7 pr-10">
                                Internship Class 
                            </p>
                        </div>
                    </div>
                    <img src={Profile} alt="Profile 1" className="w-[285.49px] h-[307.45px] opacity-1"/>
                </div>
            </div>

            <h1 className="text-black text-center font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                WANT TO BECOME  A MENTOR OR MENTEE?
            </h1>

            <button className="text-black font-inter text-xl font-medium leading-9 text-center py-5 px-10 border-4 border-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none  mt-20"
                style={{
                    width: '306px',
                    height: '92px',
                    top: '4325px',
                    left: '801px',
                    padding: '20px 36px',
                    gap: '10px',
                    opacity: '1',
                    letterSpacing: '4px'
                }}
            >
                APPLY HERE
            </button>

            <div className="relative w-[1920px] h-[1120px] mt-40 flex items-center justify-center mt-60">
                <img src={YellowPlaceholder} alt="Yellow Placeholder" className="absolute top-0 left-0 w-[1920px] h-[1120px] opacity-1"/>
    
                <div className="absolute text-center">
                    <h1 className="text-black font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                        23-24 MENTORSHIP REVEAL
                    </h1>
                    <img src={PlaceholderPic} alt="Image 1" className="w-[1274px] h-[758px] mt-10"/>
                    <button className="text-black font-inter text-xl font-medium text-center border-4 border-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none  mt-20"
                        style={{
                            width: '367px',
                            height: '69px',
                            top: '996px',
                            left: '801778px',
                            padding: '20px 36px 20px 36px',
                            gap: '10px',
                            opacity: '1',
                            letterSpacing: '4px'
                        }}
                    >
                        SEE FULL GALLERY
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}