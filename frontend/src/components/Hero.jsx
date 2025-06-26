import React from 'react'

const Hero = () => {
  return (
    <section className="h-[800px] bg-no-repeat bg-hero bg-cover bg-center py-24">
      <div className="max-w-7xl mx-auto px-[30px] flex items-center h-full">
        {/* text */}
        <div className="flex flex-col">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            New Trend
          </div>
          {/* title */}
          <h1 className="text-[70px] uppercase leading-[1.1] font-light mb-4">
            Explore Furniture,<br /> Electronics & More
          </h1>
          <p
            className="self-start uppercase font-semibold border-b-2 border-primary cursor-pointer"
          >
            Discover More
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero