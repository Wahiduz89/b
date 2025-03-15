// components/Navigation/NavContext.tsx
'use client';

import { createContext, useContext, useState } from 'react';

type NavContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const NavContext = createContext<NavContextType>({} as NavContextType);

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </NavContext.Provider>
  );
}

export const useNav = () => useContext(NavContext);