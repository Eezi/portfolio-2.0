import React, { FC, useState, useEffect, useRef } from 'react';
import GLOBE from 'vanta/dist/vanta.globe.min';

interface Props {
  children: React.ReactNode;
  isDark: boolean;
}

export const Background: FC<Props> = ({ children, isDark }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const mobileWidth = window.innerWidth < 500;
  const bgColor = isDark ? '#111827' : '#fff';
  const mainColor = isDark ? '#4A10AE' : '#B48FF5';

  useEffect(() => {
    setVantaEffect(
      GLOBE({
        el: myRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 150.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 0.5,
        //color2: '#00ffd2',
        //color: '#7c3aed',
        color: mainColor,
        color2: mobileWidth ? bgColor : '#BBBBBB',
        //color2: '#00A486',
        size: 0.5,
        backgroundColor: bgColor,
      })
    );
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [isDark]);
  return <div ref={myRef}>{children}</div>;
};
