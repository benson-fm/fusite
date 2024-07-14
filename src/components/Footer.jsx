import LinkedIn from "../images/LinkedIn.png"
import Instagram from "../images/Instagram.png"
import Facebook from "../images/Facebook.png"
import Discord from "../images/Discord.png"

const Footer = () => {
    return (
        <footer className="bg-[#FFE171] text-black pt-16 pb-12 px-12 border-4 border-black min-h-[250px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex space-x-8 text-xl tracking-[0.2em]">
                        <p>CONTACT US</p>
                        <p>FUSION@UCI.EDU</p>
                    </div>
                    <div className="flex mt-4 space-x-10">
                        <img src={Instagram} alt="Instagram" className="w-8 h-8" />
                        <img src={Discord} alt="Discord" className="w-10 h-8" />
                        <img src={Facebook} alt="Facebook" className="w-8 h-8" />
                        <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />

                    </div>
                </div>
                <nav>
                    <ul className="flex space-x-10 text-xl tracking-[0.2em]">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">ABOUT</a></li>
                        <li><a href="/">MEETINGS</a></li>
                        <li><a href="/">BOARD</a></li>
                        <li><a href="/">PROGRAMS</a></li>
                        <li><a href="/">FUSIONCON</a></li>
                    </ul>

                </nav>
            </div>
            <div>
                <p className="text-xs">© Copyright FUSION 2024</p>
            </div>
        </footer>
    )
}

export default Footer