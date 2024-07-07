import FUSION from '../assets/FUSION.png'
import { useNavigate } from 'react-router-dom';


function renderTitle(title,subtitle,homeNav){
    if(homeNav){
        return(
        <div className="justify-center content-center text-center justify-items-center space-y-12 p-24">
            <div className="text-2xl ">
                EST. 2001
            </div>
            <div className="text-8xl">
                WELCOME TO
                <div className="font-bold">
                    FUSION
                </div>
            </div>
            {/* Not sure where to route this to yet, just useless for now */}
            <button className="bg-[#fac80a] hover:bg-yellow-500 text-black font-bold py-2 px-6">
                LEARN MORE
            </button>
        </div>
        );
    } else {
        return(
        <div className="justify-center content-center text-center justify-items-center space-y-12 p-24">
            <div className="text-8xl font-thin">
                {title}
            </div>
            <div className="text-2xl ">
                {subtitle}
            </div>
        </div>
        );
    }
}

export function Navbar({bg, title, subtitle, homeNav = false}){
    const navigate = useNavigate();
    const handleHome = () => {
        navigate("/");
    };
    const handleAbout = () => {
        navigate("/about");
    };
    const handleProjects = () => {
        navigate("/projects");
    };
    const handleBoard = () => {
        navigate("/board");
    };
    const handlePrograms = () => {
        navigate("/programs");
    };
    const handleFusionCon = () => {
        navigate("/fusioncon");
    };
    return(
        <>
        <div className="bg-cover p-12 text-white" style={{ backgroundImage: `url(${bg})` }}>
            <div className="grid grid-cols-2 items-center">
                <img className="justify-self-start" src={FUSION} width={200}/>
                <div className="flex justify-self-end space-x-16 text-xl">
                    <button onClick={handleHome}>
                        HOME
                    </button>
                    <button onClick={handleAbout}>
                        ABOUT
                    </button>
                    <button onClick={handleProjects}>
                        PROJECTS
                    </button>
                    <button onClick={handleBoard}>
                        BOARD
                    </button>
                    <button onClick={handlePrograms}>
                        PROGRAMS
                    </button>
                    <button onClick={handleFusionCon}>
                        FUSIONCON
                    </button>
                </div>
            </div>
            {renderTitle(title,subtitle,homeNav)}
        </div>
        </>
    );
}