// eslint-disable-next-line react/prop-types
const ProfileCard = ({ name, position, photoUrl, onClick }) => {
    return (
        <div className="flex flex-col items-center cursor-pointer pb-[20px]" onClick={onClick}>
            <img src={photoUrl} alt={`${name}'s photo`} className="w-[389px] h-[561.89px] object-cover mb-4" />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-orange-500">{position}</p>
        </div>
    );
};

export default ProfileCard;