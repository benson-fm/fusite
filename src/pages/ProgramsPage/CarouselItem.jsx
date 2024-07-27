import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


const CarouselItem = ({bg, title, description, link}) => {
    return(
        <div
        className="bg-cover p-12 text-black h-[928px] w-full content-end"
        style={{ backgroundImage: `url(${bg}) ` }}
        >
            <div className="px-24 py-12">
                <div className="text-8xl">{title}</div>
                <br/>
                <div className="text-xl">{description}</div>
                <br/>
                <button onChange={useNavigate(link)} className="bg-[#fac80a] hover:bg-yellow-500 text-black font-bold py-2 px-6">
                    LEARN MORE
                </button>           
            </div>
        </div>
    );
};

CarouselItem.propTypes = {
    bg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
};


export default CarouselItem;
