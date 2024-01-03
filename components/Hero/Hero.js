import React, { useEffect, useRef } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => {
  const nameRef = useRef();
  const helloRef = useRef();

  const hackEffect = (event) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    let interval = null;
    let originalValue = event.target.innerText;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return smallLetters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const hackEffectOnLoad = (text) => {
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";

    let interval = null;
    let originalValue = text.innerText;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      text.innerText = text.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text.dataset.value[index];
          }

          return smallLetters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= text.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    console.log("Hi");
    hackEffectOnLoad(helloRef.current);
  }, []);

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <p
            onMouseOver={(event) => {
              hackEffect(event);
            }}
            ref={helloRef}
            data-value="Hello there!"
          >
            Hello there! <br />
          </p>
          This is <br />
          <span
            // onMouseOver={(event) => {
            //   hackEffect(event);
            // }}
            ref={nameRef}
            data-value="Shafik's"
          >
            Shafik's
          </span>{" "}
          Portfolio!
        </SectionTitle>
        <br />
        <SectionText>
          I'm an ambitious front-end React.JS, Next.JS developer, with a
          particular interest in making things robust, maintainable, scalable,
          clean, and pretty. I try to keep up with best practices, sharping my
          skills, and build a respectful prestigious career reputation, and I'm
          always looking for new things to learn.
        </SectionText>
        <Button
          onClick={() => (window.location = "https://github.com/mhdshafi294")}
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
