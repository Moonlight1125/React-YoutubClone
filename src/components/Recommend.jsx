import React, { useContext } from 'react'
import { myContext } from './Context';
import { Link } from 'react-router-dom';

const Recommend = () => {
  const globalContext = useContext(myContext);
  const realItems = globalContext.item;
  return(
    <div className='w-[95%] min-h-screen grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 place-content-center place-items-center mx-auto'>
      {realItems?.map((elm,value)=>{
        const {channelTitle,title,thumbnails} = elm.snippet;
        const {videoId} = elm.id;
        return(
          <Link key={value} to={`/video/${videoId}`}>
            <div className='max-sm:h-[300px] max-sm:w-[300px] h-[380px]'>
              <img
                 className="rounded-[10px]"
                 src={thumbnails.high.url}
                 alt=""
              />
             <article className="flex pt-4">
               <div className="border border-green-500 min-w-[30px] h-[30px] rounded-[50%] mr-4 ml-2"></div>
                 <div className=''>
                   <div className="leading-none w-[250px] overflow-hidden">{title}</div>
                   <p className="opacity-60 leading-none">{channelTitle}</p>
                  <p className="opacity-60 leading-none">other info</p>
                </div>
            </article>
          </div>
         </Link>

        )
      })}
    </div>
  )
}

export default Recommend