import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
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
            <div className="grid grid-cols-1 p-6"> 
            <div className="card card-compact bg-base-100 border">
  <figure><img src={Img_url} alt="house" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <div className="flex items-center justify-center">
        <p>Segment: {segment_name}</p>
        <p>Status: {Status}</p>
    </div>
    <div className="flex items-center justify-center">
        <p>Area: {Area}</p>
        <p>Location: {location}</p>
    </div>
   <div className="">
    <p className="font-bold">Facilities: </p>
   <div className=""> 
   {
        facilities?.map((facility, idx) => <p className="mr-2" key={idx}>{facility}</p>)
    }
    </div>
   </div>
    <p>Price: $ {price}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to='/'><button className="btn btn-primary">See All Property</button></Link>

    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default House;