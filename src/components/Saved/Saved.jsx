import { Link, useLoaderData } from "react-router-dom";
import { getItem } from "../localStorage";
import { IoLocationSharp } from "react-icons/io5";
const Saved = () => {
    const getSavedItem = getItem();
    const all = useLoaderData();
    const savedItem = all.filter((item) => getSavedItem.includes(item.id));

    return (
        <div className="mx-20">
            {
                savedItem.map((item,idx) => {
                    const {image,estate_title,location,area,price,facilities,status,id} = item;
                    return(
                        <div key={idx} className="mb-6">
                            <div className="flex gap-10 border border-gray-300">
                                <div>
                                <img src={image} alt="" className="w-[550px] h-auto object-cover"/>
                                </div>
                                <div className="space-y-5 p-10">
                                    <h3 className="font-bold text-black text-2xl">{estate_title}</h3>
                                    <div className="flex gap-2 items-center text-lg">
                                    <IoLocationSharp></IoLocationSharp>   
                                    <p className="text-gray-400">{location}</p> 
                                    </div>
                                    <div className="flex justify-between items-center">
                                    <p className="text-xl">{price}</p>
                                    <p className='bg-green-500 px-3 py-1 text-white rounded-full font-semibold'>{status}</p>
                                    </div>
                                    <div className="flex gap-3">
                                    {
                                            facilities.map((facility,idx) => {
                                                return <p className="border-r border-black pr-2 text-base" key={idx}>{facility}</p>
                                            })
                                        }
                                    </div>
                                    <hr className="border-t border-gray-300"/>
                                    <div className="flex items-center justify-between">
                                        <p className="text-base font-semibold">{area}</p>
                                        <Link to={`/estate-details/${id}`} className='bg-green-600 text-white px-6 py-3 font-semibold rounded-lg'>View Property</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Saved;