import React from 'react'
import Link from 'next/link'

const dashboard = () => {

  return (
    <>
      <div className="text-4xl text-center font-bold p-20">Welcome Folks</div>
      <div className="text-center mt-4 hover:underline cursor-pointer text-lg">
        <Link href="login" className="">Logout</Link>
      </div>
    </>
  )
}

export default dashboard