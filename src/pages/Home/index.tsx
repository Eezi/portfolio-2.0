import React, { FC, ReactElement, useEffect, useState } from 'react'
import Bio from '../../components/Bio';
import About from '../../components/About';
import illu from '../../assets/illu.svg';
import './styles.css'

const Home: FC<{}> = (): ReactElement => {

    return (
        <>
        <div className="md:text-3xl text-xl leading-normal">
            <h2 className="text-3xl">Tomi Salo</h2>
            <h5 className="text-xl main-title">Full-stack developer</h5>
        </div>
        <div className="max-w-4xl flex flex-row-reverse mt-16">
            <img width="500px" src={illu} alt="home illustration" className="md:mr-20" />
        </div>
        <About />
        <Bio />
      </>
    );
}

export default Home
