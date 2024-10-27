import { AccordionItem } from "@/types/headless";


interface SecondAccordionProps {
  data: AccordionItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  displaySomething: string;
  doNothing: boolean;
}

export const SecondAccordion = ({ data, activeIndex, onChange, displaySomething, doNothing }: SecondAccordionProps) => {

  if (doNothing) return

  return (
    <div className="w-[300px]">
      {data.map((item: any, idx: number) => (
        <div key={item.id}>
          <button onClick={() => onChange(idx)}>
            {item.headingText}
            {item.icon? (
              <span className='someClassName'>{item.icon}</span>
            ) : null}
          </button>
          <div hidden={activeIndex !== idx}>
            {item.panel}
            {displaySomething}
          </div>
        </div>
      ))}
    </div>
  )
}