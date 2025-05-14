import { Button, Group, useMantineColorScheme } from '@mantine/core';

import './color-scheme-toggle.css';
import { useCallback } from 'react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  const toggleScheme = useCallback((e) => {
    const { checked } = e.target;

    if (checked) {
      setColorScheme('light')
    } else {
      setColorScheme('dark')
    }
  }, []);

  return (
    <div className="wrapper">
      <input className="day-night-switch" type="checkbox" id="day-night" onChange={toggleScheme}/>
      <label className="day-night-switch" htmlFor="day-night">
        <div className="celestial sun"></div>
        <div className="celestial moon">
          <div className="craters">
            <div className="crater"></div>
            <div className="crater"></div>
            <div className="crater"></div>
            <div className="crater"></div>
            <div className="crater"></div>
          </div>
        </div>
        <div className="decorations">
          <div className="decoration"></div>
          <div className="decoration"></div>
          <div className="decoration"></div>
          <div className="decoration"></div>
        </div>
        <div className="mountains">
          <div></div>
          <div></div>
        </div>
      </label>

    </div>
  );
}
