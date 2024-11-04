"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";

const Accordions = () => {
    const defaultContent = "lorem"

    return (
        <Accordion selectionMode="multiple">
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                {defaultContent}
            </AccordionItem>
        </Accordion>
    )
}

export default Accordions