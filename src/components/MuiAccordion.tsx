import { ExpandCircleDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function MuiAccordion() {
  const [expanded, setExpanded] = useState<String>("");
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="learn-more"
          aria-label="learn more"
          expandIcon={<ExpandCircleDown color={"primary"} />}
        >
          <Typography>Learn More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            non enim et quae fugit rem aut, accusamus maxime amet officia
            numquam itaque corrupti, accusantium adipisci, consequatur
            consectetur natus quam nihil.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Typography mt={4} variant="h4" gutterBottom>
        Courses offered
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e) => setExpanded("panel1")}
      >
        <AccordionSummary>Software Engineering</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, esse
          molestiae eveniet perspiciatis fugiat minus fuga aliquam possimus sed?
          Quo nostrum autem magni praesentium itaque facere sapiente at magnam
          est.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e) => setExpanded("panel2")}
      >
        <AccordionSummary>Data Science</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, esse
          molestiae eveniet perspiciatis fugiat minus fuga aliquam possimus sed?
          Quo nostrum autem magni praesentium itaque facere sapiente at magnam
          est.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e) => setExpanded("panel3")}
      >
        <AccordionSummary>Cyber Security</AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, esse
          molestiae eveniet perspiciatis fugiat minus fuga aliquam possimus sed?
          Quo nostrum autem magni praesentium itaque facere sapiente at magnam
          est.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
