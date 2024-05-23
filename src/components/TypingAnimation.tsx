import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation: React.FC = () => {
  const typedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: [
          "Book",
          "Journal",
          "Magazine",
          "Research",
          "Reference",
          "Newspaper",
          "Article",
          "Maps",
          "Encyclopedias",
          "Bible",
          "Database",
        ],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true,
      };

      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <span ref={typedRef}></span>;
};

export default TypingAnimation;
