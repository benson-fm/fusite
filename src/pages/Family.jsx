{/* w-1440 3/4 */}
{/*  */}

import React from "react";
import Footer from "../components/Footer";
import fam_placeholder from '../images/fam_placeholder.png';
import family_background from '../images/FamilyBackground.png';
import FamilyNavbar from '../pages/ProgramsPage/FamilyPage/FamilyNavbar.jsx';
import WhatIsFam from '../pages/ProgramsPage/FamilyPage/WhatIsFam.jsx';
import OrangeFam from "./ProgramsPage/FamilyPage/OrangeFam.jsx";

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

            {/* individual fam section 1540 */}
            <OrangeFam></OrangeFam>

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
