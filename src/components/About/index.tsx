import React from 'react';
import './styles.css';

const Bio = () => {
  return (
    <div className="dark:text-white mt-10 max-w-md container">
      <div className="mb-3">
        <h5 className=" text-xl header">About</h5>
      </div>
      <p>
        Im a full-stack developer with a passion to solve real life problems
        with code. I also enjoy designing simple and beautiful UIs. In my free
        time my biggest passion is climbing.
      </p>
    </div>
  );
};

export default Bio;
