"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for arrow up and down
import CyberSecuritySolutions from "@/app/services/cyber-security-solutions/index";
import DigitalTransformationCloud from "@/app/services/digital-transformation-cloud/index";
import SecurityConsultingAudit from "@/app/services/security-consulting-audit/index";
import VAPTService from "@/app/services/vapt-services/index";

const AccordionItem = ({ id, title, isOpen, onToggle, children }) => {
    return (
        <div className="border-2 border-neutral-200 rounded-lg">
            <button
                onClick={() => onToggle(id)}
                className={`w-full flex justify-between items-center text-left px-4 py-3 md:text-lg font-medium focus:outline-none hover:text-white hover:bg-blue_light duration-150 ${ isOpen ? "bg-blue_light text-white rounded-t-lg" : "bg-gray-100 rounded-lg" }`}
            >
                <span>{title}</span>
                {isOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
            </button>
            {isOpen && (
                <div className="px-4 py-4 bg-white">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function ServiceAccordion() {
    const [openAccordions, setOpenAccordions] = useState([]);

    const toggleAccordion = (id) => {
        setOpenAccordions((prev) =>
            prev.includes(id)
                ? prev.filter((accordionId) => accordionId !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="flex flex-col gap-4">
            <AccordionItem
                id={1}
                title="Cyber Security Solutions"
                isOpen={openAccordions.includes(1)}
                onToggle={toggleAccordion}
            >
                <CyberSecuritySolutions />
            </AccordionItem>
            <AccordionItem
                id={2}
                title="Digital Transformation & Cloud"
                isOpen={openAccordions.includes(2)}
                onToggle={toggleAccordion}
            >
                <DigitalTransformationCloud />
            </AccordionItem>
            <AccordionItem
                id={3}
                title="Security Consulting & Audit"
                isOpen={openAccordions.includes(3)}
                onToggle={toggleAccordion}
            >
                <SecurityConsultingAudit />
            </AccordionItem>
            <AccordionItem
                id={4}
                title="VAPT services"
                isOpen={openAccordions.includes(4)}
                onToggle={toggleAccordion}
            >
                <VAPTService />
            </AccordionItem>
        </div>
    );
}
