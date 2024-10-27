import { Children, cloneElement, createContext, useContext, useState } from "react";


const AccordionContext = createContext<{
  activeIndex: number | null;
  toggle: (index: number) => void;
} | null>(null);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordionContext는 Accordion 안에서만 사용해야 합니다.");
  }
  return context;
};

// Accordion Provider
export const AccordionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, toggle }}>
      {Children.map(children, (child, index) =>
        cloneElement(child as React.ReactElement, { index })
      )}
    </AccordionContext.Provider>
  );
};