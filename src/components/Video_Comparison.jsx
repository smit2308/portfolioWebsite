import { Video } from 'lucide-react'
import React from 'react'

const Video_Comparison = ({videoBefore, videoAfter}) => {



  
  return (
              <section className='-pl-6 mb-4'> 
      

        <div className="flex flex-col justify-center content-center  gap-4 max-sm:flex-col w-full pt-4 pb-16 sm:px-16 px-2">
          <div className="flex flex-col gap-2 content-center justify-center ">
             <h4 className="">Before</h4>

              
<video
  src={videoBefore}
  className="w-full h-[440px] object-cover rounded-lg shadow-lg self-center"
  autoPlay
  muted
  loop
  playsInline
/>
          </div>

          <div className="flex flex-col gap-2 content-center justify-center  ">
            <h4 className="">After</h4>
              
<video
  src={videoAfter}
  className="w-full h-[440px] object-cover rounded-lg shadow-lg self-center"
  autoPlay
  muted
  loop
  playsInline
/>
          </div>

        </div>
      </section>
  )
}

export default Video_Comparison