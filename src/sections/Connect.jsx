import React from 'react'
import { Button } from '../components'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

const Connect = () => {

  const { register, control , handleSubmit} = useForm();
  const loading = false;
  async function onSubmit(data)
    {
      console.log("Form Submitted", data);
      // const newUser = await createUserAccount(data);
    }
    
  return (
    <section className='w-full min-h-screen  flex flex-col max-sm:gap-10 gap-20  lg:px-16 md:px-10 px-6 max-container' >
        <h1 className='w-full text-center font-display italic text-[64px] lg:text-[120px]   text-secondary '>
          Connect
        </h1>

        <div className=' h-full items-start flex flex-row gap-20 '>

          
             <form className=' flex flex-col gap-5  w-2/3' onSubmit={handleSubmit(onSubmit)} noValidate>
             <h1 className='   font-montserrat text-secondary text-sm sm:text-lg lg:text-4xl '>
            Send a Message
          </h1>
             <input className='text-start border-2 border-gray-200 rounded-lg p-2 text-lg font-montserrat w-full ' type="email" placeholder="Email" {...register("email", { required: true })} />
                    <textarea className='text border-2 border-gray-200 rounded-lg p-2 text-lg font-montserrat h-60 w-full '  placeholder="Message" {...register("Message", { required: true })}   
                    />

    
       {loading? (          
         <Loader />)
         :
         (<Button  
             label={"Submit"}
             iconURL={false}
             width={'w-max'}        
             />)}

       </form>



       <div className=' h-full items-center flex flex-col gap-10'>
          <h1 className='   font-montserrat text-secondary text-sm sm:text-lg lg:text-4xl '>
            Socials
          </h1>
          </div>
        </div>




    </section>
  )
}

export default Connect