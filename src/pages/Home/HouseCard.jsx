import { Link } from "react-router-dom";


const HouseCard = ({house}) => {
    const {_id, Img_url, estate_title, segment_name, description, price, Status, Area, location, facilities} = house;
    
    return (
           <div className="card card-compact bg-base-100 border">
  <figure><img src={Img_url} alt="house" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <div className="flex items-center justify-around">
        <p>Segment: {segment_name}</p>
        <p>Status: {Status}</p>
    </div>
    <div className="flex items-center justify-around">
        <p>Area: {Area}</p>
        <p>Location: {location}</p>
    </div>
   <div className="flex justify-center items-center">
    <p className="font-bold">Facilities: </p>
   <div className="flex items-center"> 
   {
        facilities?.map((facility, idx) => <p className="mr-4" key={idx}>{facility}</p>)
    }
    </div>
   </div>
    <p>Price: $ {price}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/house/${_id}`}><button className="btn btn-primary">View Property</button></Link>

    </div>
  </div>
</div>
    );
};

export default HouseCard;



  // "Img_url": "https://example.com/images/estate1.jpg",
    //   "estate_title": "Luxury Villa in Beverly Hills",
    //   "id": 1,
    //   "segment_name": "Luxury",
    //   "description": "A stunning luxury villa with beautiful interiors and breathtaking views.",
    //   "price": 4500000,
    //   "Status": "sale",
    //   "Area": "4500 sq ft",
    //   "location": "Beverly Hills, CA",
    //   "facilities": ["living room", "swimming pool", "kitchen", "garden"]