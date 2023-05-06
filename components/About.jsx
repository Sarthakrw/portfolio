import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/sarthak-photo-6Sep2020-87KB.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          As  a Deep Learning and Machine Learning Engineer, I am passionate about leveraging the latest advancements in AI and ML to solve real-world problems. With a strong foundation in computer science and expertise in programming languages such as Python and C++, I can quickly and efficiently develop innovative solutions to complex challenges. 
          </p>
          <p className='py-2 text-gray-600'>
          My knowledge of deep learning frameworks such as Tensorflow and Keras has allowed me to develop and deploy solutions for complex machine learning problems. Additionally, I have published research on the applications of blockchain technology in a peer-reviewed journal, highlighting my ability to stay current with the latest industry trends and contribute to the field of technology.
          </p>
          <p className='py-2 text-gray-600'>
          In my free time, I am deeply intrigued by the concept of Artificial General Intelligence (AGI) and its potential impact on the future of humanity. I believe that the field of AGI has the potential to revolutionise the way we live our lives, and I hope to be a part of this exciting journey towards shaping the future.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
