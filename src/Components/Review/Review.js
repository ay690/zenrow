import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
  HeroImageLogo,
  HeroImageWrapper,
  ReviewHeading,
  ContentColumn,
} from "./ReviewStyles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Review = () => {
  const initial = {
    opacity: 0,
    y: 30,
  };

  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <HeroSection ref={ref}>
      <Container>
        <ReviewHeading
          initial={initial}
          transition={{ delay: 0.3, duration: 0.6 }}
          animate={animation}
        >
          “ZenRows' anti-bot toolkit freaks me out. We scrape every site on the
          internet and have saved hundreds of developing hours.“
        </ReviewHeading>
        <HeroImageWrapper
          initial={initial}
          transition={{ delay: 0.5, duration: 0.6 }}
          animate={animation}
        >
          <HeroImageLogo src="./assests/james_parker.webp" alt="James Parker" />
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <HeroText
              initial={initial}
              transition={{ delay: 0.5, duration: 0.6 }}
              animate={animation}
            >
              James Parker
            </HeroText>
            <HeroText
              initial={initial}
              transition={{ delay: 0.9, duration: 0.6 }}
              animate={animation}
            >
              Engineer @Skyrocket
            </HeroText>
          </ContentColumn>
        </HeroImageWrapper>
      </Container>
    </HeroSection>
  );
};

export default Review;
