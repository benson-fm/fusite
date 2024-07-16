import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import People from '../../assets/people.png';
import ProgramCarousel from './ProgramCarousel';
import ProgramCards from './ProgramCards';
import PersonPlaceholder from '../../assets/PersonPlaceholder.png'

const ProgramSlideInfo = [
    {title:"Mentorship",
     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     link:"/programs",
     bg: People
    },
    {title:"Title",
     description:"description",
     link:"/programs"
    },
];

const ProgramCardInfo = [
    {title:"MENTORSHIP",
     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     link:"/programs",
     bg: People
    },
    {title:"INTERNSHIP",
     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     link:"/programs"
    },
    {title:"WORKSHOPS",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:"/programs"
    },
    {title:"FUNDRAISING",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:"/programs"
    },
    {title:"ALUMNI",
     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     link:"/programs"
    },
    {title:"FAMILY",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:"/programs"
    },
    {title:"MENTORSHIP",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:"/programs"
    },
    {title:"FU-FIT",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:"/programs"
    },
    {title:"SOCIAL",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link:"/programs"
    },
];

const Programs = () => {
    return(
    <>
        <Navbar title="PROGRAMS" bg={People}/>
        <div className="bg-white text-center py-56 px-60">
            <div className="text-4xl text-bold">
                OUR PROGRAMS
            </div>
            <br/>
            <div className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
        <ProgramCarousel Programs= {ProgramSlideInfo}/>
        <div className="text-center text-4xl py-28 tracking-widest">
            OUR <span className="text-[#FBC80C]">FUSION</span> PROGRAMS
        </div>
        <ProgramCards Programs={ProgramCardInfo}/>
        <div className="text-center py-48 px-80 space-y-32">
            <div className="text-6xl tracking-widest font-bold">
                WORDS OF
            </div>
            <div className="flex">
                <img src={PersonPlaceholder} width={280} />
                <div className="grid grid-cols-1 grid-rows-2 text-3xl">
                    <div>
                    “Lorem ipsum dolor sit amet, consectetur asim adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad mini venia, nostrud exercitation laboris nisi.”
                    </div>
                    <div className="self-end">
                    - Lorem Ipsum <span className="italic">Member Position</span>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="grid grid-cols-1 grid-rows-2 text-3xl">
                    <div>
                    “Lorem ipsum dolor sit amet, consectetur asim adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad mini venia, nostrud exercitation laboris nisi.”
                    </div>
                    <div className="self-end">
                    - Lorem Ipsum <span className="italic">Member Position</span>
                    </div>
                </div>
                <img src={PersonPlaceholder} width={280} />
            </div>
        </div>
        <Footer/>
    </>
    );
}

export default Programs