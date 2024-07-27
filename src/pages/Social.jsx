import FusionFriday from '../assets/fusionFriday.png';
import Ftek from '../assets/ftek.png';
import BlueDiscord from '../assets/blueDiscord.png';
import Valorant from '../assets/valorant.png';
import Overwatch from '../assets/overwatch.png';
import League from '../assets/league.png';

export default function Social() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white p-8">
            <div className="max-w-[1088px] w-full flex flex-col justify-center items-center gap-10 mt-20">
                <h1 className="text-black text-center font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                    FU-SOCIAL PROGRAMS
                </h1>
                <p className="text-black text-center font-inter text-base leading-7 px-36">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
            </div>
            <div className="max-w-[1088px] w-full flex flex-col justify-center items-center gap-10 mt-60">
                <h1 className="text-black text-center font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                    FUSION FRIDAYS
                </h1>
                <p className="text-black text-center font-inter text-base leading-7 px-36">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
            </div>
            <div className="flex flex-row mt-40 gap-5">
                <img src={FusionFriday} alt={`Fusion Friday`} className="w-307 h-307 object-cover flex-shrink-0 mt-10"/>
                <img src={FusionFriday} alt={`Fusion Friday`} className="w-307 h-307 object-cover flex-shrink-0 mb-10"/>
                <img src={FusionFriday} alt={`Fusion Friday`} className="w-307 h-307 object-cover flex-shrink-0 mt-10"/>
                <img src={FusionFriday} alt={`Fusion Friday`} className="w-307 h-307 object-cover flex-shrink-0 mb-10"/>
                <img src={FusionFriday} alt={`Fusion Friday`} className="w-307 h-307 object-cover flex-shrink-0 mt-10"/>
            </div>
            <div className="max-w-[1088px] w-full flex flex-col justify-center items-center gap-10 mt-60">
                <h1 className="text-black text-center font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                    FTEK
                </h1>
                <p className="text-black text-center font-inter text-base leading-7 px-36">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>         
            </div>
            <div className="flex flex-row mt-40 gap-20 overflow-hidden justify-center">
                <img src={Ftek} alt={`Ftek`} className="w-857 h-510 object-cover flex-shrink-0 mt-10"/>
                <img src={Ftek} alt={`Ftek`} className="w-857 h-510 object-cover flex-shrink-0 mt-10"/>
                <img src={Ftek} alt={`Ftek`} className="w-857 h-510 object-cover flex-shrink-0 mt-10"/>
            </div>
            <div className="max-w-[1088px] w-full flex flex-col justify-center items-center gap-10 mt-60">
                <h1 className="text-black text-center font-inter text-4xl font-medium" style={{ letterSpacing: '8px' }}>
                    GAMING
                </h1>
            </div>
            <div className='flex flex-col items-center w-[605px] h-[290.81px]'>
                <img src={BlueDiscord} alt='Blue Discord' className="w-[86.34px] h-[86.34px] object-cover flex-shrink-0 mt-20" />
                <h1 className="text-black text-center font-inter text-3xl font-medium mt-10" style={{ letterSpacing: '8px' }}>
                    DISCORD
                </h1>
                <p className="text-black text-center font-inter text-base leading-7 px-20 mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>
            </div>
            <div className='flex flex-row items-center w-1274 h-252.37 gap-20'>
                <img src={League} alt={`League`} className="w-306 h-252.31 object-cover flex-shrink-0 mt-40"/>
                <img src={Overwatch} alt={`Overwatch`} className="w-306 h-252.37 object-cover flex-shrink-0 mt-40"/>
                <img src={Valorant} alt={`Valorant`} className="w-306 h-247 object-cover flex-shrink-0 mt-40"/>
            </div>
            <h1 className="text-black text-center font-inter text-3xl font-medium mt-40" style={{ letterSpacing: '8px' }}>
                ...AND MORE!
            </h1>
            <div className='mt-40'></div>
        </div>
    );
}