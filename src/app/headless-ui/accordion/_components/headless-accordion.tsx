import { forwardRef } from "react";

import { AccordionProvider, useAccordionContext } from "./headless-accordion-context";

interface AccordionProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

interface AccordionItemProps {
  children: React.ReactNode;
  index: number;
  as?: React.ElementType;
  className?: string;
}

interface AccordionButtonProps {
  children: React.ReactNode;
  index: number;
  as?: React.ElementType;
  className?: string;
}


interface AccordionPanelProps  {
  children: React.ReactNode;
  index: number;
  as?: React.ElementType;
  className?: string;
}

export const Accordion = forwardRef(function (
  { children, as: Comp = "div", ...props }: AccordionProps,
  forwardedRef
) {
  return (
    <AccordionProvider>
      <Comp {...props} ref={forwardedRef} data-hb-accordion="">
        {children}
      </Comp>
    </AccordionProvider>
  );
});

export const AccordionItem = forwardRef(function (
  { children, as: Comp = "div", index, ...props }: AccordionItemProps,
  forwardedRef
) {
  const { activeIndex, toggle } = useAccordionContext();

  return (
    <Comp {...props} ref={forwardedRef} data-hb-accordion-item="" data-hb-accordion-item-active={activeIndex === index}>
      {children}
    </Comp>
  );
});

export const AccordionButton = forwardRef(function (
  { children, as: Comp = "button", index, ...props }: AccordionButtonProps,
  forwardedRef
) {
  const { activeIndex, toggle } = useAccordionContext();
  return (
    <Comp {...props} ref={forwardedRef} data-hb-accordion-button="" onClick={() => toggle(index)}>
      {children}
    </Comp>
  );
});

export const AccordionPanel = forwardRef(function (
  { children, as: Comp = "div", index, ...props }: AccordionPanelProps,
  forwardedRef
) {
  const { activeIndex } = useAccordionContext();
  return (
    <Comp {...props} ref={forwardedRef} data-hb-accordion-panel="" data-hb-accordion-panel-active={activeIndex === index}>
      {children}
    </Comp>
  );
});

Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";
AccordionButton.displayName = "AccordionButton";
AccordionPanel.displayName = "AccordionPanel";
