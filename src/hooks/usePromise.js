import { useEffect,useState } from "react";
import { baseUrl } from "../baseUrl";

const usePromise = (firstEndPoint,secondEndPoint) =>{
    const [error,setError] = useState(null);
    const [datafetched,setDataFetched]=useState(null);
    const [isLoading,setIsloading] = useState(true);
    const [dataSet,setDataSet] = useState([])
    useEffect(()=>{
        Promise.all([
            fetch( baseUrl + `${firstEndPoint}`),
            fetch( baseUrl + `${secondEndPoint}`)
        ])
            .then(([resEndPoint1,resEndpoint2])=>{
                if (!resEndPoint1.ok || !resEndpoint2.ok){
                    throw Error('Could not fetch data from that resource');
                }
               return Promise.all([resEndPoint1.json(),resEndpoint2.json()])
            })
            .then(([dataEndpoint1,dataEndpoint2])=>{
                setIsloading(false);
                setError(false);
                setDataFetched(true);
                setDataSet([dataEndpoint1,dataEndpoint2])
                
            })
            .catch(err=>{
                setIsloading(false);
                setError(true);
                setDataFetched(false)
            })
    },[firstEndPoint,secondEndPoint])
    return{dataSet,datafetched,isLoading,error}
}

export default usePromise;