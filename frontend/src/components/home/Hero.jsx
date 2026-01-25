import Image from 'next/image'

function Hero() {
  return (
    <div className='px-5 lg:px-28'>
      <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* LEFT SIDE */}
        <div className='w-full sm:w-1/2 flex items-center justify-center sm:py-0'>
          <div className='text-[#414141]'>
            {/* OUR BESTSELLERS */}
            <div className='flex items-center gap-2 mt-2 lg:mt-2'>
              <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
              <p className='font-medium text-sm md:text-base '>OUR BESTSELLERS</p>
            </div>

            {/* Heading */}
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>

            {/* Shop NOW */}
            <div className='flex items-center gap-2 mb-2 lg:mb-2'>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
              <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Image inside a box */}
        <div className='w-full sm:w-1/2 flex items-center justify-end'>
          <div className='rounded-md w-full max-w-md h-92'>
            <Image
              src='/heroimg.avif'
              alt='Hero Image'
              width={500}
              height={400}
              className='w-full h-92 object-cover border border-gray-400'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
