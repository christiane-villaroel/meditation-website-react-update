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
            {isLoading && <Loading/>}
            {features && !error ?<FeaturesList features={features}/>
            :<Error msg={"Homepage Not Found"}/>}
        </main>
    );
};

export default Homepage