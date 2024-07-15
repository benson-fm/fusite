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
import fam_placeholder from '../images/fam_placeholder.png';


const FamPic = ({ title, image }) => (
    <div className="flex items-center justify-center w-[225px] h-[453px]">
        <div className="flex flex-col items-center">
            <div className="w-[622px] h-[469px">
                <img className="w-full h-full" src={image}/>
            </div>
            <div className="mt-[60px]">
                <p className="text-center text-black tracking-[.1em]">{title}</p>
            </div>
        </div>
    </div>
);
const Family = () => {
    return (
        <div className="flex flex-col"> {/* parent container */}
            <header className="bg-[#cbc7b7] h-[840px] w-full flex flex-col items-center justify-center">  
                <div className="text-center">
                    <h1 className="text-black text-[128px] font-bold tracking-[.25em]">PROGRAMS</h1>
                    <h2 className="text-black text-[40px] mt-[48px] tracking-[.25em]">FAMILY</h2>
                </div>
            </header>

             {/* Entire white section 3352*/}
            <section className="bg-white w-full h-[594px] flex items-center justify-center"> {/* What is Fam system section 594*/}
                <div className="flex flex-col items-center justify-center  w-[816px] h-[258px]">
                    <div>
                        <h1 className="text-[40px] text-black tracking-[.1em]">WHAT IS OUR FAM SYSTEM</h1>
                    </div>
                    <div className="mt-[55px]">
                        <p className="text-xl text-black text-center">General members are assigned to a FUSION Family, referred to as “Fams,” 
                        with each named according to the theme of the school year. This system promotes camaraderie, professional 
                        development, and cultural enrichment through social gatherings, challenges, and friendly competition. The 
                        FUSION Family system significantly contributes to creating a strong sense of community within the organization.</p>
                    </div>
                </div>
            </section>

            <section className="bg-white w-full h-[1540px]"> {/* individual fam section 1540 */}
                <div className="flex items-start justify-center w-full mt-[105px]">   {/* header container */}
                    <h1 className="text-[40px] text-black tracking-[.1em]">2023-2024 FAMS</h1>
                </div>
                <div className="flex items-start justify-center w-full mt-[115px]"> {/* body container */}
                    <div className="grid grid-cols-2 w-[978.75px] h-[1211px]">
                        <div className="mr-[30px]"> {/* Aang Fam */}
                            <img className="w-[622px] h-[405px] object-cover" src={fam_placeholder}></img>
                            <div className="mt-[40px]  text-[40px] text-black text-center tracking-[.1em]">AANG FAM</div>
                        </div>
                        <div className="ml-[30px]"> {/* Zuko Fam */}
                            <img className="w-[622px] h-[405px] object-cover" src={fam_placeholder}></img>
                            <div className="mt-[40px]  text-[40px] text-black text-center tracking-[.1em]">ZUKO FAM</div>
                        </div>
                        <div className="mr-[30px]"> {/* Suki Fam */}
                            <img className="w-[622px] h-[405px] object-cover" src={fam_placeholder}></img>
                            <div className="mt-[40px]  text-[40px] text-black text-center tracking-[.1em]">SUKI FAM</div>
                        </div>
                        <div className="ml-[30px]"> {/* Yue Fam */}
                            <img className="w-[622px] h-[405px] object-cover" src={fam_placeholder}></img>
                            <div className="mt-[40px]  text-[40px] text-black text-center tracking-[.1em]">YUE FAM</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white w-full h-[1218px] flex flex-col items-center justify-start"> {/* fam gallery section 1218 */}
                <div className="flex flex-col items-center justify-start w-[1274px] h-[836px] mt-[67px]">
                    <div>
                        <h1 className="text-[40px] text-black tracking-[.1em]">FAM GALLERY</h1>
                    </div>
                    <div className="mt-[63px]">
                        <img className="w-[955.5px] h-[738px] object-cover" src={fam_placeholder}/>                  
                    </div>
                </div>
            </section>

            <footer className="bg-[#fee270] w-full h-[250px]">
                <Footer />
            </footer>
        </div>
    );
}
{/* 
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
    */}
export default Family;
