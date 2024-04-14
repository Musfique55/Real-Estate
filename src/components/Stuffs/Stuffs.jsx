import PropTypes from "prop-types"
import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Stuffs = ({stuff}) => {
    return (
        <div className="space-y-4">
            <img src={stuff.image} alt="" className="rounded-2xl w-full object-cover"/>
            <p className="text-xl font-semibold">{stuff.name}</p>
            <div className="flex gap-5 items-center text-xl">
                <MdOutlineFacebook></MdOutlineFacebook>
                <FaSquareXTwitter></FaSquareXTwitter>
                <FaInstagram></FaInstagram>
            </div>
        </div>
    );
};

Stuffs.propTypes = {
    stuff : PropTypes.object
}
export default Stuffs;