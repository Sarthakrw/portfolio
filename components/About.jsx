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
          As a highly motivated and detail-oriented individual, my passion for technology and innovation has led me to pursue a career in machine learning and AI. I bring a strong foundation in computer science to any project, and I am skilled in multiple programming languages, including Python, C, and C++. I am able to quickly and efficiently develop solutions to complex problems, and my experience includes conducting research on various machine learning models and writing a review paper on their applications, showcasing my ability to stay current with the latest industry trends.
          </p>
          <p className='py-2 text-gray-600'>
          In addition to my work in machine learning, I have also developed an interest in front-end web development as a hobby. I specialize in building mobile-responsive UI applications that connect with APIs and other backend technologies. I believe that being a great developer is not about using one specific language, but about choosing the best tool for the job. Though I am most proficient in building front-end applications using HTML, CSS, Javascript, and React, I am a quick learner and can pick up new tech stacks as needed.

          Outside of work, I enjoy listening to music, drawing, and playing football.

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
