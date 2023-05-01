import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />
        This is <br />
        Shafik's Portfolio
      </SectionTitle>
      <SectionText>
      The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/mhdshafi294'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;