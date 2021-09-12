import React, { FC, ReactElement, useEffect, useState } from 'react'
import illu from '../../assets/illu.svg';

const Home: FC<{}> = (): ReactElement => {

    return (
        <div>
        <div className="md:text-3xl text-xl leading-normal">
            <h2>Hi, I'm Tomi!</h2>
            <h2>My passions are web development and climbing</h2>
        </div>
        <div className="max-w-4xl flex flex-row-reverse mt-16">
            <img width="600px" src={illu} alt="home illustration" className="md:mr-20" />
        </div>
</div>
    );
}

export default Home
