import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import BWHD from "../../../assets/BWHD.png"
import BWHDBG from "../../../assets/BWHDBG.png"
import HeaderBG from "../../../assets/FundraisingHeader.jpg"
import Testimonial from "../../../components/Testimonial"
import TalkingIcon from "../../../assets/TalkingIcon.png"
import DollarSign1 from "../../../assets/DollarSign1.png"
import DollarSign2 from "../../../assets/DollarSign2.png"
import Hexagon1 from "../../../assets/Hexagon1.png"
import Hexagon2 from "../../../assets/Hexagon2.png"



const Fundraising = () => {
    return(
        <>
        <Navbar title="FUNDRAISING" subtitle="PROGRAMS" bg={HeaderBG}/>
        <div className="my-40 mx-72 justify-center text-center">
            <div className="font-semibold text-5xl">
                How do we <span className="text-[#FFA523] ">Fundraise</span>?
            </div>
            <hr className="w-48 h-1 mx-auto my-4 bg-[#FAC80A] my-10 border-0 rounded"/>
            <div>
                Bacon-Wrapped Hot Dogs (BWHD): FUSION’s most popular on-campus fundraiser. Come find us on Ring Road 
                throughout the quarter to buy a Bacon-Wrapped Hot Dog or stop by for good vibes!
                <br/>
                <br/>
                Off-Campus Fundraisers: These include fundraisers with off-campus restaurants such as Cha, 7Leaves, Wingstop, and Jollibee.
                 Off-campus fundraisers are a great way to meet and hang out with members in FUSION!
            </div>
        </div>
        <div className="bg-no-repeat bg-cover bg-center flex justify-center px-72"   
        style={{ backgroundImage: `url(${BWHDBG})` }}>
            <img src={BWHD}/>
        </div>
        <div className="relative bg-[#FFF5EB] py-36 -z-10">
            <img className="absolute bottom-0 " src={DollarSign1} width={200}/>
            <img className="absolute top-0 right-0" src={DollarSign2} width={200}/>
            <img className="overflow-hidden absolute -bottom-96 " src={Hexagon1} width={950}/>
            <img className="overflow-hidden absolute -bottom-72 right-0 " src={Hexagon2} width={1000}/>
            <div className="relative z-20 space-y-16">
                <div className="grid justify-items-center space-y-4">
                    <img src={TalkingIcon} width={96}/>
                    <div className="text-5xl text-center font-medium">
                    A Message from Our <br/>
                    <span className="text-[#FFA523]">Fundraising Directors</span>
                    </div>
                </div>
                <div className="space-y-4">
                    <Testimonial 
                        Name="Full Name" 
                        Quote="“Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi anal penis.”"
                        Position="Position"
                        Image={BWHD}
                        />
                    <Testimonial 
                        Name="Full Name" 
                        Quote="“Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi anal penis.”"
                        Position="Position"
                        Image={BWHD}
                        Mirrored={true}
                        />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Fundraising