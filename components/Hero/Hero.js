import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />
        This is <br />
        Shafik's Portfolio
      </SectionTitle>
      <SectionText>
        I am an ambitious front-end React.JS, and Next13 JS developer, with a
        particular interest in making things simple, robust, and pretty. I try
        to keep up with best practices and am always looking for new things to
        learn.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/mhdshafi294")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
