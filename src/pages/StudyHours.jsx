import React from 'react';
import Footer from '../components/Footer';
import placeholderPic from '../assets/placeholderPic.png';

const StudyHours = () => {
    return (
        <>
            <div className="min-h-screen bg-white">
                <main className="px-8 py-16">
                    <section className="relative mb-16">
                        <div className="relative text-center">
                            <img src={placeholderPic} alt="Placeholder" className="mx-auto" />
                            <div className="absolute inset-0 flex flex-col justify-center items-center">
                                <h2 className="text-7xl font-bold text-black">PROGRAMS</h2>
                                <p className="text-3xl text-black">STUDY HOURS</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16 text-center">
                        <h2 className="text-3xl font-bold mb-8 text-black">FUSION STUDY HOURS</h2>
                        <p className="max-w-2xl mx-auto text-black">
                            Join us for FUSION Study Hours, an ideal space for members to focus, collaborate, and make progress on their work or studies. Workshops are also held during Study Hours to enhance your skills and provide guidance on any struggles you may have. Whether you are aiming to finish an important project, prepare for an exam, or simply catch up on assignments, our supportive environment is designed to help you stay on track!
                        </p>
                    </section>

                    <img src={placeholderPic} alt="Placeholder" className="mx-auto mb-10" />

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8 text-black">Why Join Study Hours?</h2>
                        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-16">
                            <div className="flex flex-col md:flex-row items-center">
                                <img src={placeholderPic} alt="Placeholder" className="w-full md:w-1/2 object-cover mb-4 md:mb-0" />
                                <div className="md:ml-6 text-left">
                                    <p className="text-black font-bold text-lg tracking-wider">
                                        HONOR SOCIETY
                                    </p>
                                    <p className="text-black mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <ul className="list-disc ml-4 mt-4 text-black space-y-2">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Abs consectetur adipiscing elit, sed do eiusmod tempor</li>
                                        <li>Incididunt ut labore et dolore magna ali.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:mr-6 text-left order-2 md:order-1">
                                    <p className="text-black font-bold text-lg tracking-wider">
                                        REWARDS
                                    </p>
                                    <p className="text-black mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <ul className="list-disc ml-4 mt-4 text-black space-y-2">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Abs consectetur adipiscing elit, sed do eiusmod tempor</li>
                                        <li>Incididunt ut labore et dolore magna ali.</li>
                                    </ul>
                                </div>
                                <img src={placeholderPic} alt="Placeholder" className="w-full md:w-1/2 object-cover mb-4 md:mb-0 order-1 md:order-2" />
                            </div>
                            <div className="flex flex-col md:flex-row items-center">
                                <img src={placeholderPic} alt="Placeholder" className="w-full md:w-1/2 object-cover mb-4 md:mb-0" />
                                <div className="md:ml-6 text-left">
                                    <p className="text-black font-bold text-lg tracking-wider">
                                        STUDY BUDDIES
                                    </p>
                                    <p className="text-black mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <ul className="list-disc ml-4 mt-4 text-black space-y-2">
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Abs consectetur adipiscing elit, sed do eiusmod tempor</li>
                                        <li>Incididunt ut labore et dolore magna ali.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <footer className="bg-[#fee270] w-full h-[250px]">
                <Footer />
            </footer>
        </>
    );
};

export default StudyHours;