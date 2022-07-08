import React, { FC } from 'react';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

interface Props {
  isDark: boolean;
  setDarkMode: (prev: boolean) => void;
}

export const Darkmode: FC<Props> = ({ isDark, setDarkMode }) => {
  if (isDark) {
    return (
      <img
        width="25px"
        src={moon}
        alt="moon"
        onClick={() => setDarkMode((prev: boolean) => !prev)}
        className="hover:cursor-pointer"
      />
    );
  }
  return (
    <img
      width="25px"
      src={sun}
      onClick={() => setDarkMode((prev: boolean) => !prev)}
      alt="sun"
      style={{ color: 'yellow' }}
      className="hover:cursor-pointer"
    />
  );
};
