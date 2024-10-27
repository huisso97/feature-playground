import { ExtendedAccordionItem } from "@/types/headless";


interface SecondAccordionProps {
  data: ExtendedAccordionItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  doNothing: boolean;
}

 const SecondAccordion = ({ data, activeIndex, onChange,  doNothing }: SecondAccordionProps) => {

  if (doNothing) return

  return (
    <div className="w-[300px]">
      {data?.map((item: ExtendedAccordionItem, idx: number) => (
        <div key={item.id}>
          <button onClick={() => onChange(idx)} className="flex items-center gap-2">
            {item.headingText}
            {item.icon? (
              <img src={item.icon} className='w-10 h-10'/>
            ) : null}
          </button>
          <div hidden={activeIndex !== idx}>
            {item.panel}
          </div>
        </div>
      ))}
    </div>
  )
 }

 export default SecondAccordion;