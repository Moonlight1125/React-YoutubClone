import React, { useContext, useEffect, useRef } from 'react'
import { myContext } from './Context';
import { FiAlignJustify } from "react-icons/fi";

const Sivdevar = () => {
    const globalContext = useContext(myContext);
    const sideVarTF = globalContext.sidevar;
    const sidevarClose = globalContext.setingSidevar;
    const categories = globalContext.searchList;
    const takeAwayQuery = globalContext.takeAwayQuery;
    const ref = useRef(null);

    useEffect(()=>{
      if(sideVarTF){
        let timeID;
        timeID=setTimeout(()=>{
          document.body.addEventListener("click",closeTab);
        },250)
        return ()=>clearTimeout(timeID);
      }else {
        document.body.removeEventListener("click", closeTab);
      }
    },[sideVarTF])

    const closeTab = (e)=>{
      if(!ref.current.contains(e.target)){
        sidevarClose("Close")
        document.body.removeEventListener("click",closeTab);
      }
    }
    const sidevarClicked = ()=>{
      sidevarClose("Close");
      document.body.removeEventListener("click",closeTab);
    }
    const sendQuery = (query)=>{
      takeAwayQuery(query)
      sidevarClose("Close")
    }
    return (
    <div className={`bg-black bg-opacity-60 fixed z-30 top-0 w-full h-screen ${sideVarTF?"animate-colorOn":"animate-colorOff"}`}>
        <div ref={ref} className={`bg-white w-[230px] h-full fixed z-30 ${sideVarTF?"animate-fadeIn":"animate-fadeOut"}`}>
          <div className='flex p-6'>
            <FiAlignJustify onClick={()=>sidevarClicked()} className='text-[1.5rem]'/>
            <p className='w-4 pl-3' >Youtube CLone</p>
          </div>
          <div className='pl-5 pt-4 border-t-2 mx-auto border-t-slate-400 w-[90%]'>
            <h2 className='mb-4'>検索</h2>
            {categories.map((elm,id)=>{
              return(<div key={id} onClick={()=>sendQuery(elm.id)} className='mb-4'>ICON{elm.jp}</div>)
            })}
          </div>
        </div>
    </div>
  )
}

export default Sivdevar