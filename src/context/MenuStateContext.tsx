'use client'
import { createContext, useState } from "react";

export type MenuContextType = {
  visible: boolean,
  setVisible: (visible: boolean) => any,
  toggleVisibility: (visible?: boolean) => any
}

const initialContext = {
  visible: false,
  setVisible: (visible: boolean) => {},
  toggleVisibility: (visible?: boolean) => {}
}

export const MenuStateContext = createContext<MenuContextType>(initialContext);

export const MenuStateProvider = ({children}: {children: any}) => {
  const [visible, setVisible] = useState<boolean>(false);  
  const toggleVisibility = (visibleParm?: boolean) => {
    if (visibleParm !== undefined && visibleParm !== null)
      setVisible(visibleParm);
    else 
      setVisible(!visible);
  };

  return <MenuStateContext.Provider value={{visible, setVisible, toggleVisibility}}>
    {children}
  </MenuStateContext.Provider>;
}