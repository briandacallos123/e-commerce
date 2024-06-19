import React from 'react'
import Nav from './components/Nav'
import { LightBox } from './section/main-lightbox'

const page = () => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Nav/>
        <div className="m-auto max-w-[1200px] flex-1 flex ">
         <div className="flex">
          <LightBox/>
         </div>
        </div>
    </div>
  )
}

export default page