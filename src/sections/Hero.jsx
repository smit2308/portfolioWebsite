import React from 'react'
import { Myimage, Myimage_small } from '../assets/images'
import Button from '../components/Button'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import TextTransition, { presets } from 'react-text-transition';


const TEXTS = ["Software Engineer", "UI/UX Designer", "Video-Editor"];

const Hero = () => {

  const [text] = useTypewriter({
    words: ["Software Engineer", "UI/UX Designer", "Video -Editor"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 1600,
  
  })

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className='max-container h-screen w-full flex flex-row max-sm:flex-col items-center justify-between max-sm:justify-center  lg:pl-16 md:pl-10 pl-6 max-sm:p-0  '>
      
      <div className='h-screen w-full flex flex-col justify-between max-sm:items-center  pr-6   overflow-hidden transition-all ease-in-out delay-100 max-sm:z-10  max-sm:px-6'>

        <div className='my-auto flex flex-col gap-2 max-sm:items-center max-sm:gap-2'>
        <h2 className='font-montserrat italic lg:text-xl sm:text-sm max-sm:text-xs max-sm:text-center text-secondary max-sm:text-primary font-light leading-normal '>
                  Welcome To My Portfolio, I’m A 
                </h2>
                {/*text-[12vw] xl:text-[150px] lg:text-[120px] md:text-[100px] sm:text-[70px]  xl:leading-[130px]  lg:leading-[100px]  md:leading-[80px]  sm:leading-[60px]  max-sm:text-[60px] max-sm:leading-[48px] */}
                <div className='max-xl:h-[20vw] h-64 max-sm:h-32 mb-4'> 
                <h1 className='pb-6 h-full font-display  xl:text-[150px] xl:leading-[130px] max-xl:text-[12vw] max-xl:leading-[10vw] max-sm:text-[72px] max-sm:leading-[56px] 
                max-sm:text-center  text-secondary max-sm:text-primary font-medium  '>
                  {/* Software Engineer */}
                  {text}
                  <span><Cursor /></span>
                  {/* <TextTransition 
                    translateValue='100' 
                    direction='up' 
                    springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition> */}
                 
                </h1>
                </div>
                


                <Button
                  label='Resume'
                  bgColor={'bg-none'}
                  textColor={'text-secondary'}
                /> 
        </div>

    
        
        <p className='w-full border-l-2  sm:border-secondary sm:pb-6 sm:pr-16 sm:px-10 max-sm:pl-4 max-sm:mb-10 lg:text-lg sm:text-sm max-sm:text-xs  text-secondary max-sm:text-primary font-light leading-normal  '>
                  Crafting unique digital experiences as a Web Designer and Developer, I also excel in videography and video editing.
                  Let's create something extraordinary together
                </p>
       


      </div>

      <div className='bg-[#b03e49] h-screen flex  xl:w-[1100px] lg:w-[800px] sm:w-[600px]  max-sm:w-screen  max-sm:z-0 max-sm:absolute  max-sm:brightness-75 ' >

        <img className='sm:object-cover w-full   max-lg:hidden'
        src={Myimage}/>

        <img className='sm:object-cover w-full object-left  lg:hidden  max-sm:object-cover   '
        src={Myimage_small}/>

        {/* <div className='absolute bg-[#b03e49] w-full h-screen z-0 flex items-center  p-10' >
          <div className='w-2/5 bg-gray-200'>
          </div>          
          <h className='text-4xl rotate-90 text-primary'>
            Lets Work Together
          </h>
        </div> */}

      </div>

      

    </section>
  )
}

export default Hero