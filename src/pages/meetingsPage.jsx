import FusionLogo from '../assets/fusionLogo.png';
import PlaceholderPic from '../assets/placeholderPic.png';

export function MeetingsPage() {
    return (
        <div style={{
            display: 'flex',
            width: '1275px',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            gap: '124px 231px',
            flexWrap: 'wrap',
            margin: 'auto',
            padding: '2px',
        }}>
            <div className="flex flex-col w-full h-screen bg-white">
                <div className="flex w-full justify-end h-1/6">
                    <div className="flex flex-row h-14 gap-x-4 pr-7 pt-5">
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-start h-5/6 pt-10 px-20">
                    <h1 style={{ fontSize: '40px', letterSpacing: '8px'}} className="font-inter font-medium tracking-wider">GENERAL MEETINGS</h1>
                    <p style={{ fontSize: '20px', margin: '40px'}} className="font-inter font-normal mt-10 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="relative flex flex-col items-center justify-start h-5/6">
                    <h1 style={{ fontSize: '35px', letterSpacing: '8px'}} className="font-inter font-medium tracking-wider">TERM XX - XX</h1>
                    {/* eventually make into drop down */}
                    <h2 style={{ fontSize: '20px', letterSpacing: '8px'}} className="font-inter font-medium mt-10 text-center">
                        FALL&nbsp;&nbsp;&nbsp;&nbsp;WINTER&nbsp;&nbsp;&nbsp;&nbsp;SPRING</h2>
                        <div className="divider divider-neutral" style={{ width: '50%', margin: 'auto', marginBottom:'0px', marginTop: '5px' }}></div>
                </div>
            </div>
                <div className="absolute left-0 overflow-hidden w-full h-full" style={{ top: '300x', left: '-325px' }}>
                    <img src={FusionLogo} alt="Fusion Logo"
                        style={{ width: '600px', height: '550px', transform: 'rotate(-45.0deg)', opacity: 1 }}
                        className="object-cover" />
                </div>
                <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-8 mt-2">
                    <img src={PlaceholderPic} alt="Placeholder Picture" className="w-640 h-362 object-cover flex-shrink-0 mr-10" />
                    <div className="ml-10">
                        <h1 style={{ fontSize: '40px', letterSpacing: '8px'}} className="font-inter font-medium tracking-wider">Insert Title Here</h1>
                        <h2 style={{ fontSize: '24px', letterSpacing: '2px'}} className="font-inter font-normal text-left">
                            XX/XX/XXXX&nbsp;&nbsp;PILLAR
                        </h2>
                        <p style={{ fontSize: '20px' }} className="font-inter font-normal mt-5 text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                            in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-8 mt-2">
                    <img src={PlaceholderPic} alt="Placeholder Picture" className="w-640 h-362 object-cover flex-shrink-0 mr-10" />
                    <div className="ml-10">
                        <h1 style={{ fontSize: '40px', letterSpacing: '8px'}} className="font-inter font-medium tracking-wider">Insert Title Here</h1>
                        <h2 style={{ fontSize: '24px', letterSpacing: '2px'}} className="font-inter font-normal text-left">
                            XX/XX/XXXX&nbsp;&nbsp;PILLAR
                        </h2>
                        <p style={{ fontSize: '20px' }} className="font-inter font-normal mt-5 text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                            in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-8 mt-2">
                    <img src={PlaceholderPic} alt="Placeholder Picture" className="w-640 h-362 object-cover flex-shrink-0 mr-10" />
                    <div className="ml-10">
                        <h1 style={{ fontSize: '40px', letterSpacing: '8px'}} className="font-inter font-medium tracking-wider">Insert Title Here</h1>
                        <h2 style={{ fontSize: '24px', letterSpacing: '2px'}} className="font-inter font-normal text-left">
                            XX/XX/XXXX&nbsp;&nbsp;PILLAR
                        </h2>
                        <p style={{ fontSize: '20px' }} className="font-inter font-normal mt-5 text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                            in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-8 mt-2">
                    <img src={PlaceholderPic} alt="Placeholder Picture" className="w-640 h-362 object-cover flex-shrink-0 mr-10" />
                    <div className="ml-10">
                        <h1 style={{ fontSize: '40px', letterSpacing: '8px'}} className="font-inter font-medium tracking-wider">Insert Title Here</h1>
                        <h2 style={{ fontSize: '24px', letterSpacing: '2px'}} className="font-inter font-normal text-left">
                            XX/XX/XXXX&nbsp;&nbsp;PILLAR
                        </h2>
                        <p style={{ fontSize: '20px' }} className="font-inter font-normal mt-5 text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                            in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
    <div className="absolute" style={{ top: '0', right: '-300px', width: '600px' }}>
        <img src={FusionLogo} alt="Fusion Logo"
            style={{ width: '100%', height: 'auto', transform: 'rotate(-45deg)', opacity: 1 }}
            className="object-cover" />
    </div>
</div>
        </div>

            
    );
}
