import { useEffect } from "react";
useEffect(()=>{
    Promise.all([
        fetch( baseUrl +'aboutUs'),
        fetch( baseUrl +'testimonials')
    ])
        .then(([resAboutUs,resReviews])=>{
            if (!resAboutUs.ok || !resReviews.ok){
                throw Error('Could not fetch data from that resource');
            }
           return Promise.all([resAboutUs.json(),resReviews.json()])
        })
        .then(([dataAboutUs,dataReviews])=>{
            setIsloading(false);
            setError(false);
            setDataFetched(true);
            setAboutUs(dataAboutUs);
            setReviews(dataReviews);
        })
        .catch(err=>{
            setIsloading(false);
            setError(true);
            setDataFetched(false)
        })
},[])