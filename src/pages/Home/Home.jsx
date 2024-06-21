
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HouseCard from "./HouseCard";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const houses = useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>Home | Tiny House</title>
            </Helmet>
            <Banner></Banner>
            <div className="mt-16">
            {
                houses.map(house => <HouseCard key={house.id} house={house}></HouseCard>)
            }
            </div>

        </div>
    );
};

export default Home;