'use client';

import { useState } from "react";


import { ACCORDION_ITEMS, EXTENDED_ACCORDION_ITEMS } from "@/constants/headless-ui";

import FirstAccordion from "./_components/1-first-accordion";
import SecondAccordion from "./_components/2-second-accordion";
import CustomHeadlessAccordion from "./_components/3-custom-headless-accordion";
import ShadcnAccordion from "./_components/4-shadcn-accordion";

const Accordion = () => {

  const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className='mx-auto flex h-[500px] w-[1200px] gap-20'>
            <FirstAccordion
                data={ACCORDION_ITEMS}
                activeIndex={activeIndex}
                onChange={setActiveIndex}
            />
            <SecondAccordion
                data={EXTENDED_ACCORDION_ITEMS}
                activeIndex={activeIndex}
                onChange={setActiveIndex}
                doNothing={false}
        />
        <CustomHeadlessAccordion data={EXTENDED_ACCORDION_ITEMS}/>
        <ShadcnAccordion data={EXTENDED_ACCORDION_ITEMS}/>
        </div>
    )
};

export default Accordion;
