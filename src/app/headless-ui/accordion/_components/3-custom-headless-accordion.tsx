
import { ExtendedAccordionItem } from "@/types/headless";

import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from "./custom-headless-accordion";

interface HeadlessAccordionProps {
  data: ExtendedAccordionItem[];
}

const CustomHeadlessAccordion = ({data}: HeadlessAccordionProps) => {
  
  return (
    <Accordion className="w-[300px]">
     {data?.map((item) => (
      <AccordionItem key={item.id} index={item.id}>
        <AccordionButton index={item.id} className="flex items-center gap-2">
          {item.headingText} <img src={item.icon} className='w-10 h-10'/>
        </AccordionButton>
        <AccordionPanel index={item.id}>{item.panel}</AccordionPanel>
      </AccordionItem>
     ))}
    </Accordion>
  );
};

export default CustomHeadlessAccordion;