import {  useLoaderData, useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Helmet } from "react-helmet";
const Estatedetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const details = data.find(item => item.id == id);
    const {image,area,description,location,price,status,estate_title,facilities,agent,latLng,segment_name} = details;
    return (
        <div className="mx-5 md:mx-12 lg:mx-20">
            <Helmet>
                <title>Alex Estate | Estate-Details</title>
            </Helmet>
            <div>
            <div className="flex items-center justify-between">
            <h3 className="text-5xl font-semibold">{estate_title}</h3>
            <p className="text-3xl">{segment_name}</p>
            </div>
            <div className="flex flex-col  md:justify-between md:flex-row  lg:justify-between lg:flex-row ">
                <div className="flex gap-2 items-center text-3xl mt-5">
                    <IoLocationSharp></IoLocationSharp>
                    <p>{location}</p>
                </div>
                <div className="flex items-center justify-between mt-5 md:mt-0 md:gap-5 lg:mt-0 lg:gap-5">
                    <p className="text-3xl font-semibold">${price}</p>
                    <span className='bg-green-500 px-3 py-1 text-white rounded-full font-semibold'>{status}</span>
                </div>
            </div>
            <img src={image} alt="" className="w-full object-cover h-[500px] mt-10 rounded-xl"/>
            </div>
            <div className="grid grid-cols-2 border-t mt-5 border-gray-300 gap-10 md:grid-cols-3 lg:grid-cols-3">
                <div className="col-span-2">
                    <h3 className="text-3xl my-5">Overview About House & Condition</h3>
                    <p className="text-lg font-medium">{description}</p>
                    <div className="border-t border-gray-300 mt-8">
                        <h3 className="my-5 text-3xl">Facilities Original Housing</h3>
                        <div className="flex items-center gap-4">
                            {
                                facilities.map((facility,idx) => {
                                    return <p key={idx} className="border-r border-black pr-3 text-lg">{facility}</p>
                                })
                            }
                        <p className=" text-lg">{area}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1 lg:col-span-1">
                    {
                        agent.map((person,idx) => {
                            return(
                                <div key={idx} className="space-y-3 bg-white border border-gray-300 shadow-md rounded-2xl p-8 mt-5">
                                    <img src={person.image} alt="" className="w-[100px] h-[100px] rounded-full"/>
                                    <h3 className="text-xl font-semibold">{person.agent_name}</h3>
                                    <h3 className="text-xl font-medium">{idx % 2 !== 0 ? "Junior Agent" : "Senior Agent"}</h3>
                                    <hr className="border-gray-300 border-dashed"/>
                                    <p className="text-base text-gray-600 font-normal">{person.description}</p>
                                    <div className="flex justify-center">
                                    <button className="btn btn-outline btn-secondary text-white w-full" >Contact Agent</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <hr className="mt-5 border-t border-gray-300"/>
            <div className="mt-5">
                    <h3 className="text-3xl my-5">Map location</h3>
                    <div>
                    <MapContainer center={latLng} zoom={13} scrollWheelZoom={false} className="mb-5">
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={latLng}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </MapContainer>
                    </div>
            </div>
        </div>
    );
};

export default Estatedetails;