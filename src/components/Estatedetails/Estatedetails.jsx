import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
const Estatedetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const details = data.find(item => item.id == id);
    const {image,area,description,location,price,status,estate_title,facilities} = details;
    return (
        <div className="mx-12">
            <div>
            <h3>{estate_title}</h3>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <IoLocationSharp></IoLocationSharp>
                    <p>{location}</p>
                </div>
                <div className="flex items-center gap-5">
                    <p>${price}</p>
                    <span className='bg-green-500 px-3 py-1 text-white rounded-full font-semibold'>{status}</span>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <img src={image} alt="" />
                    <h3>Description</h3>
                    <p>{description}</p>
                    <div>
                        <h3>Details</h3>
                        <div className="flex">
                            {
                                facilities.map((facility,idx) => {
                                    return <p key={idx} className="border-r border-black px-3">{facility}</p>
                                })
                            }
                        <p className="ml-3">{area}</p>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Estatedetails;