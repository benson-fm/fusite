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
        year: '2ND YEAR',
        major: 'COMPUTER SCIENCE',
        about: 'Hey! My name is Benson Manzano, and as one of your ICS Project Directors I oversee the Fusion ICS Project (FIP). I manage project logistics, including team organization, project content, and advisement. My goal is to enhance inclusivity for our ICS members and strengthen our connection with other Alyansa organizations. I also enjoy going on hikes and spending time with friends!',
        contact: 'BFMANZAN@UCI.EDU',
        linkedin: '...'
    },
    {
        name: 'Jerome Manarang',
        position: 'Co-ICS Project Director',
        photoUrl: GrayPlaceholder,
        pronouns: 'HE/HIM',
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
        year: '3TH YEAR',
        major: 'INFORMATICS',
        about: 'Hi! My name is Luigi Lozano, and as one of your Project Engineering Directors, I help lead this year\'s engineering project. My goal under this position is to provide members the academic and professional experience they deserve to have, enabling an environment that members can feel comfortable in. ',
        contact: 'FRANCILL@UCI.EDU',
        linkedin: '...'
    },
    {
        name: 'Dommenick Lacuata',
        position: 'Co-Engineering Project Director',
        photoUrl: GrayPlaceholder,
        pronouns: 'HE/HIM',
        year: '2ND YEAR',
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
        year: '2ND YEAR',
        major: 'COGNITIVE SCIENCES',
        about: 'Hi! I\'m Maleyna Aquino, one of your Athletics Directors at FUSION. I prioritize the physical and mental well-being of members through programs like Fitness, Nutrition, and De-stress Workshops, along with the FUSION Intramural teams. I aim to support members in achieving their health goals, enhancing their lives within and beyond FUSION. Outside of my role, I find joy in outdoor activities and powerlifting. ',
        contact: 'MIAQUINO@UCI.EDU',
        linkedin: '...'
    },
    {
        name: 'Arlaghn Cayanan',
        position: 'Co-Athletics Director',
        photoUrl: GrayPlaceholder,
        pronouns: 'HE/HIM',
        year: '2ND YEAR',
        major: 'COMPUTER SCIENCE',
        about: 'Hello! My name is Arlaghn Cayanan, and I am one of your Co-Athletic Directors. I oversee the physical and emotional wellbeing of FUSION members! My goals for the year are to help members achieve their fitness goals, have an outlet to relax and destress, and meet and connect with others in a welcoming environment. Outside of my role I like going to the gym, playing basketball and volleyball.',
        contact: 'APCAYANA@UCI.EDU',
        linkedin: '...'
    },
    {
        name: 'Janice Ho',
        position: 'Co-Academics Director',
        photoUrl: GrayPlaceholder,
        pronouns: 'SHE/HER',
        year: '2ND YEAR',
        major: 'COMPUTER ENGINEERING',
        about: 'I’m Janice Ho and I am thrilled to serve as one of your Co-Academics Directors! We aim to create a welcoming and supportive environment that encourages your academic and professional growth. Through engaging workshops and study hours, our goal is to help all members refine their technical skills and provide reliable, academic resources. I also enjoy thrifting, discovering new music, and cafe hopping!',
        contact: 'JANICEH6@UCI.EDU',
        linkedin: '...'
    },
    {
        name: 'Vivienne Catarroja',
        position: 'Co-Academics Director',
        photoUrl: CoAcademics2,
        pronouns: 'SHE/HER',
        year: '3RD YEAR',
        major: 'INFORMATICS',
        about: 'Hi! My name is Vivienne Catarroja and I\'m one of your Academics directors. I help host FUSION study hours, organize workshops, collaborate with the IVP with the mentorship program, and provide academic support. I plan to uphold the Academics pillar and offer guidance to everyone in any way that I can. Other than that, I enjoy listening to music, playing The Sims, and spontaneous hangouts!',
        contact: 'VCATARRO@UCI.EDU',
        linkedin: '...'
    },
    {
        name: 'Marcus Cayas',
        position: 'Co-Publicity Director',
        photoUrl: CoPublicity1,
        pronouns: 'ANY PRONOUNS',
        year: '4TH YEAR',
        major: 'COGNITIVE SCIENCES',
        about: 'Hello everyone! My name is Marcus Cayas, and I am one of your Publicity Directors this year. As a Publicity Director, I am responsible for making sure that all FUSION events are well-publicized as well as maintaining FUSION\'s public image. Other than designing banners and doodling on photos, we also design cool merch and assist with media intake. Outside of my role, I enjoy bowling and ripstik-ing!',
        contact: 'MCAYAS@UCI.EDU',
        linkedin: '...'
    },
    {
        name: 'Audrey Estrella',
        position: 'Co-Publicity Director',
        photoUrl: GrayPlaceholder,
        pronouns: 'SHE/HER',
        year: '2ND YEAR',
        major: '...',
        about: '...',
        contact: '...',
        linkedin: '...'
    },
    {
        name: 'Noah Tizon',
        position: 'Co-Networking Director',
        photoUrl: CoNetworking1,
        pronouns: 'HE/HIM',
        year: '2ND YEAR',
        major: 'INFORMATICS',
        about: 'Hello! My name is Noah Tizon, and as one of your Networking Directors, I oversee the professional development of FUSION members.I organize industry panels, workshops, and networking to connect club members with engineering and technology professionals, enhancing our organization’s professional growth. Outside of my role, I enjoy playing bass guitar and reading!',
        contact: 'NTIZON@UCI.EDU',
        linkedin: '...'
    },
    {
        name: 'Andrew Hauber',
        position: 'Co-Networking Director',
        photoUrl: CoNetworking2,
        pronouns: 'HE/HIM',
        year: '4TH YEAR',
        major: 'INFORMATION TECHNOLOGY',
        about: 'Hi, my name is Andrew Hauber and I am glad to be one of FUSION\'s Networking Directors for this year. As a Networking Director, I plan on improving FUSION\'s connection to our alumni network and hosting professional development workshops that provide members with the resources necessary to help everyone achieve their professional goals. Apart from that, I enjoy basketball, hip-hop, and philosophy.',
        contact: 'AHAUBER@UCI.EDU',
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
        year: '2ND YEAR',
        major: 'MECHANICAL ENGINEERING',
        about: 'Hello! I’m Gavin Bautista and I am FUSION’s cultural director. I prioritize enhancing our organization\'s Cultural Pillar, guiding members in understanding cultural identity. I aim to foster a welcoming environment by sharing Filipino culture through workshops and resources, including history, traditions, languages, and more. Collaborating with the Alyansa Board, I seek to strengthen connections with sister organizations.',
        contact: 'GCBAUTIS@UCI.EDU',
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
