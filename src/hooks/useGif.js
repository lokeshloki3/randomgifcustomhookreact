import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif,setGif]= useState('');
    const [loading,setLoading]=useState('false');

    async function fetchData(){
        setLoading(true);
        // api call using axios returns promise
        // const output = await axios.get(url);
        // destructure data from output
        // const {data} = await axios.get(tag ? tagMemeUrl : randomUrl);
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imgSource = data.data.images.downsized_large.url;
        // console.log({data});
        // console.log(imgSource);
        setGif(imgSource);
        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {gif, loading, fetchData};
}

export default useGif