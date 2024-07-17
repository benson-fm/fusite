import React, { useRef, useEffect } from 'react';
import LinkedIn from '../images/LinkedIn.png';

const ProfilePopout = ({ isOpen, onClose, profile }) => {
    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#FFFFFF] bg-opacity-50">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div ref={modalRef} className="relative bg-white p-8 rounded-lg shadow-lg max-w-[984px] mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 items-center lg:items-start">
                    <img
                        src={profile.photoUrl}
                        alt={`${profile.name}'s photo`}
                        className="w-[311.54px] h-[450px] object-cover mb-4 lg:mb-0 lg:mr-8"
                    />
                    <div>
                        <p className="text-[#FFA523] mb-4 uppercase font-semibold leading-[18.7px] text-base tracking-[0.12em]">
                            {profile.position}
                        </p>
                        <h3 className="text-[40px] font-karla font-bold leading-[46.76px] text-black">
                            {profile.name}
                        </h3>
                        <p className="text-[14px] text-[#7D7D7D] mb-4 font-semibold font-karla tracking-[0.12em] leading-[16.37px] pt-[10px]">
                            {profile.pronouns} | {profile.year} | {profile.major}
                        </p>
                        <h4 className="text-[16px] uppercase mb-2 font-semibold font-karla tracking-[0.12em] leading-[18.7px] pt-[10px]">
                            About Me
                        </h4>
                        <p className="mb-4 font-inter leading-[30px] font-[400] text-[14px]">{profile.about}</p>
                        <h4 className="text-[16px] uppercase mb-2 font-semibold font-karla tracking-[0.12em] leading-[18.7px] pt-[10px]">
                            Contact
                        </h4>
                        <div className="flex items-center mb-2">
                            <a href={profile.linkedin} target="_blank" className="mr-2">
                                <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                            <p className="text-[14px] text-black mb-4 font-semibold font-karla tracking-[0.12em] leading-[16.37px] pt-[10px]">
                                {profile.contact}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePopout;
