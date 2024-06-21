import { Link } from "react-router-dom";


const HouseCard = ({house}) => {
    const {_id, Img_url, estate_title, segment_name, description, price, Status, Area, location, facilities} = house;
    
    return (
  <div className="border md:flex lg:flex justify-start items-center gap-4 mb-8">
  <div className="">
  <img src={Img_url} alt="house" />
  </div>
  <div className="p-4 text-start space-y-2">
    <h2 className="text-xl font-bold text-amber-800" >{estate_title}</h2>
    <div className="flex items-center text-start text-lime-600 font-medium">
        <p className="mr-6 ">Segment: {segment_name}</p>
        <p>Status: {Status}</p>
    </div>
    <div className="flex items-center text-start text-red-900 font-medium">
        <p className="mr-6 ">Area: {Area}</p>
        <p>Location: {location}</p>
    </div>
   <div className="flex items-center text-start text-emerald-600 font-medium">
    <p className="font-bold">Facilities:  </p>
   <div className="flex items-center"> 
   {
        facilities?.map((facility, idx) => <p className="mr-4" key={idx}>{facility}</p>)
    }
    </div>
   </div>
    <p className="font-bold text-2xl text-cyan-600">Price: $ {price}</p>
    <div className="flex justify-end mt-4">
      <Link to={`/house/${_id}`}><button className="btn btn-neutral">View Property</button></Link>

    </div>
  </div>
</div>
    );
};

export default HouseCard;
