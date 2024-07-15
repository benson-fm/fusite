import Footer from "../components/Footer";
import MeetTheTeam from "../components/MeetTheTeam";
import Executive from "../components/Executive";
import Appointed from "../components/Appointed";
const Board = () => {
    return (
        <>
            <div>
                <MeetTheTeam />
                <Executive />
                <Appointed />
            </div>
            <Footer />
        </>

    );
}

export default Board;