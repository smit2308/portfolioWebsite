import { Video } from 'lucide-react'
import React from 'react'

const Video_Comparison = ({videoBefore, videoAfter}) => {
  return (
              <section className='-pl-6 mb-4'> 
      

        <div className="flex flex-col justify-center content-center  gap-4 max-sm:flex-col py-8 w-full sm:px-16 px-2">
          <div className="flex flex-col gap-2 content-center justify-center ">
             <h4 className="text-center">Before</h4>

              
<video
  src={videoBefore}
  className="w-full h-[440px] object-cover rounded-lg shadow-lg self-center"
  muted
  playsInline
  controls
/>
          </div>

          <div className="flex flex-col gap-2 content-center justify-center  ">
            <h4 className="text-center">After</h4>
              
<video
  src={videoAfter}
  className="w-full h-[440px] object-cover rounded-lg shadow-lg self-center"
  muted
  playsInline
  controls
/>
          </div>

        </div>
      </section>
  )
}

export default Video_Comparison