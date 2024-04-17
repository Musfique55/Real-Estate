import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";
const Team = ({stuff}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleOut = () => {
        setIsHovered(false);
    };
    
    return (
        <div className="team-card overflow-hidden bg-[#F7F5EC] my-12 relative rounded-xl" onMouseOver={handleHover} onMouseOut={handleOut}>
            <div className=" p-12 space-y-4 flex flex-col justify-center items-center">
                <div className={`flex justify-between items-center ${isHovered ? 'ease-linear duration-500 border-8 border-pink-700 rounded-full p-2 w-fit' : ''}`}>
                    <img src={stuff.image} alt="" className={`object-cover rounded-full h-16 w-16 ${isHovered ? 'duration-500 ease-linear border-8 border-white' : ''}`} />
                </div>
                <h3 className="text-2xl font-semibold">{stuff.name}</h3>
            </div>
            <div className={`bg-pink-600 absolute text-lg flex justify-center socials ${isHovered ? 'bottom-0'  : '-bottom-16'} py-2 px-4 gap-6 text-white w-full cursor-pointer`}>
                <MdOutlineFacebook></MdOutlineFacebook>
                <FaSquareXTwitter></FaSquareXTwitter>
                <FaInstagram></FaInstagram>
            </div>
        </div>
    );
};


Team.propTypes = {
    stuff : PropTypes.object
}
export default Team;