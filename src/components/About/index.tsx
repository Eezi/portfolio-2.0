import React, { FC } from 'react';
import './styles.css';

interface Props {
  text: string;
  year: string;
  isLast?: boolean;
}

const YearPart: FC<Props> = ({ text, year, isLast }) => {
  const clas = isLast ? 'mb-6' : 'yearDiv mb-6';
  return (
    <div className={clas}>
      <span className="font-extrabold mr-2">{year}</span>
      <span>{text}</span>
    </div>
  );
};

const Bio = () => {
  return (
    <div className="mt-10 max-w-md container">
      <div className="mb-3">
        <h5 className="text-xl header">About</h5>
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
