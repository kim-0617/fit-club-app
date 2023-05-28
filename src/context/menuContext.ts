import { createContext } from "react";
import { MenuContextType } from "../App";

export const MenuContext = createContext<MenuContextType | null>(null);
