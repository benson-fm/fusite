import TransparentSunGear from '../../assets/TransparentSunGear.png';
const ProgramCard  = ({title, description}) => {
    return(
        <div className="bg-black text-white w-full h-[500px] px-8 py-8 text-center z-50">
            <div className="text-2xl py-10 tracking-widest">{title}</div>
            <div className="text-xl">{description}</div>
            <br/>
            <button className="bg-[#fac80a] hover:bg-yellow-500 text-black font-bold py-2 px-6">
                    LEARN MORE
            </button>   
        </div>
    );
}

const ProgramCards = ({Programs}) => {
    let cards = []
    Programs.forEach((program, index) => {
        cards.push(
            <ProgramCard title={program.title} description={program.description}/>
        )
    });
    return(
        <div className="bg-cover bg-white grid grid-cols-3 grid-rows-3 gap-16 py-5 px-80" style={{ backgroundImage: `url(${TransparentSunGear}) `}}>
            {cards}
        </div>
    )
}

export default ProgramCards;