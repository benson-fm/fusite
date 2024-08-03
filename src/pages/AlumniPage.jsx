import Navbar from "../components/Navbar";
import alum_navbar from "../assets/alum_navbar.png";
import alum_panel from "../images/alum_panel.png";
import alum_scholarship from "../assets/alum_scholarship.png";
import alum_picnic from "../images/alum_picnic.png";
import fep_award from "../images/fep_award.png";
import alum_triangle from "../assets/alum_triangle.png";
import alum_dots1 from "../assets/alum_dots1.png";
import alum_circles1 from "../assets/alum_circles1.png";
import alum_vector1 from "../assets/alum_vector1.png";
import alum_circles2 from "../assets/alum_circles2.png";





export function AlumniPage() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Navbar title="ALUMNI" subtitle="PROGRAMS" bg={alum_navbar} />
            {/* Give Back and Get Involved */}
            <div className="w-full h-[540px] bg-white flex justify-center items-center">
                <div className="w-[58%] h-1/2 text-center">
                    <div className="font-semibold text-5xl">
                        <span className="text-[#FFA523]">Give Back</span> <span className="text-black">and Get Involved</span>
                    </div>
                    <hr className="w-48 h-1 mx-auto bg-[#FAC80A] border-0 rounded my-10"/>
                    <div className="h-1/2 flex justify-center items-center">
                        <p className="text-black text-center">
                        At FUSION, we believe in the power of lifelong connections. Our strong alumni network is a testament 
                        to the enduring relationships formed within our community. We actively engage with our alumni through 
                        regular events and networking opportunities, ensuring they remain an integral part of FUSION's growth 
                        and success. By fostering these connections, we provide current members with invaluable guidance and 
                        support, while celebrating the achievements of our alumni in their professional journeys.
                        </p>
                    </div>
                </div>
            </div>

            {/* alumni panel pic */}
            <div className="w-full reletive z-10">
                <img src={alum_panel}/>
            </div>

            {/* alumni scholarship */}
            <div className="w-full h-[540px] bg-[#fff5eb] flex flex-row">
                <div className="w-[60%] h-full relative">
                    <div className="w-[62%] h-[76%] bg-white rounded-b-[60px] rounded-tl-[60px] ml-[27%] mt-[10%] z-10 relative border-2 border-white">
                        <div className="w-[85%] ml-[7%]">
                            <h1 className="font-[700] text-[#FFA523] mt-[9%] tracking-[.1em]">EMPOWERING FUTURES &gt;&gt;</h1>
                            <h1 className="text-black text-3xl font-[700] mt-[3%] ">Alumni Scholarships for Tomorrow's Leaders</h1>
                            <hr className="w-16 h-1  bg-[#FAC80A] border-0 rounded mt-[5%]"/>
                            <p className="text-xs text-black mt-[5%] leading-[22px]">FUSION is proud to offer alumni-sponsored scholarships, a testament to the strong support and dedication 
                                of our alumni network. These scholarships are designed to empower current members by providing financial 
                                assistance and recognizing their academic and professional achievements. Through the generosity of our 
                                alumni, we continue to foster a culture of excellence and ambition, ensuring that every member has the 
                                opportunity to succeed and make a lasting impact in the STEM fields.</p>
                        </div>
                    </div>
                    <img src={alum_vector1} className="w-80 h-60 absolute transform translate-y-[-207%] z-0"/>
                    <img src={alum_circles2} className="w-14 h-16 absolute transform translate-y-[-630%] translate-x-[270%] z-5"/>
                </div>
                <div className="w-[35%] h-full relative">
                    <img src={fep_award} className="w-[90%] h-[55%] mt-[24%] rounded-bl-[40px] rounded-tr-[40px] z-10 relative"/>
                    <img src={alum_circles1} className="w-14 h-24 absolute transform translate-x-[728%] translate-y-[-75%] z-0"/>
                </div>
                <div className="flex flex-col flex-grow justify-start items-end">
                    <img src={alum_triangle} className="w-28 h-28"/>
                    <img src={alum_dots1} className="w-28 h-28"/>
                </div>
            </div>

            {/* Network w pros */}
            <div className="w-full h-[540px] bg-white flex flex-row ">
                <img src={alum_picnic} className="w-[35%] h-[55%] mt-[8%] ml-[16%]"></img>
                <div className="w-1/3 h-[65%] bg-[#f8f8f8] rounded-t-[60px] rounded-br-[60px] ml-[4%] mt-[7.5%]">
                    <div className="w-[85%] ml-[7%]">
                        <h1 className="font-[700] text-[#FFA523] mt-[7%] tracking-[.1em]">CONNECT AND COLLABORATE &gt;&gt;</h1>
                        <h1 className="text-black text-3xl font-[700] mt-[3%] ">Network with Professionals</h1>
                        <hr className="w-16 h-1  bg-[#FAC80A] border-0 rounded mt-[5%]"/>
                        <p className="text-xs text-black mt-[5%] leading-[22px]">These events bring together our current undergraduate 
                        members with FUSION alumni, fostering an environment of collaboration and mentorship. Through workshops, panels, 
                        and social gatherings, our members gain invaluable insights, establish professional relationships, and expand 
                        their career prospects. Join us at our networking events and become part of a thriving community dedicated to 
                        mutual growth and success in the STEM fields!</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-[920px] bg-black">
            </div>
        </div>
    );
}

export default AlumniPage;



{/* 



import PlaceholderPic from '../assets/placeholderPic.png';
import Gmail from '../assets/Gmail.png';
import Facebook from '../images/Facebook.png';
import LinkedIn from '../images/LinkedIn.png';
import Footer from "../components/Footer";


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
        </div> */}