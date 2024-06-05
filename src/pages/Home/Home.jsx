
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HouseCard from "./HouseCard";


const Home = () => {
    const houses = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                houses.map(house => <HouseCard key={house.id} house={house}></HouseCard>)
            }
            </div>

        </div>
    );
};

export default Home;