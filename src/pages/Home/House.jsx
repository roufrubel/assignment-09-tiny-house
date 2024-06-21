import { Link, useLoaderData, useParams } from "react-router-dom";
import Banner from "./Banner";


const House = () => {
    const {id} = useParams();
    const houses = useLoaderData();
    // console.log(houses);
    const singleHouse = houses.find(houseDetail => houseDetail._id == id);
  
    // console.log(singleHouse);
    const {Img_url, estate_title, segment_name, description, price, Status, Area, location, facilities} = singleHouse;
    return (
        <div>
            <Banner></Banner>
            <div  className="p-6 grid grid-cols-1 mt-10 mb-4 bg-green-50 rounded-md border border-green-600">
                
                <div className="mb-6">
                <img className="w-4/6 mx-auto" src={Img_url} alt="house" />
                </div>              
  <div className="flex justify-center">
  <div className="space-y-3">
    <h2 className="font-bold text-2xl text-green-700">{estate_title}</h2>
    <div className="flex items-center justify-start font-bold">
        <p>Segment: {segment_name}</p>
        <p>Status: {Status}</p>
    </div>
    <div className="flex items-center justify-start font-bold">
        <p>Area: {Area}</p>
        <p>Location: {location}</p>
    </div>
   <div>
    <p className="font-bold">Facilities: </p>
   <div className=""> 
   {
        facilities?.map((facility, idx) => <p className="mr-2 font-bold text-blue-700" key={idx}>{facility}</p>)
    }
    </div>
   </div>
    <p className="font-bold text-2xl text-orange-700">Price: $ {price}</p>
    <p className="font-bold">{description}</p>
    <div className=" justify-center mt-4">
      <Link to='/'><button className="btn btn-neutral">See All Property</button></Link>
    </div>
  </div>
  </div>
        </div>
        </div>
    );
};

export default House;