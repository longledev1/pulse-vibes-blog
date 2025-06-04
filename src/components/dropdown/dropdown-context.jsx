import { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();
function DropdownProvider(props) {
  const [show, setShow] = useState();
  const toggle = () => {
    setShow(!show);
  };
  const values = { show, setShow, toggle };
  return (
    <DropdownContext.Provider value={values}>
      {props.children}
    </DropdownContext.Provider>
  );
}

function useDropDown() {
  const context = useContext(DropdownContext);

  if (typeof context === 'undefined') {
    throw new Error('useDropdown must be used within DropdownProvider');
  }
  return context;
}

export { DropdownProvider, useDropDown };
