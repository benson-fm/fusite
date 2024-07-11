import GrayBlock from './GrayBlock';
import OrangeWhiteBlock from './OrangeWhiteBlock';
import OurStorySection from './OurStorySection';

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
        </div>
    );
}

export default Home;