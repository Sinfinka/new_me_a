import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { FaChevronDown } from "react-icons/fa";
import css from "./QuestionAccordion.module.css";

export function QuestionAccordion({ question, answer }) {
  return (
    <div className={css.accordionBlock}>
      <Accordion className={css.accordion}>
        <AccordionSummary
          expandIcon={<FaChevronDown />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={css.summary}
        >
          {question}
        </AccordionSummary>
        <AccordionDetails className={css.details}>{answer}</AccordionDetails>
      </Accordion>
    </div>
  );
}
