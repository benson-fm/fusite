import ProfileCard from './ProfileCard';
import ProfilePopout from './ProfilePopout';
import React, { useState } from 'react';
import HalfGear from '../images/HalfGear.png';

import CoICS1 from '../images/CoICS1.png';
import CoEngineering1 from '../images/CoEngineering1.png';

import CoAthletics1 from '../images/CoAthletics1.png';

import CoAcademics2 from '../images/CoAcademics2.png';
import CoPublicity1 from '../images/CoPublicity1.png';

import CoNetworking1 from '../images/CoNetworking1.png';
import CoNetworking2 from '../images/CoNetworking2.png';

import CulturalDirector from '../images/CulturalDirector.png';
import GrayPlaceholder from '../images/GrayPlaceholder.png';

const teamMembers = [
    {
        name: 'Benson Manzano',
        position: 'Co-ICS Project Director',
        photoUrl: CoICS1,
        pronouns: 'HE/HIM',
        year: '3RD YEAR',
        major: 'INFORMATICS',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Jerome Manarang',
        position: 'Co-ICS Project Director',
        photoUrl: GrayPlaceholder,
        pronouns: 'SHE/HER',
        year: '3RD YEAR',
        major: 'COMPUTER SCIENCE',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Luigi Lozano',
        position: 'Co-Engineering Project Director',
        photoUrl: CoEngineering1,
        pronouns: 'HE/HIM',
        year: '4TH YEAR',
        major: 'MECHANICAL ENGINEERING',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Dommenick Lacuata',
        position: 'Co-Engineering Project Director',
        photoUrl: GrayPlaceholder,
        pronouns: 'HE/HIM',
        year: '4TH YEAR',
        major: 'CIVIL ENGINEERING',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Maleyna Isabelle Aquino',
        position: 'Co-Athletics Director',
        photoUrl: CoAthletics1,
        pronouns: 'SHE/HER',
        year: '3RD YEAR',
        major: 'KINETOLOGY',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Arlaghn Cayanan',
        position: 'Co-Athletics Director',
        photoUrl: GrayPlaceholder,
        pronouns: 'HE/HIM',
        year: '3RD YEAR',
        major: 'SPORTS MEDICINE',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Janice Ho',
        position: 'Co-Academics Director',
        photoUrl: GrayPlaceholder,
        pronouns: 'SHE/HER',
        year: '3RD YEAR',
        major: 'BIOLOGY',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Vivienne Catarroja',
        position: 'Co-Academics Director',
        photoUrl: CoAcademics2,
        pronouns: 'HE/HIM',
        year: '3RD YEAR',
        major: 'PHYSICS',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Marcus Cayas',
        position: 'Co-Publicity Director',
        photoUrl: CoPublicity1,
        pronouns: 'HE/HIM',
        year: '4TH YEAR',
        major: 'MARKETING',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Audrey Estrella',
        position: 'Co-Publicity Director',
        photoUrl: GrayPlaceholder,
        pronouns: 'HE/HIM',
        year: '4TH YEAR',
        major: 'ADVERTISING',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Noah Tizon',
        position: 'Co-Networking Director',
        photoUrl: CoNetworking1,
        pronouns: 'HE/HIM',
        year: '4TH YEAR',
        major: 'BUSINESS',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Andrew Hauber',
        position: 'Co-Networking Director',
        photoUrl: CoNetworking2,
        pronouns: 'HE/HIM',
        year: '4TH YEAR',
        major: 'INFORMATION TECHNOLOGY',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'FirstName LastName',
        position: 'Position',
        photoUrl: GrayPlaceholder,
        pronouns: 'THEY/THEM',
        year: '? YEAR',
        major: '???',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'FirstName LastName',
        position: 'Position',
        photoUrl: GrayPlaceholder,
        pronouns: 'THEY/THEM',
        year: '? YEAR',
        major: '???',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'FirstName LastName',
        position: 'Position',
        photoUrl: GrayPlaceholder,
        pronouns: 'THEY/THEM',
        year: '? YEAR',
        major: '???',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'FirstName LastName',
        position: 'Position',
        photoUrl: GrayPlaceholder,
        pronouns: 'THEY/THEM',
        year: '? YEAR',
        major: '???',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Gavin Bautista',
        position: 'Cultural Director',
        photoUrl: CulturalDirector,
        pronouns: 'HE/HIM',
        year: '3RD YEAR',
        major: 'CULTURAL STUDIES',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
];

const Appointed = () => {
    const [selectedProfile, setSelectedProfile] = useState(null);

    return (
        <div className="bg-white text-black py-16">
            <div className="text-center mb-8">
                <div className='flex items-center justify-center mb-2'>
                    <img src={HalfGear} alt="Half Gear" className="h-16 justify-center" />
                </div>
                <div className="flex items-center justify-center mb-2">
                    <div className="border-t border-[#FAC80A] w-[115px] border-[2px] mr-2"></div>
                    <h2 className="text-black text-[32px] font-karla font-bold uppercase leading-[37.41px] tracking-[0.12em]">Appointed</h2>
                    <div className="border-t border-[#FAC80A] w-[115px] border-[2px] ml-2"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] justify-items-center pb-[20px]">
                {teamMembers.map((member, index) => (
                    <ProfileCard className="h-[416px] w-[288px]"
                        key={index}
                        name={member.name}
                        position={member.position}
                        photoUrl={member.photoUrl}
                        onClick={() => setSelectedProfile(member)}
                    />
                ))}
            </div>
            {selectedProfile && (
                <ProfilePopout
                    isOpen={!!selectedProfile}
                    onClose={() => setSelectedProfile(null)}
                    profile={selectedProfile}
                />
            )}
        </div>
    );
};

export default Appointed;
