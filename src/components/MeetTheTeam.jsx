import { useEffect, useRef } from "react";
import { useIsVisible } from "./useIsVisible"; // Adjust the path as necessary

const MeetTheTeam = () => {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div className="bg-white text-black pt-[100px] pb-[100px] min-h-[250px] flex flex-col justify-center items-center">
            <div className={"text-center w-[951px] h-[284px] "}>
                <div ref={ref} className={`transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <h2 className="text-[#7D7D7D] text-2xl uppercase mb-2 font-karla font-bold tracking-[0.12em] leading-[28.06px] ">Meet the Team</h2>
                    <h1 className="text-black text-5xl font-bold mb-4 font-karla leading-[52px] pt-[44px]">Our <span className="text-[#FFA523]">Board</span> Members</h1>
                    <p className="text-base max-w-3xl mx-auto pt-[36px]">
                        Our board members play a vital role in making FUSION a vibrant and connected community. They facilitate internal programs, host social events, manage athletic activities through IMs, and much more. Joining the board is a fantastic opportunity to hone your leadership skills in a supportive environment. Each year, our board members come up with a creative name for their class. For the 2024-2025 school year, we proudly present: Bread Board!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MeetTheTeam;
