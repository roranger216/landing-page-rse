import React from 'react'
import Image  from 'next/image'
import rengoku from '../../assets/img/31f399f8b385b923ad1db24f01dc4b7b58d18d62.jpg'
import sengoku from '../../assets/img/sengoku-one-piece.jpg'
import goku from '../../assets/img/goku.jpg'
import coco from '../../assets/img/download.jpeg'

function Footer() {
  return (
    <div className="team flex flex-col gap-10 p-10 my-10">
      <div className="title text-center">
        <h1 className="font-extrabold text-5xl  bg-gradient-to-r bg-clip-text text-transparent text-gradient from-blue-500 to-pink-500">Meet The Team</h1>
      </div>
        <div className="team-content flex flex-row justify-between">
            <div className="flex flex-col team-item gap-5">
              <div className="team-item-images">
                <Image src={rengoku} alt="" style={{width: '200px', height:'200px', borderRadius: '100%', boxShadow: '0 2px 13px 0px #00000078'}}/>
              </div>
              <div className="flex flex-col gap-3 team-item-content text-center">
                <h2 className="text-center text-2xl font-bold">Rengoku</h2>
                <p className="font-medium">CEO Founder</p>
              </div>
            </div>
            <div className="flex flex-col team-item gap-5">
              <div className="team-item-images">
                <Image src={sengoku} alt="" style={{width: '200px', height:'200px', borderRadius: '100%', boxShadow: '0 2px 13px 0px #00000078'}}/>
              </div>
              <div className="flex flex-col gap-3 team-item-content text-center">
                <h2 className="text-center text-2xl font-bold">Sengoku</h2>
                <p className="font-medium">Co-Founder</p>
              </div>
            </div>
            <div className="flex flex-col team-item gap-5">
              <div className="team-item-images">
                <Image src={goku} alt="" style={{width: '200px', height:'200px', borderRadius: '100%', boxShadow: '0 2px 13px 0px #00000078'}}/>
              </div>
              <div className="flex flex-col gap-3 team-item-content text-center">
                <h2 className="text-center text-2xl font-bold">Goku</h2>
                <p className="font-medium">Fullstack Developer</p>
              </div>
            </div>
            <div className="flex flex-col team-item gap-5">
              <div className="team-item-images">
                <Image src={coco} alt="" style={{width: '200px', height:'200px', borderRadius: '100%', boxShadow: '0 2px 13px 0px #00000078'}}/>
              </div>
              <div className="flex flex-col gap-3 team-item-content text-center">
                <h2 className="text-center text-2xl font-bold">Coco</h2>
                <p className="font-medium">Guard</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer