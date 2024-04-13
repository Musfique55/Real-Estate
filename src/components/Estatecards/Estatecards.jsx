import PropTypes from 'prop-types';
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidArea } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { setItem } from '../localStorage';
const Estatecards = ({estate}) => {
    const {image,area,description,location,price,status,estate_title,id} = estate;
    // console.log(estate);
    return (
        <div className='space-y-3 p-5 relative border border-gray-300 rounded-xl'>
            <img src={image} alt=""  className='w-full h-[289px] object-cover rounded-lg'/>
            <span className='bg-green-500 px-3 py-1 text-white absolute top-5 right-10 rounded-full font-semibold'>{status}</span>
            <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-semibold'>{estate_title}</h3>
            <FaRegHeart className='text-xl' onClick={() => {setItem(id)}}></FaRegHeart>
            </div>
            <div className="flex justify-between flex-grow">
                <div className="flex items-center gap-2 text-lg">
                    <BiSolidArea></BiSolidArea>
                    <p className='text-gray-700'>{area}</p>
                </div>
                <div className="flex items-center gap-2 text-lg">
                    <IoLocationSharp></IoLocationSharp>
                    <p className='text-gray-700'>{location}</p>
                </div>
            </div>
            <p className='text-base text-gray-600'>{description.slice(0,140)}</p>
            <div className="flex justify-between items-center">
                <Link to={`/estate-details/${id}`} className='bg-green-600 text-white px-6 py-3 font-semibold rounded-lg'>View Property</Link>
                <p className='text-lg '>Price <span>${price}</span></p>
            </div>
        </div>
    );
};

Estatecards.propTypes = {
    estate : PropTypes.object,
}
export default Estatecards;
