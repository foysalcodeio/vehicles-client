
import Apps from "./Apps";
import Banner from "./Banner";
import Brands from "./Brands";
import LatestCar from "./LatestCar";
import Service from "./Service";

const Home = () => {
    return (
        <div className="">
          <Banner />
          <Brands />
          <Service />
          <Apps />
          <LatestCar />
        </div>
    );
};

export default Home;
