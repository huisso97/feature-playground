export type DropdownItem = {
  icon: string;
  text: string;
  description: string;
}

export type AccordionItem = {
  id: number;
  headingText: string;
  panel: string;
}

export type ExtendedAccordionItem = AccordionItem & {
  icon: string;
}
