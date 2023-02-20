import { baseUrl } from "../baseUrl";
import NavMenu from "../components/NavMenu";
import FeaturesList from "../features/FeaturesList/FeaturesList";
import useFetch from "../useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Homepage = () => {
    const {data:features,error,isLoading} = useFetch(baseUrl + `homePage`);
    return(
        <main>
            <NavMenu/>
            {error && <Error/>}
            {isLoading && <Loading/>}
            {features && <FeaturesList features={features}/>}
        </main>
    );
};

export default Homepage