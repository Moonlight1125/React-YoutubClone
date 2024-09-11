import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { myContext } from './Context'
import '../index.css'
import { Link, useParams } from 'react-router-dom';

const Video = () => {
    const globalContext = useContext(myContext);
    const realItems = globalContext.item;
    const chooseVideo = globalContext.chooseVideo;
    const execute = globalContext.choosed;
    console.log(execute)
    const {id} = useParams();
    const [see,setSee] = useState(false);
    useEffect(()=>{
      chooseVideo(id)
    },[id])

    const takeVideoId = (e)=>{
      chooseVideo(e.currentTarget.dataset.videoid)
    }
    const iframe = useMemo(()=>{
      return(
        <iframe 
        width="100%" 
        height="350px" 
        src={`https://www.youtube.com/embed/Zp3Cl18EG-E`} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen
        ></iframe>
      )

    },[])
    const fetchedVideo = useMemo(()=>{
      try{
        const embedId = execute.id.videoId;
        return(
          <iframe 
          width="100%" 
          height="350px" 
          src={`https://www.youtube.com/embed/${embedId}`} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
          className='rounded-xl'
          ></iframe>
        )
      }catch(error){
        console.log(error)
      }
      },[execute])
  return (
    <div className='mx-auto min-h-screen w-ful lg:flex lg:justify-center'>
      <div className='mb-[50px] w-[90%] mx-auto md:max-w-[700px] lg:mx-[14px] min-w-[300px] min-h-[450px]'>
        {fetchedVideo||iframe}
        <div className='mb-4'>
          <h1 className='pt-3 text-xl font-bold'>{execute?.snippet.title.replaceAll("&quot;","\"")}</h1>
        </div>
        <div className='min-h-[60px] rounded-xl'>
          <div>info</div>
          <div className={`${see&&'min-h-[100px]'}`}>{execute?.snippet.description}<span onClick={()=>setSee(!see)} className={`opacity-55`}>もっと見る</span></div>
        </div>
      </div>

      <div className='lg:w-[370px] lg:mx-[14px] rounded-md w-full'>
        {realItems?.map((elm,index)=>{
          const {channelTitle,title,thumbnails} = elm.snippet
          const {videoId} = elm.id;
          return(
          <Link to={`/video/${videoId}`}>
          <div key={index} onClick={(e)=>takeVideoId(e)} data-videoid={videoId} className='flex h-[110px] cursor-pointer lg:w-[400px] lg:mx-0 w-[90%] mx-auto '>
            <div className='w-[190px] h-[100px] mr-2'>
              <img className='w-full h-full rounded object-cover' src={thumbnails.default.url} alt="thumbnail" />
            </div>
            <article className=' w-[240px] h-[110px]'>
              <p className='mb-[2px] line-clamp-2  text-sm w-[90%] h-[38%]'>{title.replaceAll("&quot;","\"")}</p>
              <p className='opacity-60 text-sm'>{channelTitle}</p>
              <p className='opacity-60'> other info</p>
            </article>
          </div>
          </Link>
          )
        }
        )}
      </div>

    </div>
  )
}

export default Video