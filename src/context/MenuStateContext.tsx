'use client'
import { createContext, useState } from "react";
import { MenuToggleState } from "@/components/ui/HamburgerMenu";

export type MenuContextType = {
  menuToggleState: MenuToggleState,
  setMenuToggleState: (menuToggleState: MenuToggleState) => any,
  toggleMenuToggleState: () => any
}

const initialContext = {
  menuToggleState: MenuToggleState.OFF,
  setMenuToggleState: (menuToggleState: MenuToggleState) => {

  },
  toggleMenuToggleState: () => {

  }
}

export const MenuStateContext = createContext<MenuContextType>(initialContext);

export const MenuStateProvider = ({children}: {children: any}) => {
  const [menuToggleState, setMenuToggleState] = useState<MenuToggleState>(MenuToggleState.OFF);  
  const toggleMenuToggleState = () => {
    if (MenuToggleState.ON === menuToggleState)
      setMenuToggleState(MenuToggleState.OFF);
    else 
      setMenuToggleState(MenuToggleState.ON);
  };

  return <MenuStateContext.Provider value={{menuToggleState, setMenuToggleState, toggleMenuToggleState}}>
    {children}
  </MenuStateContext.Provider>;
}