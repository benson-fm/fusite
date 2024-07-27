import FEP_Pic from '../../images/FEP_Pic.png';
import lead from '../../images/lead.png';
import mech from '../../images/mech.png';
import software from '../../images/software.png';
import dev from '../../images/dev.png';
import design from '../../images/design.png';
import red_dot from '../../images/red_dot.png';
import quotation from '../../images/quotation.png';


{/* 
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Karla:wght@400;700&display=swap');

.font-inter {
    font-family: 'Inter', sans-serif;
}

.font-karla {
    font-family: 'Karla', sans-serif;
}

*/}

const Project = () => {
    return (
        <div className="flex flex-col">
            {/* Yellow section */}
            <section className="bg-white w-full h-[1504px] flex flex-col items-center justify-start">
                <div style={{ 
                        backgroundImage: `url(${FEP_Pic})`, 
                        backgroundColor: '#FF9700', 
                        backgroundBlendMode: 'lighten' 
                    }} 
                    className="w-full h-[752px] bg-cover bg-center flex items-center justify-center"
                    >
                    <div className="w-[1306px] h-[438px] flex flex-row items-center">
                        <div className="w-[608px] h-[438px] mr-[63px]" >
                            <h1 className="text-[40px] text-white font-karla font-[600] w-[406px] h-[94px] leading-10">The FUSION Engineering Project</h1>
                            <p className="text-base text-white font-inter w-[608px] h-[320px] ">FUSION empowers members to explore their potential through 
                            pioneering projects like the FUSION Engineering Project (FEP) and various STEM initiatives. Committed to fostering leadership 
                            and technical skills, we provide a platform for ideas and solutions. Join us in shaping the future of STEM.
                            <br></br>
                            <br></br>
                            Teams rigorously design their robots, drawing inspiration from existing projects and learning about relevant technology. Using 
                            software like TinkerCAD and Solidworks, they create detailed models. Manufacturing involves 3D printing, laser cutting, and 
                            soldering. After assembly, robots are tested to identify issues, optimize design, and practice control for the showcase.</p>
                        </div>

                        <div className="grid grid-cols-2 w-[572px] h-[392px] ml-[63px]">
                            <div className="mr-[16px]"> {/* team lead */}
                                <div className="flex flex-col bg-black rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                    <div className="ml-[30.6px]">
                                        <img src={lead} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                        <h1 className="text-white mt-[13.5px] tracking-[.1em] font-[700]">TEAM LEAD</h1>
                                        <p className="w-[205.2px] h-[51px] text-white text-[14px] mt-[8px]">Hardware is responsible for blah 
                                        blah blah and blah blah, ensuring that blah blah blah.</p>
                                    </div>

                                </div>
                            </div>

                            <div className="ml-[16px]"> {/* mech */}
                                <div className="flex flex-col bg-white rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                    <div className="ml-[30.6px]">
                                        <img src={mech} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                        <h1 className="text-black mt-[13.5px] tracking-[.1em] font-[700]">MECHANICAL</h1>
                                        <p className="w-[205.2px] h-[51px] text-black text-[14px] mt-[8px]">Hardware is responsible for blah 
                                        blah blah and blah blah, ensuring that blah blah blah.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mr-[16px]"> {/* hardware */}
                                <div className="flex flex-col bg-white rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                    <div className="ml-[30.6px]">
                                        <img src={mech} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                        <h1 className="text-black mt-[13.5px] tracking-[.1em] font-[700]">HARDWARE</h1>
                                        <p className="w-[205.2px] h-[51px] text-black text-[14px] mt-[8px]">Hardware is responsible for blah 
                                        blah blah and blah blah, ensuring that blah blah blah.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="ml-[16px]"> {/* software */}
                                <div className="flex flex-col bg-white rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                    <div className="ml-[30.6px]">
                                        <img src={software} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                        <h1 className="text-black mt-[13.5px] tracking-[.1em] font-[700]">SOFTWARE</h1>
                                        <p className="w-[205.2px] h-[51px] text-black text-[14px] mt-[8px]">Hardware is responsible for blah 
                                        blah blah and blah blah, ensuring that blah blah blah.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ 
                        backgroundImage: `url(${FEP_Pic})`, 
                        backgroundColor: '#FFA523', 
                        backgroundBlendMode: 'plus-lighter' 
                    }} 
                    className="w-full h-[752px] bg-cover bg-center flex items-center justify-center">
                    <div className="w-[1306px] h-[438px] flex flex-row items-center">
                        <div className="grid grid-cols-2 w-[572px] h-[392px] mr-[63px]">
                            <div className="mr-[16px]"> {/* design lead */}
                                <div className="flex flex-col bg-black rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                    <div className="ml-[30.6px]">
                                        <img src={lead} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                        <h1 className="text-white mt-[13.5px] tracking-[.1em] font-[700]">DESIGN LEAD</h1>
                                        <p className="w-[205.2px] h-[51px] text-white text-[14px] mt-[8px]">Design Leads are responsible for blah 
                                        blah blah and blah blah, ensuring that blah blah blah.</p>
                                    </div>

                                </div>
                            </div>

                            <div className="ml-[16px]"> {/* dev lead */}
                                <div className="flex flex-col bg-white rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                    <div className="ml-[30.6px]">
                                        <img src={mech} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                        <h1 className="text-black mt-[13.5px] tracking-[.1em] font-[700]">DEV LEAD</h1>
                                        <p className="w-[205.2px] h-[51px] text-black text-[14px] mt-[8px]">Dev Leads are responsible for blah 
                                        blah blah and blah blah, ensuring that blah blah blah.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mr-[16px]"> {/* design */}
                                <div className="flex flex-col bg-white rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                    <div className="ml-[30.6px]">
                                        <img src={mech} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                        <h1 className="text-black mt-[13.5px] tracking-[.1em] font-[700]">DESIGNERS</h1>
                                        <p className="w-[205.2px] h-[51px] text-black text-[14px] mt-[8px]">Designers are responsible for blah 
                                        blah blah and blah blah, ensuring that blah blah blah.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="ml-[16px]"> {/* dev */}
                                <div className="flex flex-col bg-white rounded-tl-[45px] rounded-br-[45px] w-[270px] h-[180px]">
                                    <div className="ml-[30.6px]">
                                        <img src={software} className="w-[27px] h-[23.4px] mt-[25.2px] object-cover"/>
                                        <h1 className="text-black mt-[13.5px] tracking-[.1em] font-[700]">DEVELOPERS</h1>
                                        <p className="w-[205.2px] h-[51px] text-black text-[14px] mt-[8px]">Developers are responsible for blah 
                                        blah blah and blah blah, ensuring that blah blah blah.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[608px] h-[438px] ml-[63px]" >
                            <h1 className="text-[40px] text-white font-karla font-[600] w-[601px] h-[94px] leading-10">The FUSION Information & Computer Sciences Project</h1>
                            <p className="text-base text-white font-inter w-[608px] h-[320px] ">FUSION empowers members to explore their potential through 
                            pioneering projects like the FUSION Engineering Project (FEP) and various STEM initiatives. Committed to fostering leadership 
                            and technical skills, we provide a platform for ideas and solutions. Join us in shaping the future of STEM.
                            <br></br>
                            <br></br>
                            Teams rigorously design their robots, drawing inspiration from existing projects and learning about relevant technology. Using 
                            software like TinkerCAD and Solidworks, they create detailed models. Manufacturing involves 3D printing, laser cutting, and 
                            soldering. After assembly, robots are tested to identify issues, optimize design, and practice control for the showcase.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Voices of Success */}
            <section className="bg-gray-200 w-full h-[824px] flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-start">
                    <div className="w-[356px] h-[47px] mt-[115px] text-center">
                        <h1 className="text-[40px] font-karla font-bold">
                            <span className="text-black">Voices of </span>
                            <span className="text-yellow-500">Success</span>
                        </h1>                        
                    </div>

                    <div className="w-[482px] h-[64px] mt-[20px] text-center">
                        <p className="text-black">Still not convinced? Read the reviews of the various engineers, 
                        <br></br>
                        scientists, and designers who participated in our projects! </p>
                    </div>

                    <div className="flex flex-row w-[1307px] h-[364px] mt-[63px] space-x-[55px]">
                        <div className="bg-white w-[399px] h-[364px] rounded-tr-[64px] rounded-bl-[64px]">
                            <div className="ml-[42px]">
                                <img src={quotation} className="w-[70px] h-[47px] mt-[35px] object-cover"/>
                                <p className="w-[314px] h-[140px] text-black text-[14px] mt-[19px]">“When I started at 
                                UC Irvine, I lacked a strong cultural identity and knowledge of my field. Joining FEP 
                                boosted my confidence in my cultural identity and inspired me to learn, surrounded by 
                                people with similar experiences. If you seek growth, immerse yourself in the FEP community!”</p>
                                <div className="flex flex-row w-[314px] h-[55px] space-x-[102px] mt-[26px]">
                                    <img src={red_dot} className="w-[55px] h-[55px]  object-cover"/>
                                    <div className="w-[157px] h-[42px] mt-[6.5px] text-black text-right">
                                        <p>FirstName LastName</p>
                                        <p>Position</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-[399px] h-[364px] rounded-tr-[64px] rounded-bl-[64px]">
                            <div className="ml-[42px]">
                                <img src={quotation} className="w-[70px] h-[47px] mt-[35px] object-cover"/>
                                <p className="w-[314px] h-[129px] text-black text-[19px] mt-[19px]">“Lorem ipsum 
                                dolor sit amet, consectetur asim adipiscing elit, sed do eiusmod tempor ut labore 
                                et dolore magna.”</p>
                                <div className="flex flex-row w-[314px] h-[55px] space-x-[102px] mt-[37px]">
                                    <img src={red_dot} className="w-[55px] h-[55px]  object-cover"/>
                                    <div className="w-[157px] h-[42px] mt-[6.5px] text-black text-right">
                                        <p>FirstName LastName</p>
                                        <p>Position</p>
                                    </div>
                                </div>                                
                            </div>
                        </div>

                        <div className="bg-white w-[399px] h-[364px] rounded-tr-[64px] rounded-bl-[64px]">
                            <div className="ml-[42px]">
                                <img src={quotation} className="w-[70px] h-[47px] mt-[35px] object-cover"/>
                                <p className="w-[314px] h-[129px] text-black text-[19px] mt-[19px]">“Lorem ipsum 
                                dolor sit amet, consectetur asim adipiscing elit, sed do eiusmod tempor ut labore 
                                et dolore magna.”</p>
                                <div className="flex flex-row w-[314px] h-[55px] space-x-[102px] mt-[37px]">
                                    <img src={red_dot} className="w-[55px] h-[55px]  object-cover"/>
                                    <div className="w-[157px] h-[42px] mt-[6.5px] text-black text-right">
                                        <p>FirstName LastName</p>
                                        <p>Position</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Project;
