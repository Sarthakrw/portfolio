import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MovieFinder from '../public/assets/projects/moviefinder.png';
import MLVisualizer from '../public/assets/projects/ml_visualizer.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Machine Learning Algorithm Visualizer'
            backgroundImg={MLVisualizer}
            projectUrl='/mlvisualizer'
            tech='Python&nbsp;|&nbsp;Numpy&nbsp;|&nbsp;Matplot&nbsp;|&nbsp;Pandas&nbsp;|&nbsp;Streamlit'
          />
          <ProjectItem
            title='Movie Finder'
            backgroundImg={MovieFinder}
            projectUrl='/movie'
            tech='HTML&nbsp;|&nbsp;CSS&nbsp;|&nbsp;Javascript&nbsp;|&nbsp;REACT'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
