import { forwardRef } from "react";

import { AccordionProvider, useAccordionContext } from "./custom-headless-accordion-context";

interface AccordionProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(function (
  { children, as: Comp = "div", ...props },
  ref
) {
  return (
    <AccordionProvider>
      <Comp {...props} ref={ref} role="region" data-hb-accordion="">
        {children}
      </Comp>
    </AccordionProvider>
  );
});

// Accordion Item Component
interface AccordionItemProps {
  children: React.ReactNode;
  index: number;
  as?: React.ElementType;
  className?: string;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(function (
  { children, as: Comp = "div", index, ...props },
  ref
) {
  const { activeIndex } = useAccordionContext();
  return (
    <Comp
      {...props}
      ref={ref}
      role="presentation"
      data-hb-accordion-item=""
      data-hb-accordion-item-active={activeIndex === index}
    >
      {children}
    </Comp>
  );
});

// Accordion Button Component
interface AccordionButtonProps {
  children: React.ReactNode;
  index: number;
  as?: React.ElementType;
  className?: string;
}

export const AccordionButton = forwardRef<HTMLButtonElement, AccordionButtonProps>(function (
  { children, as: Comp = "button", index, ...props },
  ref
) {
  const { activeIndex, toggle } = useAccordionContext();
  const isOpen = activeIndex === index;

  return (
    <Comp
      {...props}
      ref={ref}
      role="button"
      aria-expanded={isOpen}
      aria-controls={`accordion-panel-${index}`}
      data-hb-accordion-button=""
      onClick={() => toggle(index)}
    >
      {children}
    </Comp>
  );
});

// Accordion Panel Component
interface AccordionPanelProps {
  children: React.ReactNode;
  index: number;
  as?: React.ElementType;
  className?: string;
}

export const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(function (
  { children, as: Comp = "div", index, ...props },
  ref
) {
  const { activeIndex } = useAccordionContext();
  const isOpen = activeIndex === index;

  return (
    <Comp
      {...props}
      ref={ref}
      role="region"
      id={`accordion-panel-${index}`}
      hidden={!isOpen}
      aria-hidden={!isOpen}
      data-hb-accordion-panel=""
      data-hb-accordion-panel-active={isOpen}
    >
      {children}
    </Comp>
  );
});

Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";
AccordionButton.displayName = "AccordionButton";
AccordionPanel.displayName = "AccordionPanel";