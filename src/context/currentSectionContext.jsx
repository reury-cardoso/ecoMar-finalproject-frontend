/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const CurrentSectionContext = createContext();

function CurrentSectionProvider({ children }) {
  const [currentSection, setCurrentSection] = useState('points');

  return (
    <CurrentSectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </CurrentSectionContext.Provider>
  );
}

export default CurrentSectionProvider;
export { CurrentSectionContext };
