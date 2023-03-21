import React, { useState} from 'react'
import Image  from 'next/image'
import rengoku from '../../assets/img/31f399f8b385b923ad1db24f01dc4b7b58d18d62.jpg'
import sengoku from '../../assets/img/sengoku-one-piece.jpg'
import goku from '../../assets/img/goku.jpg'
import coco from '../../assets/img/download.jpeg'
import Link from 'next/link'
import ProfilePage from './profiles/profile'
import ProfilePage2 from './profiles/profile2'
import ProfilePage3 from './profiles/profile3'
import ProfilePage4 from './profiles/profile4'

function Footer() {

  const [hover, setHover] = useState(null);

  const handleMouseEnter = (index) => {
    setHover(index);
  }

  const handleMouseLeave = () => {
    setHover(null);
  }

  return (
    <div className="team flex flex-col gap-36 p-10 my-10">
      <div className="title text-center">
      <div className="flex flex-col justify-center items-center">
        {hover === 0 && (
          <div className="absolute z-40">
            <ProfilePage />
          </div>
        )}
        {hover === 1 && (
            <div className="absolute z-40">
              <ProfilePage2 />
            </div>
          )}
        {hover === 2 && (
            <div className="absolute z-40">
              <ProfilePage3 />
            </div>
          )}
          {hover === 3 && (
            <div className="absolute z-40">
              <ProfilePage4 />
            </div>
          )}
      </div>
        <h1 className="font-extrabold text-5xl  bg-gradient-to-r bg-clip-text text-transparent text-gradient from-blue-500 to-pink-500">Meet The Team</h1>
      </div>
        <div className="team-content flex flex-row justify-around sm:auto md:auto max-[900px]:grid grid-rows-2 grid-flow-col">
            <div className="flex flex-col team-item gap-5 transform transition-all ease-in hover:scale-125 hover:z-50">
              <div className="team-item-images">
                  <Image src={rengoku} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave} alt="Rengoku" style={{width: '100px', height:'100px', borderRadius: '100%', boxShadow: '0 2px 13px 0px #97d2ff', cursor: 'pointer'}}/>
              </div>
              <div className="flex flex-col gap-3 team-item-content text-center pb-3">
                <h2 className="text-center text-2xl font-bold">Rengoku</h2>
                <p className="font-medium w-24">CEO Founder</p>
              </div>
            </div>
            <div className="flex flex-col team-item gap-5 transform transition-all ease-in hover:scale-125 hover:z-50">
              <div className="team-item-images">
                <Image src={sengoku} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} alt="Sengoku" style={{width: '100px', height:'100px', borderRadius: '100%', boxShadow: '0 2px 13px 0px #97d2ff', cursor: 'pointer'}}/>
              </div>
              <div className="flex flex-col gap-3 team-item-content text-center pb-3">
                <h2 className="text-center text-2xl font-bold">Sengoku</h2>
                <p className="font-medium w-24">Co-Founder</p>
              </div>
            </div>
            <div className="flex flex-col team-item gap-5 transform transition-all ease-in hover:scale-125 hover:z-50">
              <div className="team-item-images">
                <Image src={goku} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} alt="Son Goku" style={{width: '100px', height:'100px', borderRadius: '100%', boxShadow: '0 2px 13px 0px #97d2ff', cursor: 'pointer'}}/>
              </div>
              <div className="flex flex-col gap-3 team-item-content text-center pb-3">
                <h2 className="text-center text-2xl font-bold">San Goku</h2>
                <p className="font-medium w-24">Fullstack Developer</p>
              </div>
            </div>
            <div className="flex flex-col team-item gap-5 transform transition-all ease-in hover:scale-125 hover:z-50">
              <div className="team-item-images">
                <Image src={coco} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} alt="Coco" style={{width: '100px', height:'100px', borderRadius: '100%', boxShadow: '0 2px 13px 0px #97d2ff', cursor: 'pointer'}}/>
              </div>
              <div className="flex flex-col gap-3 team-item-content text-center pb-3">
                <h2 className="text-center text-2xl font-bold">Coco</h2>
                <p className="font-medium w-24">Guard</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer