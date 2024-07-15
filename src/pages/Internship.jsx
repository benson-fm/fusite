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

const Family = () => {
    return (
        <div className="flex flex-col"> {/* parent container */}
            <header className="bg-[#cbc7b7] h-[840px] w-full flex flex-col items-center justify-center">  
                <div className="text-center">
                    <h1 className="text-black text-7xl font-bold tracking-[.25em]">PROGRAMS</h1>
                    <h2 className="text-black text-4xl mt-[48px] tracking-[.25em]">INTERNSHIP</h2>
                </div>
            </header>

             {/* Entire white section 4236*/}
            <section className="bg-white w-full h-[589px] flex items-center justify-center">  {/* Overview */}
                <div className="flex flex-col items-center justify-center  w-[816px] h-[258px]">
                    <div>
                        <h1 className="text-2xl text-black tracking-[.1em]">OVERVIEW</h1>
                    </div>
                    <div className="mt-[55px]">
                        <p className="text-black text-center">Our 10-week internship program enables interns to shadow three 
                        board positions of their choice. The first six weeks involve rotating through these roles, followed 
                        by a focus on one preferred position during the final four weeks, culminating in an intern-led general 
                        meeting in the last week. Interns are expected to attend both general meetings and board meetings 
                        throughout the program.</p>
                    </div>
                </div>
            </section>

            <section className="bg-white w-full h-[775px] flex items-center justify-center"> {/* Intern Duties */}
                <div className="flex items-start justify-center w-full mt-[158px]">   {/* header container */}
                    <h1 className="text-2xl text-black tracking-[.1em]">INTERN DUTIES</h1>
                </div>
            </section>

            <section className="bg-white w-full h-[1565.5px] flex items-center justify-center"> {/* Benefits of Interning */}
            </section>

            <section className="bg-white w-full h-[544px] flex items-center justify-center"> {/* Want to join our next class */}
            </section>

            <section className="bg-white w-full h-[761.5px] flex items-center justify-center"> {/* random pics?*/}
                <div className="flex items-start justify-center w-full mt-[142.5px] mb-[90px]">
                    <h1 className="text-2xl text-black tracking-[.1em]">WANT TO JOIN OUR NEXT INTERN CLASS?</h1>
                </div>
                <div>
                <button className="bg-yellow-500 text-black py-2 px-4">APPLY HERE</button>
                </div>
            </section>

            <footer className="bg-[#fee270] w-full h-[250px]">
                <Footer />
            </footer>
        </div>
    );
}

export default Family;
