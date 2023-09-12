import styled from "styled-components";
import { Button, Section } from "../../globalStyles";
import { motion } from "framer-motion";

export const HeroSection = styled(Section)`
  padding: clamp(70px, 100vh, 220px);
  margin-top: -18px;
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
  background-color: #312e81;
  height: ;
`;

export const HeroText = styled(motion.p)`
  font-size: clamp(0.9rem, 1vw, 1.3rem);
  line-height: 24px;
  text-align: start;
  font-weight: 800;
  letter-spacing: 2px;
  color: wheat;
`;

export const ReviewHeading = styled(motion.h1)`
  font-size: clamp(2.3rem, 3vw, 4.5rem);
  margin-bottom: 2rem;
  color: wheat;
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const ContentColumn = styled(motion.div)`
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroImageWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  /* gap: 1.5rem; */
  padding: 10px 0;
`;

export const HeroImageLogo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
