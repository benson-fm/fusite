{/* w-1440 3/4 */}
{/*  */}
{/* 

const PillarBox = ({ title, content }) => (
    <div className="flex items-center justify-center text-black border border-black w-[225px] h-[453px] relative bg-[#cbc7b7]">
        <div className="text-center transform -translate-y-[15%]">
            <div className="mb-5 pb-2">
                <h3 className="text-2xl tracking-[.1em]">{title}</h3>
            </div>
            <div>
                <p className="text-center pl-4 pr-4">{content}</p>
            </div>
        </div>
    </div>
);

<section className="bg-[#fee270] w-full h-[928px] flex items-center justify-center">
                <div className="flex flex-wrap items-center justify-center gap-6">
                    ---- Use the PillarBox component for each pillar
                    <PillarBox
                        title="SUPPORT"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                    />
*/}
import React from "react";
import Footer from "../components/Footer";
import Instagram from '../images/Instagram.png'; // Import your icon image


const Internship = () => {
    return (
        <div className="flex flex-col"> {/* parent container */}
            <header className="bg-[#cbc7b7] h-[840px] w-[1440px] flex flex-col items-center justify-center">  
                <div className="text-center">
                    <h1 className="text-black text-[128px] font-bold tracking-[.25em]">PROGRAMS</h1>
                    <h2 className="text-black text-[40px] mt-[48px] tracking-[.25em]">INTERNSHIP</h2>
                </div>
            </header>

             {/* Entire white section 4236*/}
            <section className="bg-white w-[1440px] h-[589px] flex items-center justify-center">  {/* Overview */}
                <div className="flex flex-col items-center justify-center  w-[816px] h-[258px]">
                    <div>
                        <h1 className="text-[40px] text-black tracking-[.1em]">OVERVIEW</h1>
                    </div>
                    <div className="mt-[55px]">
                        <p className=" text-xl text-black text-center">Our 10-week internship program enables interns to shadow three 
                        board positions of their choice. The first six weeks involve rotating through these roles, followed 
                        by a focus on one preferred position during the final four weeks, culminating in an intern-led general 
                        meeting in the last week. Interns are expected to attend both general meetings and board meetings 
                        throughout the program.</p>
                    </div>
                </div>
            </section>

            <section className="bg-white w-[1440px] h-[775px] flex flex-col items-center justify-start"> {/* Intern Duties */}
                <div className="w-full mt-[158px] flex items-center justify-center">
                    <h1 className="text-[40px] text-black tracking-[.1em]">INTERN DUTIES</h1>
                </div>
                <div className="w-[967.25px] mt-[121px] flex items-center justify-center">
                    <div className="text-black flex items-center justify-center w-[967.25px] h-[339px] gap-[173.25px]">
                        <div className="flex flex-col items-center text-center w-[271px] h-[339px]">
                            <div className="w-[78px] h-[78px]">
                                <img src={Instagram} alt="Duty Icon" className="w-[78px] h-[78px]" />
                            </div>
                            <div className="w-[172px] h-[35px] mt-[44px]">
                                <h2 className="text-[32px] font-bold">DUTY #1</h2>
                            </div>
                            <div className="w-[260px] h-[105px] mt-[16px]">
                                <p className="text-xl">Attendance for each general and board meeting is mandatory (unless excused).</p>
                            </div>
                            </div>
                            
                            <div className="flex flex-col items-center text-center w-[271px] h-[339px]">
                            <div className="w-[78px] h-[78px]">
                                <img src={Instagram} alt="Duty Icon" className="w-[78px] h-[78px]" />
                            </div>
                            <div className="w-[172px] h-[35px] mt-[44px]">
                                <h2 className="text-[32px] font-bold">DUTY #2</h2>
                            </div>
                            <div className="w-[250px] h-[140px] mt-[16px]">
                                <p className="text-xl">Host one intern week (create general meeting + weekly events) with fellow interns.</p>
                            </div>
                            </div>
                            
                            <div className="flex flex-col items-center text-center w-[271px] h-[339px]">
                            <div className="w-[78px] h-[78px]">
                                <img src={Instagram} alt="Duty Icon" className="w-[78px] h-[78px]" />
                            </div>
                            <div className="w-[172px] h-[35px] mt-[44px]">
                                <h2 className="text-[32px] font-bold">DUTY #3</h2>
                            </div>
                            <div className="w-[260px] h-[140px] mt-[16px]">
                                <p className="text-xl">Create/host an event based on preferred position during the final three weeks of the program.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white w-[1440px] h-[1565.5px] flex flex-col items-center justify-start"> {/* Benefits of Interning */}
                <div className="flex flex-col items-center justify-start h-full">
                    <div className="mt-[122px] flex items-start justify-center">
                        <h1 className="text-[40px] text-black tracking-[.1em]">BENEFITS OF INTERNING</h1>
                    </div>
                </div>
            </section>

            <section className="bg-white w-full h-[544px] flex items-center justify-center"> {/* Want to join our next class */}
                <div className="flex flex-col items-center justify-center w-full mt-[142.5px]">
                    <h1 className="text-2xl text-black tracking-[.1em] mb-[90px]">WANT TO JOIN OUR NEXT INTERN CLASS?</h1>
                    <a href="https://www.youtube.com/watch?v=GBIIQ0kP15E&ab_channel=SheeshBruh" className="bg-yellow-500 text-black py-2 px-4 
                    border-2 border-black tracking-[.20em] inline-block hover:scale-105 transition-transform duration-200"> APPLY HERE
                    </a>
                </div>
            </section>

            <section className="bg-white w-[1440px] h-[761.5px] flex items-center justify-center"> {/* random pics?*/}
            </section>

            <footer className="bg-[#fee270] w-[1440px] h-[250px]">
                <Footer />
            </footer>
        </div>
    );
}

export default Internship;
