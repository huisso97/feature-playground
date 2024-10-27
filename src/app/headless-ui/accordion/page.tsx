'use client';

import { useState } from "react";

import { FirstAccordion } from "@/app/headless-ui/accordion/_components/1-first-accordion";
import { ACCORDION_ITEMS } from "@/constants/headless-ui";

import { SecondAccordion } from "./_components/2-second-accordion";
import ThirdHeadlessAccordion from "./_components/3-headless-accordion";

const Accordion = () => {

  const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className='mx-auto flex h-[500px] w-[1000px] gap-20'>
            <FirstAccordion
                data={ACCORDION_ITEMS}
                activeIndex={activeIndex}
                onChange={setActiveIndex}
            />
            <SecondAccordion
                data={ACCORDION_ITEMS}
                activeIndex={activeIndex}
                onChange={setActiveIndex}
                displaySomething='displaySomething'
                doNothing={false}
        />
        <ThirdHeadlessAccordion />
        </div>
    )
};

export default Accordion;
