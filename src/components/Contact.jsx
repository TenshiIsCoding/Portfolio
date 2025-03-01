import { useState, useRef } from 'react';
import { motion } from "framer-motion";

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const LinkedInButton = () => {
  return (
    <button className="group hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6" onClick={ () => window.open("https://www.linkedin.com/in/anir-zaher-212198237/", '_blank') }>
      <svg className="w-8 h-8 fill-neutral-50" height={100} preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width={100} x={0} xmlns="http://www.w3.org/2000/svg" y={0}>
        <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z" />
      </svg>
      <span className="border-l-2 px-1">Anir Zaher</span>
    </button>
  );
}

const Contact = () => {
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setloading] = useState(false);

  const handleChange = (e) => {}

  const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.8] blue-gradient p-12 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact me at:</h3>
        <p className='pb-6 text-secondary text-[25px]'>anirzaher@gmail.com</p>
        <LinkedInButton/>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")