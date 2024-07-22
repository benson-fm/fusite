import Footer from '../../components/Footer';
import ProjectNavbar from './ProjectNavbar';
import projectBGImage from '../../images/projectsbackground.png';
import WhatFusionOffers from './WhatFusionOffers';

const Projects = () => {
    return (
        <div className="home w-full mx-auto text-center">
            <ProjectNavbar bg={projectBGImage} title="PROJECTS" subtitle="FIP and FEP" homeNav={true} className="z-20" />
            <WhatFusionOffers className="relative z-10" /> {/* Ensure this has a lower z-index */}
            <Footer className="relative z-20" /> {/* Ensure Footer has a higher z-index */}
            <Footer className="relative z-20" />
        </div>
    );
}

export default Projects;
