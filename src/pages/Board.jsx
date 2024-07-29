import Footer from "../components/Footer";
import MeetTheTeam from "../components/MeetTheTeam";
import Executive from "../components/Executive";
import Appointed from "../components/Appointed";
const Board = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <MeetTheTeam />
                <Executive />
                <Appointed className='pt-[20px]'/>
            </div>
            <Footer />
        </>

    );
}

export default Board;