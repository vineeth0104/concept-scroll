import "./App.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import logoOutline from "./assets/logo_fixed_outline.png";
import logo from "./assets/logo.png";
import { useEffect, useState } from "react";

function App() {
  const [scrollCPosition, setScrollCPosition] = useState(null);
  const [fixedCPosition, setFixedCPosition] = useState(null);

  const [section2CScrollPosition, setSection2CScrollPosition] = useState(null);

  const updateScrollPositionsOfElements = () => {
    const windowHeight = window?.innerHeight;
    const pageYOffset = window?.pageYOffset;
    const scrollCenterPosition = windowHeight / 2 + pageYOffset;
    setScrollCPosition(scrollCenterPosition);

    const section2 = document?.querySelector(".section2");
    setSection2CScrollPosition(
      section2?.getClientRects()?.[0]?.y +
        section2?.getClientRects()?.[0]?.height / 2
    );
  };

  const handleScroll = (e) => {
    updateScrollPositionsOfElements();
  };

  const adjustCenterPosition = () => {
    const windowHeight = window?.innerHeight;
    setFixedCPosition(windowHeight / 2);
    handleScroll();
  };

  //Page mount
  useEffect(() => {
    const windowHeight = window?.innerHeight;
    setFixedCPosition(windowHeight / 2);

    updateScrollPositionsOfElements();
  }, []);

  //On Scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //On Resize
  useEffect(() => {
    window.addEventListener("resize", adjustCenterPosition);

    return () => {
      window.removeEventListener("resize", adjustCenterPosition);
    };
  }, []);

  return (
    <div className="App">
      <img
        className="position_fixed_center"
        src={logoOutline}
        alt=""
        height={"auto"}
        width={"200px"}
      />
      <Section1
        logo={logo}
        scrollCPosition={scrollCPosition}
        fixedCPosition={fixedCPosition}
      />
      <p>
        {section2CScrollPosition} , {fixedCPosition}
      </p>
      <Section2
        logo={logo}
        scrollCPosition={scrollCPosition}
        fixedCPosition={fixedCPosition}
        active={Math.abs(fixedCPosition - section2CScrollPosition) < 10}
      />
    </div>
  );
}

export default App;
