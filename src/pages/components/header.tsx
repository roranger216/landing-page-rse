import React, { useRef,useEffect, CSSProperties } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Head = () => {

  
  const sidemenuRef = useRef<HTMLDivElement>(null);
  const btnMenu = useRef<HTMLDivElement>(null);
  function showMenu() {
    if (sidemenuRef.current && btnMenu.current) {
      const sidebarDisplay = sidemenuRef.current.style.display;
      sidemenuRef.current.style.display = sidebarDisplay === 'flex' ? 'none' : 'flex';
        sidemenuRef.current.style.position = 'absolute';
        sidemenuRef.current.style.marginTop = '80px';
        sidemenuRef.current.style.backgroundColor = 'rgb(248 250 252)';
        sidemenuRef.current.style.paddingBottom = '25px';
    }  
  }

  useEffect(() => {
    const handleResize = () => {
      if(sidemenuRef.current){
        if (window.innerWidth >= 800) {
          sidemenuRef.current.style.display = 'none';
        }
      }
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  

  return (

    <div>
    <div className="flex flex-row justify-between w-full shadow-lg fixed bg-slate-50">
      <div className="text-center lg:flex-col lg:flex flex justify-between w-full">
        <div ref={btnMenu} className="items-center justify-between rounded-md p-2 hover:bg-sky-200 ease-in duration-300 min-[900px]:hidden lg:m-6 lg:flex-row m-5">
          <button id="menu-btn" className='text-2xl' onClick={showMenu}>
            <FontAwesomeIcon icon={faBars}/>
          </button>
        </div>
        <div className="flex lg:m-6 m-6 font-bold text-xl p-2">THISLogo</div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between lg:gap-20 lg:m-6 font-medium text-lg cursor-pointer" ref={sidemenuRef}>
        <div id="sidebar" className="hide flex-row flex items-center justify-between gap-20 font-medium text-lg cursor-pointer max-[900px]:hidden">
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300"><a href="">Home</a></div>
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300"><a href="">About</a></div>
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300"><a href="">Services</a></div>
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300"><a href="">Contact</a></div>
          </div>
      </div>
    </div>
      <div className="hidden w-1/3 pt-px justify-center items-center shadow-lg " ref={sidemenuRef}>
        <div className="lg:flex lg:flex-col w-1/2 justify-center items-center font-medium text-lg cursor-pointer ">
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300">
            <Link legacyBehavior href='#about'>
              <a href="">Home</a>
            </Link></div> 
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300"><a href="#about">About</a></div>
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300"><a href="">Services</a></div>
          <div className="rounded-md p-2 hover:bg-sky-200 ease-in duration-300"><a href="">Contact</a></div>
        </div>
      </div>
      </div>
  )
}

export default Head