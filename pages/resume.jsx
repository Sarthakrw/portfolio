import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Sarthak | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Sarthak Rawat</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/sarthak-rawat-81850a25b/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Sarthakrw'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Creativity <span className='px-1'>|</span> Machine Learning Engineer {' '}
              <span className='px-1'>|</span> Efficient Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Creativity</p>
            <p className='py-2'>Machine Learning Engineer</p>
            <p>Efficient Problem Solving</p>
          </div>
        </div>
        <p>
        Motivated and innovative B. Tech CSE (Specialization in Artificial Intelligenceand Machine Learning), with a strong desire to pursue a career in AI&ML and data science. Proficient in various programming languages and frameworks used in machine learning, and experienced in statistical analysis and data visualization techniques. Skilled in team collaboration, critical thinking, and complex problem-solving, with a proven track record of optimizing efficiencies and driving results. Adept at adapting to fast-paced and challenging environments, with solid interpersonal abilities and a passion for learning and growth.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Machine Learning Engineer
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>C++
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next js
            <span className='px-2'>|</span>Tailwind
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            SAMPLE COMPANY NAME
            </span>
            <span className='px-2'>|</span>Location
          </p>
          <p className='py-1 italic'>Role (20XX - Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              point 1
            </li>
            <li>
              point 2
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              SAMPLE COMPANY NAME
            </span>
            <span className='px-2'>|</span>Location
          </p>
          <p className='py-1 italic'>Role (20XX - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Point 1
            </li>
            <li>
              Point 2
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Location</span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'>Role (20XX – 20XY)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Point 1
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
