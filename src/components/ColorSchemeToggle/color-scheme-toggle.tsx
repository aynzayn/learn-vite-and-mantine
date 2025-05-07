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
        <div class="celestial sun"></div>
        <div class="celestial moon">
          <div class="craters">
            <div class="crater"></div>
            <div class="crater"></div>
            <div class="crater"></div>
            <div class="crater"></div>
            <div class="crater"></div>
          </div>
        </div>
        <div class="decorations">
          <div class="decoration"></div>
          <div class="decoration"></div>
          <div class="decoration"></div>
          <div class="decoration"></div>
        </div>
        <div class="mountains">
          <div></div>
          <div></div>
        </div>
      </label>

    </div>
  );
}
