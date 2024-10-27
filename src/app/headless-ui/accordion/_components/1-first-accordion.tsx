import { AccordionItem } from "@/types/headless";

interface FirstAccordionProps {
  data: AccordionItem[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export const FirstAccordion = ({ data, activeIndex, onChange }: FirstAccordionProps) => {
    return (
        <div className="w-[300px]">
            {data.map((item, idx) => (
                <div key={item.id}>
                    <button onClick={() => onChange(idx)}>
                        {item.headingText}
                    </button>
                    <div hidden={activeIndex !== idx}>{item.panel}</div>
                </div>
            ))}
        </div>
    )
}