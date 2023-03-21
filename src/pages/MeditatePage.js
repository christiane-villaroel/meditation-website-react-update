import { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu";
import usePromise from "../hooks/usePromise";
import Loading from "../components/Loading";
import Error from "../components/Error";
import FeatureCards from "../features/FeaturesList/FeatureCards";
const MeditatePage = () => {
    const {dataSet,datafetched,isLoading,error} = usePromise("meditate","homepage")
     
    console.log(dataSet)
    return(
        <main>
            <NavMenu/>
            {isLoading && <Loading/>}
            {datafetched && !error ?<FeatureCards data={dataSet}/>
            :<Error msg={"Meditation Page Not Found"}/>}
        </main>
    );
};

export default MeditatePage;