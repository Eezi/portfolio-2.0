import React, { FC } from 'react';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

interface Props {
  isDark: boolean;
  setDarkMode: (isDark: boolean) => void;
}

export const Darkmode: FC<Props> = ({ isDark, setDarkMode }) => {
  if (isDark) {
    return (
      <img
        width="25px"
        src={moon}
        alt="moon"
        onClick={() => setDarkMode(!isDark)}
        className="hover:cursor-pointer"
      />
    );
  }
  return (
    <img
      width="25px"
      src={sun}
      onClick={() => setDarkMode(!isDark)}
      alt="sun"
      style={{ color: 'yellow' }}
      className="hover:cursor-pointer"
    />
  );
};
