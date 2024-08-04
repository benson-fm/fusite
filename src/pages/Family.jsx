{/* w-1440 3/4 */}
{/*  */}

import React from "react";
import Footer from "../components/Footer";
import fam_placeholder from '../images/fam_placeholder.png';
import family_background from '../images/FamilyBackground.png';
import FamilyNavbar from '../pages/ProgramsPage/FamilyPage/FamilyNavbar.jsx';
import WhatIsFam from '../pages/ProgramsPage/FamilyPage/WhatIsFam.jsx';

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
            <FamilyNavbar bg={family_background} title="FAMILY" subtitle="PROGRAMS" homeNav={true} className="z-20">
            </FamilyNavbar>
             {/* Entire white section 3352*/}
            <WhatIsFam></WhatIsFam>

            <section className="bg-white w-full h-[1540px]"> {/* individual fam section 1540 */}
                <div className="flex items-start justify-center w-full mt-[105px]">   {/* header container */}
                    <h1 className="text-[40px] text-black tracking-[.1em]">2023-2024 FAMS</h1>
                </div>
                <div className="flex items-start justify-center w-full mt-[115px]"> {/* body container */}
                    <div className="grid grid-cols-2 w-[978.75px] h-[1211px]">
                        <div className="mr-[30px]"> {/* Aang Fam */}
                            <img className="w-[622px] h-[405px] object-cover" src={fam_placeholder}></img>
                            <div className="mt-[40px] text-[40px] text-black text-center tracking-[.1em]">
                                <a href="https://www.instagram.com/_aang.fam_/">AANG FAM</a>
                            </div>
                        </div>
                        <div className="ml-[30px]"> {/* Zuko Fam */}
                            <img className="w-[622px] h-[405px] object-cover" src={fam_placeholder}></img>
                            <div className="mt-[40px] text-[40px] text-black text-center tracking-[.1em]">
                                <a href="https://www.instagram.com/zuko_fam/">AANG FAM</a>
                            </div>
                        </div>
                        <div className="mr-[30px]"> {/* Suki Fam */}
                            <img className="w-[622px] h-[405px] object-cover" src={fam_placeholder}></img>
                            <div className="mt-[40px] text-[40px] text-black text-center tracking-[.1em]">
                                <a href="https://www.instagram.com/sukifam/">AANG FAM</a>
                            </div>
                        </div>
                        <div className="ml-[30px]"> {/* Yue Fam */}
                            <img className="w-[622px] h-[405px] object-cover" src={fam_placeholder}></img>
                            <div className="mt-[40px] text-[40px] text-black text-center tracking-[.1em]">
                                <a href="https://www.instagram.com/princessyuefam/">AANG FAM</a>
                            </div>
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

export default Family;
