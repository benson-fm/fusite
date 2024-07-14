import GrayBlock from './GrayBlock';
import OrangeWhiteBlock from './OrangeWhiteBlock';
import OurStorySection from './OurStorySection';
import JoinFusionBlock from './JoinFusionBlock';

const Home = () => {
    return (
        <div className="home w-full mx-auto text-center">
            {/*Our Story*/}
            <OurStorySection></OurStorySection>
            {/*Orange and White Info Block*/}
            <OrangeWhiteBlock></OrangeWhiteBlock>
            {/*Gray Info Block*/}
            <GrayBlock></GrayBlock>
            {/*Orange and White Info Block*/}
            <OrangeWhiteBlock></OrangeWhiteBlock>
            {/*Join Fusion Block*/}
            <JoinFusionBlock></JoinFusionBlock>
        </div>
    );
}

export default Home;