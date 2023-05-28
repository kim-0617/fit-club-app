import { useState } from "react";
import Hero from "./components/Hero";
import "./App.css";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Join from "./components/Join";
import Footer from "./components/Footer";
import { MenuContext } from "./context/menuContext";

export type MenuContextType = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuContextValue: MenuContextType = {
    menuOpen,
    setMenuOpen,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <div
        className="app"
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
      </div>
    </MenuContext.Provider>
  );
};

export default App;
