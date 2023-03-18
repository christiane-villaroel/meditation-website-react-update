import { useEffect, useState } from "react";

const useFetch = (url) => {
    //Custom Hooks
/* custom hooks need to start with the word use */
    const [isLoading,setLoading] = useState(true);
    const [data,setData] = useState(null);
    const [error,setError]= useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch data from that resource');
            }
            return res.json();
        })
        .then((data)=>{
            setLoading(false);
            setData(data);
            setError(null);
        })
        .catch(err=>{
            setLoading(false);
            setError(err.message);
        })
    },[url])
    return {data,isLoading,error}
}
/* custom Hook component made, this way I can make calls to server 

using this as a template to reuse in other componenst that require fetch requests

since we making a fetch request, in React it will cause a side effect

so we use useEffect to keep track of this side effect. 

when we make a fetch Request we get access to the Promise object which also return a th*/
/* UseEffect
A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.

Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.
*/
export default useFetch;