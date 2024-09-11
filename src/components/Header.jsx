import React, { useContext,useRef,useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { myContext } from './Context';
import { Link } from 'react-router-dom';

const Header = () => {
  const globalContext = useContext(myContext);
  const query = globalContext.settingQuery;
  const sidevarTF = globalContext.setingSidevar;

  const [string,setString] = useState("");
  const sendData = (e)=>{
    e.preventDefault();
    if(!string){
      return null;
    }else{
      query(string);
    }
  }
  const seidevarClicked = ()=>{
    sidevarTF("Header");
  }
  return (
    <div className='mb-[100px]'>
        <div className='fixed bg-slate-100 z-10 top-0 w-full h-[80px] flex justify-evenly items-center px-10'>
            <div className='flex h-[20px] items-center'>
                <div onClick={()=>seidevarClicked()}>
                  <FiAlignJustify className='text-[1.5rem]'/>
                </div>
                <Link to={`/`}>
                  <p className='w-4 pl-3' >Youtube CLone</p>
                </Link>
            </div>
            <form onSubmit={(e)=>sendData(e)} className='w-[35%] h-[40px] mx-auto mt-5 flex' action="">
                <input onChange={(e)=>setString(e.currentTarget.value)} className='border border-black border-r-transparent outline-none w-full ' type="text" />
                <button type='submit' className='transition-all duration-200 w-[60px] border border-black rounded-tr-2xl rounded-br-2xl relative hover:bg-slate-500'>
                  <CiSearch className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[1.5rem]'/>
                </button>
            </form>
            <div>
              <div className='w-[30px] h-[30px] rounded-[50%] border border-green-600'></div>
            </div>
        </div>
    </div>
  )
}

export default Header