
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ExtendedAccordionItem } from "@/types/headless";

interface HeadlessAccordionProps {
  data: ExtendedAccordionItem[];
}

const ShadcnAccordion = ({data}: HeadlessAccordionProps) => {
  
  return (
    <Accordion type="single" collapsible className="w-[300px]">
      {data?.map((item) => (
        <AccordionItem key={item.id} value={item.id.toString()}>
          <AccordionTrigger>{item.headingText}</AccordionTrigger>
          <AccordionContent>
            {item.panel}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ShadcnAccordion;