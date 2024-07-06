const AboutUs = () => {
    return (
        <div className="flex flex-col about-us-container">
            <header className="bg-[#cbc7b7] w-full h-[840px] flex items-center justify-center">
                <p className="text-black text-6xl font-bold w-[843px] h-[155px] text-center tracking-[.5em]">ABOUT US</p>
            </header>

            <section className="bg-white w-full h-[750px] flex items-center justify-center relative">
                <div className="text-center basis-[57%] transform -translate-y-1/4">
                    <h2 className=" text-black tracking-[0.25em] text-4xl mb-[55px]">FUSION PILLARS</h2>
                    <p className="text-black"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>
                </div>
            </section>

            <section className="bg-[#fee270] w-full h-[928px] flex items-center justify-center">
                <div className="flex flex-wrap items-center justify-center gap-6">
                
                    <div className="flex items-center justify-center text-black border border-black w-[200px] h-[453px] relative bg-[#cbc7b7]">
                        <div className="text-center transform -translate-y-[15%]">
                            <h3 className="mb-5 text-2xl tracking-[.1em]">SUPPORT</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center text-black border border-black w-[200px] h-[453px] relative bg-[#cbc7b7]">
                        <div className="text-center transform -translate-y-[15%]"> 
                            <h3 className="mb-5 text-2xl tracking-[.1em]">CULTURE</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center text-black border border-black w-[200px] h-[453px] relative bg-[#cbc7b7]">
                        <div className="text-center transform -translate-y-[15%]"> 
                            <h3 className="mb-5 text-xl">PROFESSIONALISM</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center text-black border border-black w-[200px] h-[453px] relative bg-[#cbc7b7]">
                        <div className="text-center transform -translate-y-[15%]">
                            <h3 className="mb-5 text-2xl">SCIENCE & ENGINEERING</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center text-black border border-black w-[200px] h-[453px] relative bg-[#cbc7b7]">
                        <div className="text-center transform -translate-y-[15%]">
                            <h3 className="mb-5 text-2xl">ACADEMICS</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white w-full h-[1200px] flex flex-col items-center">
                <h2 className="text-black text-4xl tracking-[.25em] mb-24 mt-52">ALYANSA</h2>
                <div className="flex justify-center gap-16">

                    <div className="flex flex-col items-center text-center">
                        <div className="bg-gray-300 w-64 h-64 mb-12"></div>
                        <div className="w-64 h-64">
                            <h3 className="text-black text-xl tracking-[.20em] mb-4">PASS</h3>
                            <p className="text-black mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <a href="https://www.instagram.com/passatuci/" className="bg-yellow-500 text-black py-2 px-4 border-2 border-black tracking-[.20em] inline-block hover:scale-105 transition-transform duration-200">BUTTON</a>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-gray-300 w-64 h-64 mb-12"></div>
                        <div className="w-64 h-64">
                            <h3 className="text-black text-xl tracking-[.20em] mb-4">KABA</h3>
                            <p className="text-black mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>                        
                        <a href="https://www.instagram.com/kabaatuci/" className="bg-yellow-500 text-black py-2 px-4 border-2 border-black tracking-[.20em] inline-block hover:scale-105 transition-transform duration-200">BUTTON</a>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="bg-gray-300 w-64 h-64 mb-12"></div>
                        <div className="w-64 h-64">
                            <h3 className="text-black text-xl tracking-[.20em] mb-4">PUSO</h3>
                            <p className="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>                        
                        <a href="https://www.instagram.com/pusoatuci/" className="bg-yellow-500 text-black py-2 px-4 border-2 border-black tracking-[.20em] inline-block hover:scale-105 transition-transform duration-200">BUTTON</a>
                    </div>
                </div>
            </section>
            
            <footer className="bg-[#fee270] w-full h-[355px]">
                <p className="text-black text-2xl text-center">Footer</p>
            </footer>
        </div>
    );
}

export default AboutUs;
