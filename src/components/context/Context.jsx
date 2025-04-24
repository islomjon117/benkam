import { useState, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

// Context yaratish
const FilterContext = createContext({});

export const FilterContextProvider = ({ children }) => {
  
  // about functions start
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  // about functions end


  // navbar functions start
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  


  return (
    <FilterContext.Provider
      value={{
        handleMouseMove,
        resetTilt,
        tilt,
        setTilt,
        t,
        i18n,
        changeLanguage,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
