import './FusionInfo.css'; // Import the CSS file for styling
import OurStorySection from './OurStorySection';

const Home = () => {
    return (
        <div className="home w-full mx-auto text-center">
            {/*Our Story*/}
            <OurStorySection></OurStorySection>
        </div>
    );
}

export default Home;