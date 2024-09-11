import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';

export const myContext = createContext();

export const Context = ({children}) => {
    const [item,setItem] = useState([]);
    const [choosed,setChoosed] = useState(null);
    const [query,setQuery] = useState("")
    const [sidevar,setSidevar] = useState(false);
    const endpoint = 'https://www.googleapis.com/youtube/v3';
    const API_KEY = 'AIzaSyB2pgIdAgr7u974oPaWAUtAPILfuyI0_xE';
    const categories = 'Gaming Music News & Politics'
    const Youtube_url = 'https://www.youtube.com/embed/'
    const searchList = [
      {id:"Music",jp:"音楽"},
      {id:"Film & Animation",jp:"ムービー&TV"},
      {id:"Gaming",jp:"ゲーム"},
      {id:"News & Politics",jp:"ニュース"}
    ]

    const fetchData = useCallback(async()=>{
        const res = await fetch(`${endpoint}/search?key=${API_KEY}&type=video&part=snippet&q=${query}&maxResults=10&chart=mostPopular`)
        const data = await res.json();
        setItem(data.items);
        console.log(data.items)
    },[query])

    useEffect(()=>{
        fetchData();
    },[query])

    const chooseVideo = (id)=>{
      const copy = [...item];
      const search = copy.find(elm=>id===elm.id.videoId);
      setChoosed(search)
    }
    const settingQuery = (string)=>{
      setQuery(string)
    }
    const setingSidevar = (argc)=>{
      argc==="Header"?setSidevar(true)
      :setSidevar(false);
    }
    const takeAwayQuery = (query)=>{
      setQuery(query)
    }
  return (
    <div>
      <myContext.Provider value={{item,chooseVideo,choosed,settingQuery,sidevar,setingSidevar,searchList,takeAwayQuery}}>
        {children}
      </myContext.Provider>
    </div>
  )
}
