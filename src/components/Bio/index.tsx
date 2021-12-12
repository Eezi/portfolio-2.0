import React, { FC } from 'react'
import './styles.css'

interface Props {
  text: string
  year: string
  isLast?: boolean
}

const YearPart: FC<Props> = ({ text, year, isLast }) => {
  const clas = isLast ? 'mb-6' : 'yearDiv mb-6';
  return (
  <div className={clas}>
    <span className="font-black mr-2">{year}</span>
    <span>{text}</span>
  </div>
  )
}

const Bio = () => {
  return (
    <div className="mt-3 max-w-xs container">
        <div className="mb-3">
          <h5 className="text-xl mb-5 header">Bio</h5>
        </div>
        <YearPart text="Born in Helsinki, Finland" year="1996" />
        <YearPart text="Started working at Siemens Healthineers." year="2019" />
        <YearPart text="Completed Informaton Technology, Bachelor’s Degree from Metropolia University of Applied." year="2020" />
        <YearPart isLast text="Stopped working at Siemens Healthineers and started working at Jakoa as a developer." year="2020 to present" />
    </div>
  );
};

export default Bio;
