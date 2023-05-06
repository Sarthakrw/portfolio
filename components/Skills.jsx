import Image from 'next/image';
import React from 'react';
import Keras from '../public/assets/skills/keras.png';
import Deep from '../public/assets/skills/ai.png';
import Github from '../public/assets/skills/github1.png';
import Numpy from '../public/assets/skills/numpy.png';
import C from '../public/assets/skills/c-.png';
import Tensor from '../public/assets/skills/tensor.png';
import Python from '../public/assets/skills/python.png';
import Pandas from '../public/assets/skills/pandas.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>


        <a href='https://coursera.org/verify/8TJ4YKPFZK5J' target='_blank' rel='noreferrer'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Deep} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Machine Learning</h3>
                </div>
              </div>
            </div>
        </a>

        <a href='https://www.kaggle.com/learn/certification/sarthakrw/python' target='_blank' rel='noreferrer'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
        </a>

        <a href='https://www.linkedin.com/learning/certificates/247ea8307b7973122ea2122ec386a26daec262efc81724a4eda1c03dbdbc4c62' target='_blank' rel='noreferrer'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={C} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center text-lg'>
                <h3>C++</h3>
              </div>
            </div>
          </div>
        </a>  

        <a target='_blank' rel='noreferrer'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tensor} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tensorflow</h3>
              </div>
            </div>
          </div>
        </a>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Keras} width='130px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Keras</h3>
              </div>
            </div>
        </div>

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <Image src={Numpy} width='100px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Numpy</h3>
              </div>
            </div>
        </div>
        
        <a target='_blank' rel='noreferrer'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Pandas} width='135px' height='70px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Pandas</h3>
              </div>
            </div>
          </div>
        </a>

          <a href='https://github.com/Sarthakrw' target='_blank' rel='noreferrer'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Github} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Github</h3>
                </div>
              </div>
            </div>
          </a>


        </div>
      </div>
    </div>
  );
};

export default Skills;
